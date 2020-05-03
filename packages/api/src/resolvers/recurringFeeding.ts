import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import RecurringFeeding from "../types/recurringFeeding";
import Feeding from "../types/feeding";
import { uuid } from "uuidv4";

@Resolver((of) => RecurringFeeding)
export class RecurringFeedingResolver {
  constructor(
    @InjectRepository(RecurringFeeding)
    private readonly RecurringFeedingRepository: Repository<RecurringFeeding>,
    @InjectRepository(Feeding)
    private readonly FeedingRepository: Repository<Feeding>
  ) {}

  @Query((returns) => [RecurringFeeding])
  async RecurringFeedings(): Promise<RecurringFeeding[]> {
    return this.RecurringFeedingRepository.find();
  }

  @Mutation((returns) => Boolean)
  async ToggleRecurringFeedingActive(@Arg("id") id: string): Promise<boolean> {
    const recurringFeeding = await this.RecurringFeedingRepository.findOneOrFail(
      {
        id: id,
      }
    );

    this.RecurringFeedingRepository.update(
      {
        id: id,
      },
      {
        active: !recurringFeeding.active,
      }
    );

    return !recurringFeeding.active;
  }
  @Mutation((returns) => Number)
  async TriggerRecurringFeedings(): Promise<number> {
    const recurringFeedings = await this.RecurringFeedingRepository.find({
      active: true,
    });
    recurringFeedings.forEach((recurringFeeding) => {
      const feeding = this.FeedingRepository.create({
        ...recurringFeeding,
        _id: uuid(),
        dateTime: new Date(),
      });
      this.FeedingRepository.save(feeding);
    });

    return recurringFeedings.length;
  }
}

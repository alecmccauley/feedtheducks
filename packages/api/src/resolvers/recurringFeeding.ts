import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import RecurringFeeding from "../types/recurringFeeding";

@Resolver((of) => RecurringFeeding)
export class RecurringFeedingResolver {
  constructor(
    @InjectRepository(RecurringFeeding)
    private readonly RecurringFeedingRepository: Repository<RecurringFeeding>
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
}

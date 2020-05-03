import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import Feeding from "../types/feeding";
import AddFeedingInput from "./types/AddFeedingInput";
import { uuid } from "uuidv4";
import RecurringFeeding from "../types/recurringFeeding";

@Resolver((of) => Feeding)
export class FeedingResolver {
  constructor(
    @InjectRepository(Feeding)
    private readonly FeedingRepository: Repository<Feeding>,
    @InjectRepository(RecurringFeeding)
    private readonly RecurringFeedingRepository: Repository<RecurringFeeding>
  ) {}

  @Query((returns) => Feeding, { nullable: true })
  Feeding(@Arg("id", (type) => String) FeedingId: string) {
    return this.FeedingRepository.findOne(FeedingId);
  }

  @Query((returns) => [Feeding])
  Feedings(): Promise<Feeding[]> {
    return this.FeedingRepository.find();
  }

  @Mutation((returns) => Feeding)
  async addFeeding(@Arg("data") newFeeding: AddFeedingInput): Promise<Feeding> {
    const feeding = this.FeedingRepository.create({
      _id: uuid(),
      ...newFeeding,
      location: {
        lat: newFeeding.lat,
        lng: newFeeding.lng,
      },
    });

    if (newFeeding.recurring) {
      const recurringFeeding = this.RecurringFeedingRepository.create({
        _id: uuid(),
        ...newFeeding,
        location: {
          lat: newFeeding.lat,
          lng: newFeeding.lng,
        },
        active: true,
      });
      await this.RecurringFeedingRepository.save(recurringFeeding);
    }

    return await this.FeedingRepository.save(feeding);
  }
}

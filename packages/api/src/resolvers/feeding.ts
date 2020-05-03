import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import Feeding from "../types/feeding";
import AddFeedingInput from "./types/AddFeedingInput";
import { uuid } from "uuidv4";

@Resolver((of) => Feeding)
export class FeedingResolver {
  constructor(
    @InjectRepository(Feeding)
    private readonly FeedingRepository: Repository<Feeding>
  ) {}

  @Query((returns) => Feeding, { nullable: true })
  Feeding(@Arg("id", (type) => Int) FeedingId: number) {
    return this.FeedingRepository.findOne(FeedingId);
  }

  @Query((returns) => [Feeding])
  Feedings(): Promise<Feeding[]> {
    return this.FeedingRepository.find();
  }

  @Mutation((returns) => Feeding)
  async addFeeding(@Arg("data") newFeeding: AddFeedingInput): Promise<Feeding> {
    const Feeding = this.FeedingRepository.create({
      _id: uuid(),
      ...newFeeding,
      location: {
        lat: newFeeding.lat,
        lng: newFeeding.lng,
      },
    });
    return await this.FeedingRepository.save(Feeding);
  }
}

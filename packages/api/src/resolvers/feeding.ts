import { Resolver, Query } from "type-graphql";
import Feeding from "../types/feeding";

@Resolver(Feeding)
class FeedingResolver {
  @Query((returns) => Feeding)
  feeding(): Feeding {
    return {
      id: "test",
      numberOfDucks: 5,
    };
  }
}

export default FeedingResolver;

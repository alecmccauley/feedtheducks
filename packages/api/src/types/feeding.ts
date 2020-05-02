import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Feeding {
  @Field((type) => ID)
  id: string;

  @Field()
  numberOfDucks: number;
}

export default Feeding;

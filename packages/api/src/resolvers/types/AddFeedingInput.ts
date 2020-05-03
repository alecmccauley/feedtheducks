import Feeding from "../../types/feeding";
import { InputType, Field } from "type-graphql";
import { Geo } from "../../types/geo";

@InputType({ description: "New feeding data" })
class AddFeedingInput implements Partial<Feeding> {
  @Field()
  name: string;

  @Field()
  numberOfDucks: number;

  @Field()
  dateTime: Date;

  @Field()
  lat: number;

  @Field()
  lng: number;

  @Field()
  howMuchFood: number;

  @Field()
  typeOfFood: string;

  @Field()
  recurring: true;
}

export default AddFeedingInput;

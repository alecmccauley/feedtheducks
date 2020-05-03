import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Geo {
  @Field()
  lat: number;

  @Field()
  lng: number;
}

import { ObjectType, Field, ID } from "type-graphql";
import { Entity, Column } from "typeorm";
import Feeding from "./feeding";

@ObjectType()
@Entity()
class RecurringFeeding extends Feeding {
  @Field()
  @Column()
  active: boolean;
}

export default RecurringFeeding;

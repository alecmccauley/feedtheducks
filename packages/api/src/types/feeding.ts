import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ObjectIdColumn,
} from "typeorm";

@ObjectType()
@Entity()
class Feeding {
  @Field((type) => ID)
  @ObjectIdColumn()
  id!: string;

  @ObjectIdColumn({ name: "id" })
  _id!: string;

  @Field()
  @Column()
  numberOfDucks: number;
}

export default Feeding;

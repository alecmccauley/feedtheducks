import { ObjectType, Field, ID } from "type-graphql";
import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Geo } from "./geo";

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

  @Field()
  @Column()
  dateTime: Date;

  @Field((type) => Geo)
  @Column()
  location: Geo;

  @Field()
  @Column()
  howMuchFood: number;

  @Field()
  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: number;
}

export default Feeding;

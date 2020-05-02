import { ObjectType, Field, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType()
@Entity()
class Feeding {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  numberOfDucks: number;
}

export default Feeding;

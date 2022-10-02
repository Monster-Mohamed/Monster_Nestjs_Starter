import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tests" })
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}

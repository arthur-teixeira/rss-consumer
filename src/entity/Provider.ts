import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;
}

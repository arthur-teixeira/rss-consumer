import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @Column()
  link: string;

  @Column({
    nullable: true,
  })
  content: string;

  @Column()
  published: Date;
}

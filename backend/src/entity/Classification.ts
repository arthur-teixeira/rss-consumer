import { Rating } from 'domain/Rating';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Classification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: Rating;

  @Column()
  articleId: number;
}

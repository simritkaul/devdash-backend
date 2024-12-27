import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class Flashcard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  front: string;

  @Column({ nullable: true })
  back: string;

  @ManyToOne((_type) => Group, (group) => group.flashcards, { eager: false })
  group: Group;

  @Column()
  isPublic: boolean;

  @Column()
  isAnonymous: boolean;
}

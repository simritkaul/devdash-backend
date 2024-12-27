import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flashcard } from './flashcard.entity';
import { User } from './user.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany((_type) => Flashcard, (flashcard) => flashcard.group, {
    eager: true,
  })
  flashcards: Flashcard[];

  @ManyToOne((_type) => User, (user) => user.groups)
  user: User;

  @Column()
  isPublic: boolean;

  @Column()
  isAnonymous: boolean;
}

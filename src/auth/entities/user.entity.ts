import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flashcard } from './flashcard.entity';
import { Group } from './group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany((_type) => Group, (group) => group.user, {
    eager: true,
  })
  groups: Group[];

  @OneToMany((_type) => Flashcard, (flashcard) => flashcard.user, {
    eager: true,
  })
  flashcards: Flashcard[];
}

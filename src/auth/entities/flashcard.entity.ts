import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class Flashcard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  front: string;

  @Column({ length: 200, nullable: true })
  back: string;

  @Column({ length: 2000, nullable: true })
  notes: string;

  @ManyToOne((_type) => Group, (group) => group.flashcards, { eager: false })
  group: Group;

  @ManyToOne((_type) => User, (user) => user.flashcards, { eager: false })
  user: User;

  @Column({ default: false })
  isPublic: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

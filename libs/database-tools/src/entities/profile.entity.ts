import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  profileId: string

  @Column()
  name: string

  @Column({nullable: true})
  nickname: string;

  @Column()
  email:string

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdTimestamp: Date

  @UpdateDateColumn({ type: "timestamp", onUpdate: "CURRENT_TIMESTAMP", nullable: true })
  updatedTimestamp: Date

  constructor(profile: Partial<Profile>) {
    Object.assign(this, profile)
  }
}

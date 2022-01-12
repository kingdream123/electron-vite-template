import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export default class RealTimeEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ comment: '名称' })
  name!: string;

  @Column({ comment: '所属APP名' })
  app!: string;

  @Column({ comment: '版本名' })
  version!: string;

  @Column({ comment: '版本号' })
  build!: string;

  @CreateDateColumn()
  create_time!: Date;
}

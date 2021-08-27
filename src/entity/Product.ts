import {Field, ObjectType} from 'type-graphql';
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm';


@ObjectType()
@Entity()
export class Product extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column('int', {default: 0})
    quantity!: number;

    @Field(() => String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string
}


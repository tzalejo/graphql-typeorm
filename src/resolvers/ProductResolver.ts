import {Resolver,  Mutation, Arg, Query, Field, InputType, Int} from 'type-graphql';
import {ReturningStatementNotSupportedError} from 'typeorm';
import {Product} from '../entity/Product';

@InputType()
class ProductUpdate{
    @Field(()=> String, {nullable: true})
    name?: string;

    @Field(() => Int, {nullable: true})
    quantity?: number;

}

@InputType()
class ProductInput{
    @Field()
    name!: string;

    @Field(()=>Int)
    quantity!: number;
}

@Resolver()
export class ProductResolver {

    @Mutation(() => Product)
    async createProduct(
        @Arg('variables', () => ProductInput) variables: ProductInput
        // @Arg('name') name: string,
        // @Arg('quantity') quantity: number
    ){
        const newProduct = Product.create(variables);
        console.log(newProduct);
        return await newProduct.save();
        // console.log(name, quantity);
        // await Product.insert({name, quantity});
    }


    @Mutation(()=> Boolean)
    async deleteProduct(@Arg('id', () => Int) id: number){
        console.log(id);
        await Product.delete(id);
        return true;
    }

    @Mutation(()=> Boolean)
    async updateProduct(
        @Arg('id', () => Int) id: number, 
        @Arg('fields',() => ProductUpdate) fields: ProductUpdate
    ){
        console.log(id, fields);
        await Product.update(id, fields);
        return true;
    }

    @Query(() => [Product])
    product(){
        return Product.find();
    }
}


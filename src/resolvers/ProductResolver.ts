import {Resolver,  Mutation, Arg, Query} from 'type-graphql';
import {Product} from '../entity/Product';

@Resolver()
export class ProductResolver {
    
    @Mutation(()=>Boolean)
    async createProduct(
        @Arg('name') name: string,
        @Arg('quantity') quantity: number
    ){
        console.log(name, quantity);
        await Product.insert({name, quantity});
        return true;
    }

    @Query(() => [Product])
    product(){
        return Product.find();
    }
}


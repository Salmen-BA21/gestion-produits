/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 20.99 },
        { id: 3, name: 'Product 3', price: 30.99 }
    ];
    findall() {
        return this.products;
    }
    findOne(id: number){
        const p=this.products.find((product) => product.id === id);
        return p;
    
    }
        
}

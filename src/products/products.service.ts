import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
    private products: Product[] = []
    
    // method 

    insertProduct(title: string,description: string,price: number) {
        const newProduct = new Product(new Date().toString(), title, description, price);
        this.products.push(newProduct);
        return newProduct
    }

    getAllProducts() {
        return [...this.products]
    }

}
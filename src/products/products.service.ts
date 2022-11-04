import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
    private products: Product[] = []
    
    // method 

    insertProduct(title: string,description: string,price: number) {
        const newProduct = new Product(Math.random().toString(), title, description, price);
        this.products.push(newProduct);
        return newProduct
    }

    getAllProducts() {
        return [...this.products]
    }

    getSingleProduct(productId: string) {
        const products = this.products.find(prod => prod.id === productId);
        if (!products) {
            throw new NotFoundException("Could not find product")
        }
        return { ...products }
    }

}
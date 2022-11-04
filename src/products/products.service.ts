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
        const [product] = this.findProduct(productId)
        return { ...product }
    }

    updateProduct(productId: string, prodTitle: string, prodDescription: string, prodPrice: number) {
        const [product, index] = this.findProduct(productId)
        const updatedProduct = {...product}
        if (prodTitle) {
            updatedProduct.title = prodTitle
        }
        if (prodDescription) {
            updatedProduct.description = prodDescription
        }
        if (prodPrice) {
            updatedProduct.price = prodPrice
        }
        return this.products[index] = updatedProduct
    }

    private findProduct(id: string) : [Product,number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException("Could not find product")
        }
        return [product,productIndex]
    }

}
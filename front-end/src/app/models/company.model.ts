import { ProductModel } from "./product.model";

export class CompanyModel {

    id: string;
    regionId = null;
    comunaId: string = null;
    address: string;
    products: ProductModel[] = [];
    salesAmountId: number;

    constructor() {
        
    }

    addProductValues(products: number[], description: string = ""){
        
        products.forEach(product => {
            console.log(product);
            if (product == 5) //Si se marca la opción de otro, se toma el valor del texto ingresado
                this.products.push(new ProductModel(product, description));
            else
                this.products.push(new ProductModel(product, ""));
                
        });        
    }

}
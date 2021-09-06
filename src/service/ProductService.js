export class ProductService {


    getProductsSmall() {
        return fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=>json)
    }
    
    getProducts() {
        return fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=>json)
    }

    getProductsWithOrdersSmall() {
        return fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=>json)
    }
  
}
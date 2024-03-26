class ProductManager {
    constructor(){
        this.products=[]
        this.nextid=1
    }


    addProduct(product){
        if (!this.productValid(product)){
            console.log("error , product invalid")
                return
        }

        if (this.codeDuplicate(product.code)){
            console.log("error , code duplicate")
            return
        } 

        product.id=this.nextid++
        this.products.push(product)
    }

    getProduct(){
       return this.products
    }

    getProductByID(id){
        let result = this.products.find(products=>products.id==id)
        if (result) {
        return result
        } else {
            console.log("Error Product not found")
        }
    }

    productValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    codeDuplicate(code){
        return this.products.some(products => products.code === code)
    }

    
}


const manager = new ProductManager();

//* para hacer los test por favor realizarlo en orden y luego de realizar cada iteracion comentar lo anterior y quitar el comentado de lo siguiente//


//* TEST 1 agregar producto y ver el producto//


//  manager.addProduct({
//      title: "producto prueba",
//      description:"Este es un producto prueba",
//      price:200,
//      thumbnail:"Sin imagen",
//      code:"abc123",
//      stock:25
//  })

//  const productos = manager.getProduct()
//  console.log(productos)  

//*//

//* TEST 2 agregar producto con un code repetido //

//  manager.addProduct({
//      title: "producto prueba",
//      description:"Este es un producto prueba",
//      price:200,
//      thumbnail:"Sin imagen",
//      code:"abc123",
//      stock:25
//  })


//  manager.addProduct({
//      title: "producto prueba",
//      description:"Este es un producto prueba",
//      price:200,
//      thumbnail:"Sin imagen",
//      code:"abc123",
//      stock:25
//  })

//  const productos = manager.getProduct()
//  console.log(productos)  

//*//

//* TEST 3 buscar un producto por su id //

// manager.addProduct({
//     title: "producto prueba",
//     description:"Este es un producto prueba",
//     price:200,
//     thumbnail:"Sin imagen",
//     code:"abc123",
//     stock:25
// })

// manager.addProduct({
//     title: "producto 2 prueba",
//     description:"Este es un producto prueba",
//     price:2000,
//     thumbnail:"Sin imagen",
//     code:"abcd",
//     stock:25
// })

// manager.addProduct({
//     title: "producto 3 prueba",
//     description:"Este es un producto prueba",
//     price:20000,
//     thumbnail:"Sin imagen",
//     code:"abcde",
//     stock:25
// })

// const productos = manager.getProductByID(2)
// console.log(productos)  


//* TEST 4 buscar un producto por su id y no encontrar nada //

// manager.addProduct({
//     title: "producto prueba",
//     description:"Este es un producto prueba",
//     price:200,
//     thumbnail:"Sin imagen",
//     code:"abc123",
//     stock:25
// })

// manager.addProduct({
//     title: "producto 2 prueba",
//     description:"Este es un producto prueba",
//     price:2000,
//     thumbnail:"Sin imagen",
//     code:"abcd",
//     stock:25
// })

// manager.addProduct({
//     title: "producto 3 prueba",
//     description:"Este es un producto prueba",
//     price:20000,
//     thumbnail:"Sin imagen",
//     code:"abcde",
//     stock:25
// })

// const productos = manager.getProductByID(5)
// console.log(productos)  


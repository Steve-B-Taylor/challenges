import fs from "fs"

const productsPath = "products.json"

const productsJson = () => {
  return JSON.parse(fs.readFileSync(productsPath))
}

class Product {
  constructor({ name, description, price, featured }) {
    this.name = name
    this.description = description
    this.price = price
    this.featured = featured
  }

  static findAll() {
    const productData = productsJson().products
    const productObjects = productData.map((product) => {
      return new Product(product)
    })
    return productObjects
  }

  static findFeatured() {
    const products = this.findAll()
    const featuredProducts = products.filter((product) => {
      return product.featured === true
    })
    return featuredProducts
  }

  save() {
    //get all the existing products 
    const products = this.constructor.findAll()
    //add the new product 
    products.push(this)
    // convert the data to JSON and write the data to our data file (products.json)
    fs.writeFileSync(productsPath, JSON.stringify({ products: products }))
  }

  static find(productName) {
    //get all the existing products
    const products = this.findAll()
    //find the product from products that matches the name we passed in
    const product = products.find((product) => {
      return productName === product.name
    })
    //return the product
    return product
  }
}

export default Product

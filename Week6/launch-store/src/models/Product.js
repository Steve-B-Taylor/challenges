import fs from "fs"

const productsPath = "products.json"

const productsJSON = () => {
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
    const productData = productsJSON().products
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
}

export default Product

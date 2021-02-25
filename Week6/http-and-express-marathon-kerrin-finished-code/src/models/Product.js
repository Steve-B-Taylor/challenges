import fs from 'fs'

const productsPath = "products.json"

const productsJson = () => {
  return JSON.parse(fs.readFileSync(productsPath))
}

class Product {
  constructor ( { name, price, description, featured} ) {
    this.name = name
    this.price = price
    this.description = description
    this.featured = featured
  }

  static findAll() {
    const productData = productsJson().products
    const productObjects = productData.map(product => {
      return new Product (product)
    })
    return productObjects
  }

  static findFeatured() {
    const productData = productsJson().products
    const productObjects = productData.filter(product => {
      if (product.featured) {
        return new Product(product)
      }
    })
    return productObjects
  }

  static findByName(productName) {
    const allProducts = Product.findAll()
    const foundProduct = allProducts.find((product) => {
      return product.name === productName
    })
    return foundProduct

    // const foundProduct = allProducts.find((product) => product.name === productName)
  }

  save() {
    const allProducts = this.constructor.findAll()
    allProducts.push(this)
    const jsonProducts = JSON.stringify({products: allProducts})
    fs.writeFileSync(productsPath, jsonProducts)
  }
}

export default Product
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
    this.errors = []
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
      if (product.featured) {
        return new Product(product)
      }
    })
    return featuredProducts
  }

  static findProduct(productName) {
    const products = this.findAll()
    const foundProduct = products.find((product) => {
      if (product.name === productName) {
        return product.name
      }
    })
    return foundProduct
  }

  static delete() {
    const products = this.findAll()
    const productDel = products.find((product) => {
      return product.name === this.name
    })
    products.splice(products.indexOf(productDel, 1))
    fs.writeFileSync(productsPath, JSON.stringify({ products: products }))
  }

  save() {
    const products = this.constructor.findAll()
    products.push(this)
    fs.writeFileSync(productsPath, JSON.stringify({ products: products }))
  }

  isValid() {
    const errorMsg = {
      empty: "All fields must be filled",
      notNum: "Price must be a dollar ammount, ex:(dd.cc)"
    }
    if (!this.name.trim() || !this.price.trim() || !this.description.trim()) {
      this.errors.push(errorMsg.empty)
    }
    console.log(`FOO:  ${this.price}`)
    if (!parseFloat(this.price)) {
      this.errors.push(errorMsg.notNum)
    }
    return this.errors.length > 0 ? false : true
  }
}

export default Product

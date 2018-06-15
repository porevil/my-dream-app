module.exports = () => {
  var faker = require('faker');
  const data = { products: [] }
  for (let i = 0; i < 10; i++) {
    data.products.push({
        id:i+1,
        productCode: faker.commerce.product(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        rating: faker.random.number({min: 1, max: 5})  })
  }
  return data
}
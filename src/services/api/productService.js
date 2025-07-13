import productsData from "@/services/mockData/products.json"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getProducts = async () => {
  await delay(300)
  return [...productsData]
}

export const getProductById = async (id) => {
  await delay(200)
  const product = productsData.find(p => p.Id === parseInt(id))
  if (!product) {
    throw new Error("Product not found")
  }
  return { ...product }
}

export const createProduct = async (productData) => {
  await delay(400)
  const maxId = Math.max(...productsData.map(p => p.Id), 0)
  const newProduct = {
    ...productData,
    Id: maxId + 1
  }
  productsData.push(newProduct)
  return { ...newProduct }
}

export const updateProduct = async (id, updateData) => {
  await delay(350)
  const index = productsData.findIndex(p => p.Id === parseInt(id))
  if (index === -1) {
    throw new Error("Product not found")
  }
  productsData[index] = { ...productsData[index], ...updateData }
  return { ...productsData[index] }
}

export const deleteProduct = async (id) => {
  await delay(250)
  const index = productsData.findIndex(p => p.Id === parseInt(id))
  if (index === -1) {
    throw new Error("Product not found")
  }
  const deletedProduct = { ...productsData[index] }
  productsData.splice(index, 1)
  return deletedProduct
}
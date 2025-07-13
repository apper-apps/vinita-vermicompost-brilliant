import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "@/components/molecules/ProductCard"
import { getProducts } from "@/services/api/productService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      setError("Failed to load products. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleContactForProduct = (product) => {
    const message = `Hi! I'm interested in ${product.name} (${product.size}). Please share more details and pricing.`
    const phone = "919876543210"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProducts} />
  if (products.length === 0) return <Empty message="No products available" />

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of high-quality vermicompost packages, 
            perfect for farms, nurseries, and home gardens
          </p>
          
          {/* Decorative Element */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard
                product={product}
                onContact={handleContactForProduct}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Need Custom Quantities?
            </h3>
            <p className="text-lg mb-6 text-gray-100">
              We offer bulk orders and custom packaging for large farms and commercial use
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
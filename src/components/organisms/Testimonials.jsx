import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TestimonialCard from "@/components/molecules/TestimonialCard"
import ApperIcon from "@/components/ApperIcon"
import { getTestimonials } from "@/services/api/testimonialService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const loadTestimonials = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await getTestimonials()
      setTestimonials(data)
    } catch (err) {
      setError("Failed to load testimonials. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTestimonials()
  }, [])

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [testimonials.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadTestimonials} />
  if (testimonials.length === 0) return <Empty message="No testimonials available" />

  return (
    <section id="testimonials" className="py-20 bg-surface">
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from farmers, nursery owners, and gardeners who trust our vermicompost 
            for their organic farming needs
          </p>
          
          {/* Decorative Element */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-primary hover:text-accent"
          >
            <ApperIcon name="ChevronLeft" size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-primary hover:text-accent"
          >
            <ApperIcon name="ChevronRight" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-center text-primary mb-8">
            More Happy Customers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(1, 4).map((testimonial, index) => (
              <motion.div
                key={testimonial.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-organic">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Experience the difference that premium organic vermicompost can make for your plants
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-200 btn-organic"
            >
              Start Your Order
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
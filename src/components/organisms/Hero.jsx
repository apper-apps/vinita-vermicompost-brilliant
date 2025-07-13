import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Hero = () => {
  const handleScrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-earth-texture">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium Organic
              <span className="block text-yellow-300">Vermicompost</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal">from Etah, UP</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Authentic home-grown vermicompost for farmers, nurseries, and gardeners across India. 
              100% organic, chemical-free nutrition for your plants.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <ApperIcon name="CheckCircle" className="text-accent" size={20} />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="CheckCircle" className="text-accent" size={20} />
                <span>Chemical Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="CheckCircle" className="text-accent" size={20} />
                <span>Pan India Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="CheckCircle" className="text-accent" size={20} />
                <span>Premium Quality</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={handleScrollToProducts}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                View Products
                <ApperIcon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                onClick={handleScrollToContact}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Get Quote
                <ApperIcon name="MessageCircle" className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574263867128-b2c3c2f1d1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Vermicompost"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Quality Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Award" className="text-accent" size={20} />
                  <span className="text-sm font-semibold text-primary">Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-600">Happy Farmers</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-6 -right-6 bg-accent text-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
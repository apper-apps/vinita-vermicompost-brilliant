import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const About = () => {
  const features = [
    {
      icon: "Leaf",
      title: "100% Organic Process",
      description: "Our vermicompost is produced using natural organic waste and earthworms, without any chemical additives."
    },
    {
      icon: "Home",
      title: "Home Grown in Etah",
      description: "Locally produced in Etah, UP with traditional methods passed down through generations."
    },
    {
      icon: "Truck",
      title: "Pan India Delivery",
      description: "We deliver our premium vermicompost to farmers and gardeners across all states of India."
    },
    {
      icon: "Award",
      title: "Premium Quality",
      description: "Rich in nutrients, our vermicompost improves soil health and boosts plant growth naturally."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Our Story & Commitment
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in the heart of Etah, Uttar Pradesh, Vinita Vermicompost was born from a passion 
              for sustainable agriculture and a commitment to providing farmers with the highest quality 
              organic fertilizer.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our authentic vermicompost is carefully produced using traditional methods, ensuring that 
              every batch meets our strict quality standards. We believe in nurturing the soil naturally 
              to help plants thrive and support healthier food production across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">28</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Organic</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-organic">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Organic farming in Etah"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <ApperIcon name="MapPin" className="mx-auto mb-2" size={24} />
                <div className="text-sm font-semibold">Etah, UP</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-display font-bold text-center text-primary mb-12">
            Why Choose Vinita Vermicompost?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <ApperIcon name={feature.icon} className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
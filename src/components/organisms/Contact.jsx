import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import FormField from "@/components/molecules/FormField"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { submitContactForm } from "@/services/api/contactService"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    quantity: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.location.trim()) newErrors.location = "Location is required"
    if (!formData.quantity.trim()) newErrors.quantity = "Quantity needed is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly")
      return
    }

    try {
      setLoading(true)
      await submitContactForm(formData)
      toast.success("Thank you! We'll contact you soon.")
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        quantity: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: "Phone",
      title: "Phone",
      value: "+91 84489 37972",
      action: "tel:+918448937972"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@Vvinitavermicompost.com",
      action: "mailto:info@Vvinitavermicompost.com"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Etah, Uttar Pradesh, India",
      action: null
    },
    {
      icon: "Clock",
      title: "Business Hours",
      value: "Mon - Sat: 9 AM - 6 PM",
      action: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to boost your plant growth with premium organic vermicompost? 
            Contact us for quotes, bulk orders, or any questions
          </p>
          
          {/* Decorative Element */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-surface rounded-2xl p-8 shadow-organic">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Enter your name"
                  />
                  <FormField
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <FormField
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your@email.com"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    label="Your Location *"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    error={errors.location}
                    placeholder="City, State"
                  />
                  <FormField
                    label="Quantity Needed *"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    error={errors.quantity}
                    placeholder="e.g., 100 kg, 50 bags"
                  />
                </div>

                <FormField
                  label="Message *"
                  name="message"
                  multiline
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us about your requirements, delivery preferences, or any questions..."
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <ApperIcon name="Loader2" className="mr-2 animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ApperIcon name="Send" className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <ApperIcon name={item.icon} className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
              <h4 className="text-xl font-display font-bold mb-4">Quick Contact</h4>
              <p className="mb-6 text-gray-100">
                Need immediate assistance? Contact us directly through these channels:
              </p>
              
              <div className="space-y-3">
                <a
                  href="https://wa.me/918448937972?text=Hi! I'm interested in Vinita Vermicompost products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors duration-200"
                >
                  <ApperIcon name="MessageCircle" size={20} />
                  <span>WhatsApp Chat</span>
                </a>
                
                <a
                  href="tel:+918448937972"
                  className="flex items-center space-x-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors duration-200"
                >
                  <ApperIcon name="Phone" size={20} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
import ApperIcon from "@/components/ApperIcon"

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "Products", href: "#products" },
      { name: "About Us", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ],
    "Products": [
      { name: "1kg Pack", href: "#products" },
      { name: "5kg Pack", href: "#products" },
      { name: "25kg Pack", href: "#products" },
      { name: "Bulk Orders", href: "#contact" }
    ],
    "Support": [
      { name: "FAQ", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Customer Support", href: "#contact" }
    ]
  }

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ]

  const handleLinkClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-400 rounded-lg flex items-center justify-center">
                <ApperIcon name="Leaf" className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Vinita Vermicompost</h3>
                <p className="text-gray-300 text-sm">Organic • Authentic • Pure</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium organic vermicompost from Etah, UP. We provide authentic, 
              home-grown vermicompost to farmers, nurseries, and gardeners across India 
              for healthier plant growth and sustainable agriculture.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ApperIcon name="MapPin" className="text-accent" size={16} />
                <span className="text-gray-300">Etah, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" className="text-accent" size={16} />
                <a href="tel:+918448937972" className="text-gray-300 hover:text-white transition-colors">
                  +91 8448 937972
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="text-accent" size={16} />
                <a href="mailto:info@vinitavermicompost.com" className="text-gray-300 hover:text-white transition-colors">
                  info@vvinitavermicompost.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Get updates on new products, farming tips, and special offers
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2024 Vinita Vermicompost. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <ApperIcon 
                    name={social.icon} 
                    className="text-gray-300 group-hover:text-white" 
                    size={18} 
                  />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <ApperIcon name="Shield" className="text-accent" size={16} />
                <span>100% Organic Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
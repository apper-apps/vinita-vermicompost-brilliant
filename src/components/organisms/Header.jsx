import { useState, useEffect } from "react"
import ApperIcon from "@/components/ApperIcon"
import NavigationMenu from "@/components/molecules/NavigationMenu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name="Leaf" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-primary">
                Vinita Vermicompost
              </h1>
              <p className="text-xs text-gray-600">Organic • Authentic • Pure</p>
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu />

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <ApperIcon name="Phone" className="text-primary" size={16} />
              <span className="text-gray-700">+91 84489 37972</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <ApperIcon name="MapPin" className="text-primary" size={16} />
              <span className="text-gray-700">Etah, UP</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
import { useState } from "react"
import ApperIcon from "@/components/ApperIcon"

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
      >
        <ApperIcon name={isOpen ? "X" : "Menu"} size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-700 hover:text-primary transition-colors"
              >
                <ApperIcon name="X" size={24} />
              </button>
            </div>
            <nav className="px-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default NavigationMenu
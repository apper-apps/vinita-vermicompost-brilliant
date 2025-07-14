import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in Vinita Vermicompost products. Please share more details."
    const phone = "918448937972" // Replace with actual WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="lg"
      >
        <ApperIcon name="MessageCircle" size={24} />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  )
}

export default WhatsAppButton
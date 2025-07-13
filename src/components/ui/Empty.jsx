import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  message = "No items found", 
  description = "There are no items to display at the moment.",
  actionText = "Contact Us",
  onAction
}) => {
  const handleDefaultAction = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
          <ApperIcon name="Package" className="text-primary" size={40} />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-primary mb-3">{message}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
        
        <div className="space-y-4">
          <Button 
            onClick={onAction || handleDefaultAction}
            size="lg"
          >
            <ApperIcon name="MessageCircle" className="mr-2" size={18} />
            {actionText}
          </Button>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <ApperIcon name="Phone" size={16} />
              <span>Call Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <ApperIcon name="Mail" size={16} />
              <span>Email Us</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-surface rounded-lg">
          <p className="text-sm text-gray-600">
            Looking for something specific? Contact us for custom requirements and bulk orders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Empty
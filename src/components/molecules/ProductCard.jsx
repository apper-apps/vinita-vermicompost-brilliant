import Card from "@/components/atoms/Card"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const ProductCard = ({ product, onContact }) => {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-2xl font-display font-bold text-accent mb-4">
          ₹{product.price}
        </p>
      </div>
      
      <div className="flex-1 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
        <ul className="space-y-2">
          {product.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <ApperIcon name="CheckCircle2" className="text-accent mt-0.5 flex-shrink-0" size={16} />
              <span className="text-sm text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        onClick={() => onContact(product)}
        className="w-full"
      >
        Get Quote
      </Button>
    </Card>
  )
}

export default ProductCard
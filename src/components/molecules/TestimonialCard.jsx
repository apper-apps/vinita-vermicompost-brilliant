import Card from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <ApperIcon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic">
        "{testimonial.message}"
      </blockquote>
    </Card>
  )
}

export default TestimonialCard
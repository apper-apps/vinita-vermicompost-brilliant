import Input from "@/components/atoms/Input"
import TextArea from "@/components/atoms/TextArea"

const FormField = ({ 
  label, 
  type = "text", 
  multiline = false, 
  error, 
  className,
  ...props 
}) => {
  const Component = multiline ? TextArea : Input
  
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Component
        type={type}
        className={error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default FormField
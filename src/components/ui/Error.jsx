import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <ApperIcon name="AlertCircle" className="text-red-600" size={32} />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        
        <div className="space-y-3">
          {onRetry && (
            <Button onClick={onRetry} className="w-full">
              <ApperIcon name="RefreshCw" className="mr-2" size={16} />
              Try Again
            </Button>
          )}
          
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            className="w-full"
          >
            <ApperIcon name="RotateCcw" className="mr-2" size={16} />
            Refresh Page
          </Button>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            If the problem persists, please contact our support team at{" "}
            <a href="tel:+919876543210" className="text-primary hover:underline">
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Error
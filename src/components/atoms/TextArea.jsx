import React from "react"
import { cn } from "@/utils/cn"

const TextArea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-base transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

TextArea.displayName = "TextArea"

export default TextArea
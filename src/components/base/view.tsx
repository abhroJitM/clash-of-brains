import { HtmlHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ViewProps = HtmlHTMLAttributes<HTMLDivElement> & {
  direction?: "vertical" | "horizontal"
  bordered?: boolean
  centered?: boolean
}

export function View({
  children,
  direction,
  bordered = false,
  className,
  centered = false,
  ...props
}: ViewProps) {
  return (
    <div
      className={cn(
        "flex", // Ensure container is a flexbox
        direction === "vertical" && "flex-col",
        direction === "horizontal" && "flex-row", // Set direction
        bordered && "border border-border",
        centered && "items-center justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

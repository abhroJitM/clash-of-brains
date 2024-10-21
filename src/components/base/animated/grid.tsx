"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ComponentProps } from "react"

type ViewProps = ComponentProps<typeof motion.div> & {
  bordered?: boolean
}

export function View({
  children,
  bordered = false,
  className,
  ...props
}: ViewProps) {
  return (
    <motion.div
      className={cn(
        "grid", // Ensure container is a grid
        bordered && "border border-border",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ComponentProps } from "react"

type BoxProps = ComponentProps<typeof motion.div> & {
  direction?: "vertical" | "horizontal"
  bordered?: boolean
  centered?: boolean
}

/**
 * Flexbox
 */
export function Box({
  children,
  direction,
  bordered = false,
  className,
  centered = false,
  ...props
}: BoxProps) {
  return (
    <motion.div
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
    </motion.div>
  )
}

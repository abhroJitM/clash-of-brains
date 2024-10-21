"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ComponentProps } from "react"

type ViewProps = ComponentProps<typeof motion.div> & {
  bordered?: boolean
  centered?: boolean
}

export function View({
  children,
  bordered = false,
  className,
  centered = false,
  ...props
}: ViewProps) {
  return (
    <motion.div
      className={cn(
        "gap-2 p-2",
        bordered && "border border-border",
        centered && "items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

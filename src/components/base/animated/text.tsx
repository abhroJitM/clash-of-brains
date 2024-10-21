"use client"
import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { ComponentProps } from "react"
import { textVariants } from "@/components/base/text"

type TextProps = ComponentProps<typeof motion.span> &
  VariantProps<typeof textVariants>

export function Text({
  className,
  variant,
  level,
  children,
  ...props
}: TextProps) {
  return (
    <motion.span
      className={cn(textVariants({ variant, level, className }))}
      {...props}
    >
      {children}
    </motion.span>
  )
}

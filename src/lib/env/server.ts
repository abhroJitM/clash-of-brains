import "server-only"
import { z } from "zod"

const envSchema = z.object({
  SECRET: z
    .string()
    .min(8, "Secret must be longer than 8 charecter")
    .optional(),
  NOT_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)

// Usage:
//
// import { env } from '@/lib/env/server'
// const envNeeded = () => {
// ...
//   return (
//     <>
//       {env.SECRET}
//     </>
//   )
// }

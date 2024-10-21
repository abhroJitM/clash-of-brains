import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { sleep } from "@/lib/utils/sleep"

export default async function SleepingComponent() {
  await sleep(10000)
  return (
    <div className="flex w-full flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"

export default function ScrollingProgressBar() {
  const [scroll, setScroll] = useState("0%")

  const onScrollProgress = () => {
    const html = document.documentElement
    const scrollPx = html.scrollTop
    const winHeightPx = html.scrollHeight - html.clientHeight
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`

    setScroll(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollProgress)

    return () => {
      window.removeEventListener("scroll", onScrollProgress)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-40 h-0.5 w-screen shadow-2xl">
      <div
        style={{
          width: scroll,
        }}
        className="h-full rounded-r-full bg-accent-foreground"
      />
    </div>
  )
}

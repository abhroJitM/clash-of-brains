import { useTheme as useThemeMode } from "next-themes"

export { useThemeMode }

export const themeModes = ["system", "dark", "light"]

// import { Dispatch, SetStateAction, useEffect, useState } from "react"
// // Color Modes like dark, light and system preference.
// type TColorMode = (typeof colorModes)[number]

// /**
//  * @returns Retrieves the saved theme(color mode) from local storage or server.
//  */
// export function getColorMode(): TColorMode {
//   if (typeof window == "undefined") {
//     return "system"
//   }

//   // Get themes from localstorge
//   const savedTheme = localStorage.getItem("theme") as TColorMode

//   if (!savedTheme) {
//     return "system"
//   }

//   return savedTheme
// }

// /**
//  * All available themes including extra themes and system themes.
//  */
// export const themes = ["default", "cool", "kepler"] as const
// type TColorTheme = (typeof themes)[number]

// export function setTheme(theme: TColorTheme) {
//   if (typeof window !== "undefined") {
//     const htmlElement = document.getElementsByTagName("html")[0] // Get the first <html> element
//     htmlElement.classList.remove(...themes)
//     // Save theme to localStorage
//     localStorage.setItem("theme", theme)

//     if (theme === "system") {
//       // Use system preference
//       const prefersDarkMode = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches
//       htmlElement.classList.add(prefersDarkMode ? "dark" : "light")
//     } else {
//       htmlElement.classList.add(theme)
//     }
//   }
//   // Save to server
//   // ...
// }

// export function useColorTheme(
//   newTheme?: TColorTheme
// ): [string, Dispatch<SetStateAction<TColorTheme>>] {
//   const savedTheme: ThemeProps = getTheme()

//   // State variable to hold the current theme.
//   const [currentTheme, setCurrentTheme] = useState<TColorTheme>(
//     newTheme || savedTheme
//   )

//   // Save themes to local storage or server
//   useEffect(() => {
//     setTheme(currentTheme)
//   }, [currentTheme])

//   return [currentTheme, setCurrentTheme]
// }

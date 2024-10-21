"use client"

import { View } from "@/components/base/view"
import { Text } from "@/components/base/text"
import { themeModes, useThemeMode } from "@/styles/theme"
import { Button } from "@/components/ui/button"

export function ChangeTheme() {
  const { setTheme, resolvedTheme } = useThemeMode()
  const currentThemeMode = resolvedTheme || "system"
  return (
    <View className="container">
      <Text className="text-center capitalize">dark theme and light theme</Text>
      {themeModes.map((themeMode) => (
        <Button
          key={themeMode}
          onClick={() => setTheme(themeMode)}
          disabled={themeMode == currentThemeMode}
        >
          {themeMode == currentThemeMode && "The current theme is "}
          {themeMode !== currentThemeMode && "Change to "}
          {themeMode}
        </Button>
      ))}
    </View>
  )
}

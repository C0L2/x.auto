import React from "react"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import {theme, setTheme} from "@/services/theme-service"
import clsx from "clsx"

const ThemeSwitch = ({
  className = "",
}: {
  className?: React.ComponentProps<"div">["className"]
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    setTheme(theme.value === "dark" ? "light" : "dark")
  }

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `flex-start flex rounded-[50%] shadow-inner hover:cursor-pointer dark:bg-zinc-700`,
        className
      )}
    >
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full ">
        {theme.value === "dark" ? (
          <SunIcon className="h-5 w-5 text-white" />
        ) : (
          <MoonIcon className="h-5 w-5 text-white-700" />
        )}
      </div>
    </div>
  )
}

export default ThemeSwitch

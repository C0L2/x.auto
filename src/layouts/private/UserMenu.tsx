import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import logoUrl from "@/assets/icons/logo.svg"
import { useLogoutUserMutation } from "@/pages/login/api/queries"
import { useCallback } from "react"
import { LogOutIcon } from "lucide-react"
import { useAppSelector } from "@/store"

export function UserNav() {
  const { user } = useAppSelector((state) => state.userSlice)
  const [logout] = useLogoutUserMutation()
  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  if (!user) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-[30px] w-[30px] bg-slate-600 p-1">
            <AvatarImage src={logoUrl} alt="user" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.worker_name || ""} {user.worker_surname || ""}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon className="w-5 h-5 fill-white mr-2" />
          <b>Log out</b>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

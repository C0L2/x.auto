import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"

const FilterPanel = () => {
  return (
    <div className="w-full rounded bg-gray-800 h-[400px]">
      <div className="pr-2 pl-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              className="mt-3 transition duration-200 border shadow-sm inline-flex items-center justify-center  rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-gray-500 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-gray-600 border-none text-white dark:border-primary w-full "
            >
              <Plus size={18} className="pr-1" />
              Adaugă o programare
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adaugă o programare</DialogTitle>
              <DialogDescription>
                Programarea care o adaugi va fi vizibila doar pentru
                utilizatorii cu rolul de manager si poate fi stearsa sau editata
                orisicind doriti*
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nume
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Descriere
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Creează</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Separator className="mt-3" />
      </div>
    </div>
  )
}

export default FilterPanel

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { buttonVariants } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { queryGenerator } from "../lib/utils";

export default function Header() {
  const [items, setItems] = useState({
    draft: true, 
    paid: true, 
    pending: false});
  
  function handleChange(key) {
    
    setItems((prev) => {
      return {...prev, [key]: !prev[key]}
    })
  }

  useEffect(()=> {
    const result = queryGenerator(items)
  }, [items.draft, items.paid, items.pending])

  return (
    <header>
      <div className="container">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col">
          {Object.entries(items).map(([key, value]) => {
            return (
            <label 
            key={key}
            className={`${buttonVariants({ variant: "ghost"})} 
            justify-start capitalize`} htmlFor={key}>
              <Checkbox
              value={key}
              checked={value}
              onCheckedChange={() => handleChange(key)}
              id={key}
              />{key}
            </label>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </header>
  )
}

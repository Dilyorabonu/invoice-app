import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ArrowBigDown, PlusCircleIcon } from "lucide-react";
import { useAppStore } from "../lib/zustand";
import { queryGenerator } from "../lib/utils";

export default function Header() {
  const { setFilter } = useAppStore();
  const [items, setItems] = useState({
    draft: true,
    paid: true,
    pending: true,
  });

  function handleChange(key) {
    setItems((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  }

  useEffect(() => {
    const query = queryGenerator(items);
    setFilter(query);
  }, [JSON.stringify(items)]);

  return (
    <header>
      <div className="base-container flex items-center justify-between py-10">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className={"ml-auto mr-10"} variant="ghost">
              Filter by status
              <ArrowBigDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Statuses</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col">
              {Object.entries(items).map(([key, value]) => {
                return (
                  <label
                    key={key}
                    className={`${buttonVariants({ variant: "ghost" })} 
            justify-start capitalize`}
                    htmlFor={key}
                  >
                    <Checkbox
                      value={key}
                      checked={value}
                      onCheckedChange={() => handleChange(key)}
                      id={key}
                    />
                    {key}
                  </label>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Sheet>
          <SheetTrigger className={buttonVariants({variant: "default"})}>
              <PlusCircleIcon />
              New Invoice
          </SheetTrigger>
          <SheetContent className="ml-[72px]" side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

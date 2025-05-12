import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function ItemList() {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      name: "Banner D",
      quantity: 1,
      price: 156,
      get total() {
        return this.price * this.quantity;
      },
    },
  ]);

  function handleChange(e, id) {
    const changedItem = items.find((el) => {
      return el.id === id;
    });
    changedItem[e.target.name] = e.target.value;

    setItems((prev) => {
      const mapped = prev.map((el) => {
        if (el.id === changedItem.id) {
          return changedItem;
        } else {
          return el;
        }
      });
      return mapped;
    });
  }

  function handleClick(type, id) {
    if (type === "add") {
      if (items.at(-1).name.trim() !== "") {
        setItems((prev) => {
          return [
            ...prev,
            {
              id: crypto.randomUUID(),
              name: "",
              quantity: 0,
              price: 0,
              get total() {
                return this.price * this.quantity;
              },
            },
          ];
        });
      } else {
        toast.info("Oxirgi nameni kiriting");
      }
    } else if (type === "delete") {
      if (items.length === 1) {
        toast.info("Eng kamida bitta element bo'lishi kerak");
      } else {
        const filtered = items.filter((el) => el.id !== id);
        setItems(filtered);
      }
    }
  }
  return (
    <div>
      <h3>Item List</h3>
      <div classname="flex items-center justify-between">
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
      </div>
      <ul className="flex flex-col gap-5 mb-5">
        {items.map(({ name, quantity, price, total, id }) => {
          return (
            <li key={id} className="flex items-center justify-between">
              <Input
                onChange={(e) => handleChange(e, id)}
                name="name"
                defaultValue={name}
                className="w-[214px]"
                type="text"
                placeholder="Item Name"
              />
              <Input
                onChange={(e) => handleChange(e, id)}
                name="quantity"
                defaultValue={quantity}
                className="w-[100px]"
                type="number"
                placeholder="Qty."
              />
              <Input
                onChange={(e) => handleChange(e, id)}
                name="price"
                defaultValue={price}
                className="w-[100px]"
                type="number"
                placeholder="Price"
              />
              <span>{total.toFixed(2)}</span>
              <Button
                onClick={() => handleClick("delete", id)}
                variant="destructive"
                size="icon"
              >
                <Trash2 />
              </Button>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={() => handleClick("add", crypto.randomUUID())}
        className="w-full"
        variant="secondary"
      >
        <PlusCircle /> Add New Item
      </Button>
    </div>
  );
}

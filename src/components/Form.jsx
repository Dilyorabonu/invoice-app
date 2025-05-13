import ItemList from "./ItemList";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export default function Form() {
  return (
    <form className="p-4 pt-14">
      {/* Bill From */}
      <div className="mb-10">
        <h3 className="text-2xl font-medium mb-5">Bill From</h3>
        <div className="flex flex-col gap-5">
          <div className="grid w-full max-w-full items-center gap-1.5">
            <Label htmlFor="senderAddress-street">Street Address</Label>
            <Input
              type="text"
              id="senderAddress-street"
              name="senderAddress-street"
              placeholder="Sender Address"
            />
          </div>
          <div className="flex justify-between gap-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="senderAddress-city">City</Label>
              <Input
                type="text"
                id="senderAddress-city"
                name="senderAddress-city"
                placeholder="City"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="senderAddress-postCode">Post Code</Label>
              <Input
                type="text"
                id="senderAddress-postCode"
                name="senderAddress-postCode"
                placeholder="Post Code"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="senderAddress-country">Country</Label>
              <Input
                type="text"
                id="senderAddress-country"
                name="senderAddress-country"
                placeholder="Country"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bill To */}
      <div className="mb-10">
        <h3 className="text-2xl font-medium mb-5">Bill To</h3>
        <div className="flex flex-col gap-5 mb-5">
          <div className="grid w-full max-w-full items-center gap-1.5">
            <Label htmlFor="clientName">Client's Name</Label>
            <Input
              type="text"
              id="clientName"
              name="clientName"
              placeholder="Client's Name"
            />
          </div>
          <div className="grid w-full max-w-full items-center gap-1.5">
            <Label htmlFor="clientEmail">Client's Email</Label>
            <Input
              type="text"
              id="clientEmail"
              name="clientEmail"
              placeholder="Client's Email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid w-full max-w-full items-center gap-1.5">
            <Label htmlFor="clientAddress-street">Street Address</Label>
            <Input
              type="text"
              id="clientAddress-street"
              name="clientAddress-street"
              placeholder="Sender Address"
            />
          </div>
          <div className="flex justify-between gap-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="clientAddress-city">City</Label>
              <Input
                type="text"
                id="clientAddress-city"
                name="clientAddress-city"
                placeholder="City"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="clientAddress-postCode">Post Code</Label>
              <Input
                type="text"
                id="clientAddress-postCode"
                name="clientAddress-postCode"
                placeholder="Post Code"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="clientAddress-country">Country</Label>
              <Input
                type="text"
                id="clientAddress-country"
                name="clientAddress-country"
                placeholder="Country"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Date */}
      <div className="flex flex-col gap-5 mb-10">
        <div className="flex gap-10 items-end">
          <div className="grid w-full max-w-full items-center gap-1.5">
            <Label htmlFor="createdAt">Invoice date</Label>
            <Input
              type="date"
              id="createdAt"
              name="createdAt"
              placeholder="Invoice date"
            />
          </div>
          {/* Select */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Payment Terms" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Terms</SelectLabel>
                <SelectItem value="1">Net 1 Day</SelectItem>
                <SelectItem value="7">Net 7 Day</SelectItem>
                <SelectItem value="14">Net 14 Day</SelectItem>
                <SelectItem value="30">Net 30 Day</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-full items-center gap-1.5">
          <Label htmlFor="description">Project description</Label>
          <Input
            type="text"
            id="description"
            name="description"
            placeholder="Project description"
          />
        </div>
      </div>
      <ItemList />
      <div className="flex justify-end gap-5 mt-10">
        <Button variant={"outline"}>Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}

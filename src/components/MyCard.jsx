import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadje from "./StatusBadje";
import { ArrowRight } from "lucide-react";

export default function MyCard({
  invoiceId = "RT3080",
  createdAt = "Due 19 Aug 2021",
  clientName = "Jensen Huang",
  total = "1,800.90",
  status = "draft",
  key,
}) {
  return (
    <Card key={key}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>#{invoiceId}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
          <span>{clientName}</span>
          <span>£{total}</span>
          <StatusBadje status={status}/>
          <ArrowRight className="text-[#7C5DFA]"/>
        </div>
      </CardHeader>
    </Card>
  );
}

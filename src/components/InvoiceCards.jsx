import { useEffect, useState } from "react";
import { getInvoices } from "../request";
import CardSkleton from "../components/CardSkleton";
import MyCard from "../components/MyCard";


export default function InvoiceCards() {
    const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);
      const [invoices, setInvoices] = useState([]);
      
      useEffect(() => {
        setLoading(true);
        getInvoices("/invoices")
      .then((res) => {
        setInvoices(res)
      })
      .catch(({message}) => {
        setError(message)
      })
      .finally(() => {
        setLoading(false)
      });
      }, []);
    
      if(loading) {
        return <CardSkleton />
      }
    
      if(error) {
        return <p>{error}</p>
      }
  return (
    <div className="base-container flex flex-col gap-4">
    {invoices.map((el, index)=> {
        const {createdAt, invoiceId, clientName, total, status, id} = el;

      return <MyCard 
      createdAt={createdAt} 
      invoiceId={invoiceId} 
      clientName={clientName}
      total={total}
      status={status} 
      key={id}/>
    })}
  </div>
  )
}

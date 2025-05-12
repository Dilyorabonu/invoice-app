import Header from "../components/Header";
import InvoiceCards from "../components/InvoiceCards";
import ItemList from "../components/ItemList";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      {/* <Header />
      <InvoiceCards /> */}
      <div className="container ml-[200px] mr-auto">
      <ItemList/>
      </div>
    </>
  );
}

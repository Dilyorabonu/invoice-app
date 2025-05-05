import MyCard from './components/MyCard'
import { getInvoices } from './request'

export default function App() {
  getInvoices();
  return (
    <div>
    <MyCard />
  </div>
  )
}

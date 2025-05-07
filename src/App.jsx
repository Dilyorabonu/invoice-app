import Home from './pages/Home';
import { getInvoices } from './request'

export default function App() {
  getInvoices();
  return (
   <Home />
  )
}

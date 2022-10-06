import logo from "./logo.svg";
import "./App.css";
import AccountStatement from "./pages/Statements/accountStatement";
import Invoices from "./pages/Invoices/Invoices.js";
import GetInvoices from "./pages/Statements/getInvoices.js";

function App() {
  return (
    <>
      <Invoices />
      <GetInvoices />
    </>
  );
}

export default App;

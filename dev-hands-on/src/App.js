import logo from "./logo.svg";
import "./App.css";
import ImageCarousel from "./Slider/Slider";
//import Form from './Form/Form'
import StarRating from "./StarRating/StarRating";
import { USERS, CANDIDATES } from "./data/data";
import { TRANSACTIONS } from "./data/transactions";
import { Table } from "./Table/Table";
import { SalesReport } from "./SalesReport/index";

function App() {
  const headers = Object.keys(USERS[0]);

  return (
    <div className="App">
      <SalesReport users={USERS} transactions={TRANSACTIONS} />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ImageCarousel from "./Slider/Slider";
import { StarRating } from "./StarRating/StarRating";
import { USERS, CANDIDATES } from "./data/data";
import { TRANSACTIONS } from "./data/transactions";
import { Table } from "./Table/Table";
import { SalesReport } from "./SalesReport/index";
import { Tab } from "./Tab/Tabs";
import "./Tab/styles.css";

function App() {
  const headers = Object.keys(USERS[0]);

  return (
    <div className="App">
      <Tab tabs={["Tab 1", "Tab 2", "Tab 3"]}>
        <SalesReport users={USERS} transactions={TRANSACTIONS} />
        <StarRating totalRating={5} />
        <div>Tab 3</div>
      </Tab>
    </div>
  );
}

export default App;

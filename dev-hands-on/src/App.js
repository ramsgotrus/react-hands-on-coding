import logo from "./logo.svg";
import "./App.css";
import ImageCarousel from "./Slider/Slider";
import { StarRating } from "./StarRating/StarRating";
import { USERS, CANDIDATES } from "./data/data";
import { TRANSACTIONS } from "./data/transactions";
import { Table } from "./Table/Table";
import { SalesReport } from "./SalesReport/index";
import { Tabs } from "./Tab/Tabs";
import "./Tab/styles.css";

function App() {
  const headers = Object.keys(USERS[0]);
  const tabs = ["Table 1", "Tab 2", "Tab 3"];

  return (
    <div className="App">
      <Tabs tabs={tabs}>
        <StarRating totalRating={5} />
        <SalesReport users={USERS} transactions={TRANSACTIONS} />
        <div>Tab 3</div>
      </Tabs>
    </div>
  );
}

export default App;

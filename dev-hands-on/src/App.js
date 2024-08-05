import logo from "./logo.svg";
import "./App.css";
import ImageCarousel from "./Slider/Slider";
import { StarRating } from "./StarRating/StarRating";
import { USERS, CANDIDATES, TODOLIST } from "./data/data";
import { TRANSACTIONS } from "./data/transactions";
import { Table } from "./Table/Table";
import { SalesReport } from "./SalesReport/index";
import { Tabs } from "./Tab/Tabs";
import "./Tab/styles.css";
import { Pagination } from "./Pagination/index";
import { Todo } from "./Todo/index";
import Game from "./TicTacToe/index";

function App() {
  const headers = Object.keys(USERS[0]);
  const tabs = ["Table 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

  return (
    <div className="App">
      <Tabs tabs={tabs}>
        <StarRating totalRating={5} />
        <SalesReport users={USERS} transactions={TRANSACTIONS} />
        <Pagination totalPages={10}>Tab 3</Pagination>
        <Todo items={TODOLIST} />
        <Game />
      </Tabs>
    </div>
  );
}

export default App;

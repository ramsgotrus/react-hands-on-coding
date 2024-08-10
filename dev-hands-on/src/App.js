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
import { Typeahead } from "./Typeahead/index";
import { ProgressBar } from "./ProgressBar/index";
import { RadioGroup } from "./RadioGroup/index";

function App() {
  const headers = Object.keys(USERS[0]);
  const tabs = [
    "Progress bar",
    "StarRating",
    "SalesReport",
    "Pagination",
    "Todo",
    "TicTacToe",
    "Typeahead",
    "Radio group",
    "Tabs",
  ];
  const options = ["18-34", "35-49", "50+", "Mix all ages"];
  const genderOptions = ["Male", "Female", "None"];
  return (
    <div className="tab-wrapper">
      <header>
        <h2>Interview coding exercises</h2>
      </header>
      <article>
        <Tabs tabs={tabs}>
          <ProgressBar
            color="red"
            width={500}
            height={100}
            determinate={false}
            progress={100}
          />
          <StarRating totalRating={5} />
          <SalesReport users={USERS} transactions={TRANSACTIONS} />
          <Pagination totalPages={10}>Tab 3</Pagination>
          <Todo items={TODOLIST} />
          <Game />
          <Typeahead data={USERS} />
          <RadioGroup options={options} genderOptions={genderOptions} />
        </Tabs>
      </article>
      <footer>Footer</footer>
    </div>
  );
}

export default App;

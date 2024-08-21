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
import { RandomColors } from "./RandomColors/index";
import { Switch } from "./Switch/index";
import { Tooltip } from "./Tooltip/Tooltip";
import { Modal } from "./Modal/index";
import { UserProfile } from "./NestedObject/index";
import Accordion from "./Accordion/Accordion";
import { Dropdown } from "./DropDown";
import { PhoneBookEntry } from "./PhoneBookEntry/index";

function App() {
  const countries = ["India", "USA", "Mexico", "Italy"];
  const states = ["Andhra Pradesh", "Telangana", "Bombay", "Kerla"];
  const capitalCity = ["Hyderabad", "Delhi"];
  const options = ["18-34", "35-49", "50+", "Mix all ages"];
  const genderOptions = ["Male", "Female", "None"];

  return (
    <div className="tab-wrapper">
      <header>
        <h2>Interview coding exercises</h2>
      </header>
      <article>
        <Pagination totalPages={10}>
          <ProgressBar
            color="red"
            width={500}
            height={100}
            determinate={false}
            progress={100}
          />
          <StarRating totalRating={5} />
          <SalesReport users={USERS} transactions={TRANSACTIONS} />
          <Todo items={TODOLIST} />
          <Game />
          <Typeahead data={USERS} />
          <RadioGroup options={options} genderOptions={genderOptions} />
          <RandomColors />
          <Switch />
          <Tooltip tooltipText="This is a tooltip!">
            <button>Hover over me</button>
          </Tooltip>
          <Modal />
          <UserProfile />
          <Accordion />
          <Dropdown items={countries} />
          <PhoneBookEntry />
          <Tabs tabs={["Test", "Test1"]}>
            <div>Test1</div>
            <div>Test2</div>
          </Tabs>
        </Pagination>
      </article>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;

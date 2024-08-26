import logo from "./logo.svg";
import "./App.css";
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
import { HOC } from "./HOC/index";
import { ImageCarousel } from "./Carousel/index";

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
          <HOC title="ProgressBar">
            <ProgressBar />
          </HOC>
          <HOC title="StarRating">
            <StarRating totalRating={5} />
          </HOC>
          <HOC title="SalesReport">
            <SalesReport users={USERS} transactions={TRANSACTIONS} />
          </HOC>
          <HOC title="Todo">
            <Todo items={TODOLIST} />
          </HOC>
          <HOC title="Game">
            <Game />
          </HOC>
          <HOC title="Typeahead">
            <Typeahead data={USERS} />
          </HOC>
          <HOC title="RadioGroup">
            <RadioGroup options={options} genderOptions={genderOptions} />
          </HOC>
          <HOC title="RandomColors">
            <RandomColors />
          </HOC>
          <HOC title="Switch">
            <Switch />
          </HOC>
          <HOC title="Tooltip">
            <Tooltip tooltipText="This is a tooltip!">
              <button>Hover over me</button>
            </Tooltip>
          </HOC>
          <HOC title="Modal">
            <Modal />
          </HOC>
          <HOC title="UserProfile">
            <UserProfile />
          </HOC>
          <HOC title="Accordion">
            <Accordion />
          </HOC>
          <HOC title="Dropdown">
            <Dropdown items={countries} />
          </HOC>
          <HOC title="PhoneBookEntry">
            <PhoneBookEntry />
          </HOC>
          <HOC title="Tabs">
            <Tabs tabs={["Test", "Test1"]}>
              <div>Test1</div>
              <div>Test2</div>
            </Tabs>
          </HOC>
          <HOC title="ImageCarousel">
            <ImageCarousel />
          </HOC>
        </Pagination>
      </article>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default App;

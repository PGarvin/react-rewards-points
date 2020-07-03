import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Table from "react-bootstrap/Table";
import * as serviceWorker from "./serviceWorker";

import spendingData from "./JSON/data";
import monthsData from "./JSON/months";

const startingList = spendingData();
const months = monthsData();

let threeMonthsTally = 0;

const calculatePoints = require("./functions.js").calculatePoints;
const isInLast3Months = require("./functions.js").isInLast3Months;

const purchaseList = startingList
  .filter(function (purchase) {
    if (!isInLast3Months(purchase.Date)) {
      return false; // skip
    }
    return true;
  })
  .map(function (purchase) {
    const purchaseDate = new Date(purchase.Date);
    purchase.month = purchaseDate.getMonth();
    purchase.points = calculatePoints(purchase.Spent);
    months[purchase.month]["Points"] += purchase.points;
    threeMonthsTally += purchase.points;
    months[purchase.month]["Current"] = "true";
    return purchase;
  });

const threeMonths = months
  .filter(function (month) {
    if (month.Current !== "true") {
      return false; // skip
    }
    return true;
  })
  .map(function (month) {
    return month;
  });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

purchaseList.sort(function (a, b) {
  if (a.Date > b.Date) {
    return -1;
  }
  if (a.Date < b.Date) {
    return 1;
  }
  return 0;
});

const Purchase = ({ date, spent }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>${spent}</td>
      <td>{calculatePoints(spent)}</td>
    </tr>
  );
};

const MonthTally = ({ monthName, points }) => {
  return (
    <div className="tally">
      <p className="monthName">{monthName}</p>
      <p>{points}</p>
    </div>
  );
};

class MonthCollection extends React.Component {
  render() {
    const { months } = this.props;
    return (
      <div className="tally_holder">
        {months.map((month, i) => (
          <MonthTally
            key={`month_${i}`}
            monthName={month.Month}
            points={month.Points}
          />
        ))}
        <div className="tally">
          <p className="monthName">Total</p>
          <p>{threeMonthsTally}</p>
        </div>
      </div>
    );
  }
}

class Collection extends React.Component {
  render() {
    const { purchases } = this.props;
    return (
      <div className="holder">
        <h1>Points from the last 3 months</h1>
        <MonthCollection months={threeMonths} />
        <Table striped bordered hover size="sm" className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount Spent</th>
              <th>Points Earned</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, i) => (
              <Purchase key={i} date={purchase.Date} spent={purchase.Spent} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

render(
  <Collection purchases={purchaseList} />,
  document.getElementById("root")
);

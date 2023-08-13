import React from "react";
import "./styles.css";
import Header from "../Header";

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      states: window.cs142models.statesModel(),
    };
  }

  handleChange = (event) => {
    this.setState({ filterText: event.target.value.toLowerCase() });
  };

  statesTable() {
    const states = this.state.states
      .filter((state) => state.toLowerCase().includes(this.state.filterText))
      .map((state, index) => (
        <tr key={index}>
          <td>{state}</td>
        </tr>
      ));
    return (
      <table>
        <thead>
          <tr>
            <th>States</th>
          </tr>
        </thead>
        <tbody>{states}</tbody>
      </table>
    );
  }

  searchBar() {
    return (
      <form>
        <input
          type="text"
          value={this.state.filterText}
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </form>
    );
  }

  render() {
    return (
      <div className="states">
        <Header />
        {this.searchBar()}
        <hr></hr>
        {this.statesTable()}
      </div>
    );
  }
}

export default States;

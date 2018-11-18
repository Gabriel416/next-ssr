import { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

class Robots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: null
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({ robots: response.data });
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  handleClick = robotId => {
    const selectedRobot = this.state.robots.find(robot => robot.id === robotId);

    Router.push({
      pathname: `/robot`,
      query: {
        name: selectedRobot.name,
        email: selectedRobot.email,
        city: selectedRobot.address.city,
        catchPhrase: selectedRobot.company.catchPhrase
      }
    });
  };

  renderRobotsList = () => {
    return this.state.robots.map(robot => {
      return (
        <li key={robot.id} style={{ marginBottom: "5px" }}>
          <a
            onClick={() => this.handleClick(robot.id)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {robot.name}
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Robots</h1>
        <Link href="/">
          <button style={{ marginBottom: "15px" }}>Home</button>
        </Link>
        <div>{this.state.robots && this.renderRobotsList()}</div>
      </div>
    );
  }
}

export default Robots;

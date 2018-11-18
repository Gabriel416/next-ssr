import { withRouter } from "next/router";
import Link from "next/link";

const Robot = withRouter(props => {
  const robot = props.router.query;
  return (
    <div>
      <h1>Hello my name is {robot.name}</h1>
      <h5>
        I live in {robot.city} and my catchphrase in {robot.catchPhrase}
      </h5>
      <p>You can contact me at {robot.email}</p>
      <Link href="/robots">
        <button>Back to Robots List</button>
      </Link>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
});

export default Robot;

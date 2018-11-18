import Link from "next/link";
import Image from "./components/Image";

const Architecture = () => (
  <div>
    <h1>Architecture Page</h1>
    <Link href="/">
      <button style={{ display: "block", marginBottom: "10px" }}>Home</button>
    </Link>
    <p>Architecture is cool.</p>
    <Image />
  </div>
);

export default Architecture;

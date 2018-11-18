import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Works!</h1>
    <Link href="/architecture">
      <button>Architecture</button>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
  </div>
);

export default Index;

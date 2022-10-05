import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href="/team" passHref>
        <a>This is our team</a>
      </Link>
    </>
  );
}

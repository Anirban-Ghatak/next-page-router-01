import Link from "next/link";
import LandingPage from "../containers/landingPage";
export default function Home() {
  return (
    <>
      <main>
        <LandingPage />
        {/* <Link href={`/about`}>About Page</Link> */}
      </main>
    </>
  );
}

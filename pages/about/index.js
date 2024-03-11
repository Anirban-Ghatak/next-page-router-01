import { useRouter } from "next/router";
export default function About() {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <main>
        <p>This is About page of the app</p>
      </main>
    </>
  );
}

import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-max">
          <h1>About</h1>
          <p>CONTENT</p>
        </div>
      </main>
    </>
  );
}

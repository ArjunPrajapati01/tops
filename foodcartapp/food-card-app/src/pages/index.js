import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">

        <h1>AI Powered Food Delivery Platform</h1>

        <p>
          Welcome to our food delivery application built with
          Next.js, Apollo GraphQL, Firebase and Redux.
        </p>

      </div>
    </>
  );
}
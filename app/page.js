import Image from "next/image";
import Header from "./components/Header";
import Features from "./components/Features";
import Travel from "./components/Travel";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Travel />
    </>
  );
}

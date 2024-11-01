import Image from "next/image";
import Guide from "./components/Guide";
import Hero from "./components/Hero";
import Camp from "./components/Camp";
import Features from "./components/Features";
import GetApp from "./components/GetApp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  );
}

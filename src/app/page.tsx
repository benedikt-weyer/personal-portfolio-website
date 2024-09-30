import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-10">

      <ThemeSwitch />

      <h1 className="text-4xl font-bold">Hello, I'm Benedikt</h1>

      <p className="my-2 text-lg">
        Welcome to my portfolio
      </p>


      
    </main>
  );
}

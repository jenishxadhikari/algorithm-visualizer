import React from "react";
import {Header} from "@/components/home/header";
import SwitchTab from "@/components/home/switchTab";
import {Footer} from "@/components/home/footer";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className="mt-2 flex justify-center md:px-14 md:justify-start">
        <SwitchTab />
      </main>
      <Footer />
    </>
  );
}

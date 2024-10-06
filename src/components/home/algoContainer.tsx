import React from "react";
import algorithms from "@/data/algorithms.json";
import PreviewCard from "./previewCard";

export default function AlgoContainer(): JSX.Element {
  return (
    <div className="my-5 grid w-full grid-cols-1 gap-5 md:my-8 md:grid-cols-3 lg:grid-cols-4">
      {algorithms.map((algorithm) => (
        <PreviewCard key={algorithm.title} {...algorithm}/>
      ))}
    </div>
  );
}

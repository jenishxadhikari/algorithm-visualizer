import React from "react";
import dataStructures from "@/data/dataStructures.json";
import PreviewCard from "./previewCard";

export default function DsContainer(): JSX.Element {
  return (
    <div className="my-5 grid w-full grid-cols-1 gap-5 md:my-8 md:grid-cols-3 lg:grid-cols-4">
      {dataStructures.map((dataStructure) => (
        <PreviewCard key={dataStructure.title} {...dataStructure}/>
      ))}
    </div>
  );
}

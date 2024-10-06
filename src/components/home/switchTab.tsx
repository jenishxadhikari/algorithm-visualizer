import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import AlgoContainer from "./algoContainer";
import DsContainer from "./dsContainer";

export default function SwitchTab(): JSX.Element {
  return (
    <Tabs defaultValue="algorithms" className="w-full">
      <TabsList className="mx-auto grid w-80 grid-cols-2 p-1.5 md:mx-0 md:w-96">
        <TabsTrigger value="algorithms" className="py-1.5">
          Algorithms
        </TabsTrigger>
        <TabsTrigger value="dataStructures" className="py-1.5">
          Data Structures
        </TabsTrigger>
      </TabsList>
      <TabsContent value="algorithms">
        <AlgoContainer />
      </TabsContent>
      <TabsContent value="dataStructures">
        <DsContainer />
      </TabsContent>
    </Tabs>
  );
}

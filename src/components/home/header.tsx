import React from "react";

export const Header = (): JSX.Element => {
  return (
    <header className="p-6">
      <h1 className="mb-2 text-center text-xl font-extrabold tracking-wide text-foreground md:mb-3 md:text-2xl">
        Algorithm Visualizer
      </h1>
      <h2 className="text-center text-xs font-light tracking-wider text-foreground md:text-base">
        Learn <strong>Data Structures</strong> and <strong>Algorithms</strong>{" "}
        through animations.
      </h2>
    </header>
  );
};

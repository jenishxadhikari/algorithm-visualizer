import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";

interface Data {
  title: string;
  link: string;
  img: string;
  alt: string;
  description: string;
}

export const PreviewCard = ({
  title,
  link,
  img,
  alt,
  description,
}: Data): JSX.Element => {
  return (
    <Card className="mx-auto w-60 bg-secondary/80 md:mx-0">
      <figure className="p-3">
        <Image
          src={img}
          width={240}
          height={100}
          alt={alt}
          className="aspect-video rounded-md"
        />
      </figure>
      <CardHeader className="p-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3 tracking-wide">
          {description}
        </CardDescription>
        <Button className="font-semibold">Learn</Button>
      </CardHeader>
    </Card>
  );
};

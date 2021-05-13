import * as React from "react";
import { Card } from "baseui/card";

export default function ImageCard({ Image, credit }) {
  return (
    <Card
      overrides={{
        Root: { style: { width: "90%" } },
      }}
      headerImage={Image}
    >
      <span>
        <h3>Credit: </h3> <p>{credit}</p>
      </span>
    </Card>
  );
}

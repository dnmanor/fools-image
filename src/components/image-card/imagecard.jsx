import * as React from "react";
import { Card, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

export default function ImageCard({Image}) {
  return (
    <Card
      overrides={{ Root: { style: { width: "328px" } } }}
      headerImage={Image}
      title="image"
    //   alt={pic.alt_description}
    //   src={pic.urls.full}
    //   width="50%"
    //   height="50%"
    >
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: "100%" } } }}>
         View
        </Button>
      </StyledAction>
    </Card>
  );
}

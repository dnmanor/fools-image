import * as React from "react";
import { Card, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

export default function ImageCard({Image, name}) {
  return (
    <Card
      overrides={{ Root: { style: { width: "90%", margin: '10px' } } }}
      headerImage={Image}
      title={name}
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

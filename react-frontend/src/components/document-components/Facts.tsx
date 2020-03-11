import * as React from "react";

const graphImg = require("../../img/graph1.png");

export interface FactsProps {
  facts: [{ agent: string; patient: string; event: string; location: string }];
}

export default class Word extends React.Component<FactsProps> {
  constructor(props: Readonly<FactsProps>) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <figcaption className="graphCaption">
          Important facts and implicated agents
        </figcaption>
        <figure className={"graphFigure"}>
          <img
            className={"graphImg"}
            src={graphImg.default}
            alt="loading image"
          />
        </figure>
      </div>
    );
  };
}

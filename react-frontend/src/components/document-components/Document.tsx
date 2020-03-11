import * as React from "react";
import Edu from "./Edu";

const gradientImg = require("../../img/gradient.png");

export interface DocumentProps {
  document: {
    edus: [
      {
        score: any;
        heat_color: [];
        text: [];
      }
    ];
  };
}
export interface DocumentState {}

export default class Document extends React.Component<
  DocumentProps,
  DocumentState
> {
  constructor(props: Readonly<DocumentProps>) {
    super(props);
  }

  render = () => {
    return (
      <div id="documentContainer">
        {this.props.document.edus.map((edu, index) => {
          return (
            <Edu
              key={index}
              score={edu.score}
              heat_color={edu.heat_color}
              text={edu.text}
            ></Edu>
          );
        })}
        <figure className={"gradientFigure"}>
          <img
            className={"gradientImg"}
            src={gradientImg.default}
            alt="loading image"
          />
          <figcaption className="magnitude">
            <span className="inf">0</span> <span>saliency</span>
            <span className="sup">1</span>
          </figcaption>
        </figure>
      </div>
    );
  };
}

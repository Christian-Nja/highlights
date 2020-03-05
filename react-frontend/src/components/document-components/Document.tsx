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
        <img
          className={"loadingImg"}
          src={gradientImg.default}
          alt="loading image"
        />{" "}
      </div>
    );
  };
}

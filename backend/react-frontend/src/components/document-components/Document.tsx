import * as React from "react";
import Edu from "./Edu";

const docImg = require("../../img/documenti.jpeg");

export interface DocumentProps {
  document: {
    edus: [
      {
        score: any;
        color: any;
        text: any;
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
    console.log(JSON.stringify(this.props.document).length);
    return (
      <div id="documentContainer">
        {JSON.stringify(this.props.document).length !== 2 ? (
          <div>
            {this.props.document.edus.map((edu, index) => {
              return (
                <Edu
                  key={index}
                  score={edu.score}
                  color={edu.color}
                  text={edu.text}
                ></Edu>
              );
            })}
          </div>
        ) : (
          <div>
            <img
              className={"img"}
              src={docImg.default}
              alt="documents sheets fogli scrivania deck"
            />
          </div>
        )}
      </div>
    );
  };
}

import * as React from "react";

export interface DocumentLoadingProps {}

const loadImg = require("../../img/documentProcessing.gif");

export default class DocumentLoading extends React.Component<
  DocumentLoadingProps
> {
  constructor(props: Readonly<DocumentLoadingProps>) {
    super(props);
  }

  render = () => {
    return (
      <div>
        {" "}
        <img className={"img"} src={loadImg.default} alt="loading image" />{" "}
      </div>
    );
  };
}

import * as React from "react";

export interface DocumentLoadingProps {}

const loadImg = require("../../img/docLoader.gif");

export default class DocumentLoading extends React.Component<
  DocumentLoadingProps
> {
  constructor(props: Readonly<DocumentLoadingProps>) {
    super(props);
  }

  render = () => {
    return (
      <div className={"loaderContainer"}>
        {" "}
        <img
          className={"loadingImg"}
          src={loadImg.default}
          alt="loading image"
        />{" "}
      </div>
    );
  };
}

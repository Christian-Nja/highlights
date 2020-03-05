import * as React from "react";

const docImg1 = require("../../img/documenti.png");
const docImg2 = require("../../img/documenti2.png");
const docImg3 = require("../../img/documenti3.jpeg");

export interface SoftwareProps {}

export default class Word extends React.Component<SoftwareProps> {
  constructor(props: Readonly<SoftwareProps>) {
    super(props);
  }

  render = () => {
    return (
      <div id="softwareDescription">
        <h1 id="sWDescTitle"> Know Important Facts from your Document</h1>
        <div className="sWDesc">
          {" "}
          You can use Highlights web interface to parse a document and extract
          salient information. Just write some text above or insert a plain text
          file. Highlights will parse it with the help of R2R and FRED. R2R
          performs discourse parsing. FRED do semantic parsing. You will get
          back an analyzed text, annotated with saliency. Salient parts are
          colored with red, while less important one goes to blue.
        </div>
        <br />
        <img
          className={"img"}
          src={docImg1.default}
          alt="documents sheets fogli scrivania deck"
        />
        <img
          className={"img"}
          src={docImg2.default}
          alt="documents sheets fogli scrivania deck"
        />
        <img
          className={"img"}
          src={docImg3.default}
          alt="documents sheets fogli scrivania deck"
        />
        <div className="sWDesc">
          <br /> You can use Highlights web interface to parse a document and
          extract salient information. Just write some text above or insert a
          plain text file. Highlights will parse it with the help of R2R and
          FRED. R2R performs discourse parsing. FRED do semantic parsing. You
          will get back an analyzed text, annotated with saliency. Salient parts
          are colored with red, while less important one goes to blue. FRED. R2R
          performs discourse parsing. FRED do semantic parsing. You will get
          back an analyzed text, annotated with saliency. Salient parts are
          colored with red, while less important one goes to blue.
        </div>
      </div>
    );
  };
}

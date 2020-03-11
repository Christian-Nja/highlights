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
          salient information. To try it just write some text or paste a
          document in the blocknotes on the right. Highlights will parse it with
          the help of semantic tools R2R and FRED. R2R performs discourse
          parsing. It segments the document according to RST theory discourse
          structure. FRED perform semantic parsing. You will get back an
          analyzed text, annotated with saliency. Salient parts are colored with
          red, while less important one goes to blue.
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
          extract salient information. To try it just write some text or paste a
          document in the blocknotes on the right. Highlights will parse it with
          the help of semantic tools R2R and FRED. R2R performs discourse
          parsing. It segments the document according to RST theory discourse
          structure. FRED perform semantic parsing. You will get back an
          analyzed text, annotated with saliency. Salient parts are colored with
          red, while less important one goes to blue.
        </div>
      </div>
    );
  };
}

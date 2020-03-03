import * as React from "react";
import "../basic-components/Navbar";
import Navbar from "../basic-components/Navbar";
import ControlPanel from "../basic-components/ControlPanel";
import Document from "../document-components/Document";

import axios from "axios";

export interface MainProps {}
export interface MainState {
  document: {
    edus: [
      {
        score: any;
        color: any;
        text: [];
      }
    ];
  };
}

export class MainPage extends React.Component<MainProps, MainState> {
  constructor(props: Readonly<MainProps>) {
    super(props);
    this.state = {
      document: {
        edus: [
          {
            score: null,
            color: null,
            text: []
          }
        ]
      }
    };
  }

  render = () => {
    return (
      <div>
        <Navbar title={"Highlights" /*siteTitle*/}></Navbar>
        <div className={"rowContainer"}>
          <ControlPanel
            handleTextAreaClick={this.axiosSubmitFile}
          ></ControlPanel>
          <Document document={this.state.document}></Document>
        </div>
      </div>
    );
  };

  axiosSubmitFile = async (test: string) => {
    let GATEWAY: string = "http://localhost:5050/saliency";
    let formData = new FormData();
    formData.append("input", test);
    let res = await axios.post(GATEWAY, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    let data = res.data;
    this.setState({
      document: data
    });
    console.log(this.state.document);
  };
}

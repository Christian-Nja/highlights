import * as React from "react";
import "../basic-components/Navbar";
import Navbar from "../basic-components/Navbar";
import ControlPanel from "../basic-components/ControlPanel";
import Document from "../document-components/Document";
import SoftwareDescription from "../basic-components/SoftwareDescription";
import DocumentLoading from "../document-components/DocumentLoading";

import axios from "axios";

export interface MainProps {}
export interface MainState {
  document: {
    edus: [
      {
        score: any;
        heat_color: [];
        text: [];
      }
    ];
  };
  screen: string;
  isLoading: boolean;
  loaderRef: React.RefObject<HTMLDivElement>;
  docRef: React.RefObject<HTMLDivElement>;
}

export class MainPage extends React.Component<MainProps, MainState> {
  constructor(props: Readonly<MainProps>) {
    super(props);

    this.state = {
      document: {
        edus: [
          {
            score: null,
            heat_color: [],
            text: []
          }
        ]
      },
      screen: "main",
      isLoading: false,
      loaderRef: React.createRef(),
      docRef: React.createRef()
    };
  }

  render = () => {
    return (
      <div>
        <Navbar title={"Highlights" /*siteTitle*/}></Navbar>
        <div className={"rowContainerJustified mainScreen"}>
          <SoftwareDescription></SoftwareDescription>
          <div className={"columnContainer"}>
            <ControlPanel
              handleTextAreaClick={this.axiosSubmitText}
            ></ControlPanel>
            {this.state.isLoading === true ? (
              <div ref={this.state.loaderRef}>
                <DocumentLoading></DocumentLoading>
              </div>
            ) : null}
          </div>
        </div>
        <div className={"documentScreen rowContainer"} ref={this.state.docRef}>
          <Document document={this.state.document}></Document>
          <div> QUI FATTI SALIENTI ESTRATTI DOPO INTEGRAZIONE CON FRED </div>
        </div>
      </div>
    );
  };

  axiosSubmitText = async (test: string) => {
    let GATEWAY: string = "http://localhost:5050/saliency";
    let formData = new FormData();
    formData.append("input", test);
    this.switchLoadingBanner(true);
    let res = await axios.post(GATEWAY, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    let data = res.data;
    this.setState({
      document: data,
      screen: "document",
      isLoading: false
    });
    const doc = this.state.docRef.current;
    this.scrollToMyRef(doc);
  };

  /**
   * TODO : check this, setState didn't apply since you are out of function
   */
  switchLoadingBanner = async (toggle: boolean) => {
    await this.setState({
      isLoading: toggle
    });
    const loaderNode = this.state.loaderRef.current;
    this.scrollToMyRef(loaderNode);
  };

  scrollToMyRef = (ref: HTMLElement) => {
    const factor: number = 0.3;
    const pointer: number =
      ref.getBoundingClientRect().top +
      factor *
        (ref.getBoundingClientRect().bottom - ref.getBoundingClientRect().top);
    window.scrollTo({
      top: pointer,
      behavior: "smooth"
    });
  };
}

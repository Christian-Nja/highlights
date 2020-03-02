import * as React from "react";
import "../basic-components/Navbar";
import Navbar from "../basic-components/Navbar";
import ControlPanel from "../basic-components/ControlPanel";

export interface MainProps {}

export class MainPage extends React.Component<MainProps, {}> {
  constructor(props: Readonly<MainProps>) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <Navbar title={"Highlights" /*siteTitle*/}></Navbar>
        <div>
          <ControlPanel></ControlPanel>
        </div>
      </div>
    );
  };
}

import * as React from "react";

export interface NavbarProps {
  title: string;
}

export default class Navbar extends React.Component<NavbarProps> {
  constructor(props: Readonly<NavbarProps>) {
    super(props);
  }

  render = () => {
    return <div id="siteTitle">{this.props.title}</div>;
  };
}

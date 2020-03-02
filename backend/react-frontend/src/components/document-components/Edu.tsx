import * as React from "react";

export interface EduProps {
  title: string;
}

export default class Edu extends React.Component<EduProps> {
  constructor(props: Readonly<EduProps>) {
    super(props);
  }

  render = () => {
    return <div></div>;
  };
}

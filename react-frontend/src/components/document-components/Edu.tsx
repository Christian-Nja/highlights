import * as React from "react";
import Word from "./Word";

export interface EduProps {
  score: any;
  heat_color: [];
  text: [];
}

export interface EduState {}

export default class Edu extends React.Component<EduProps, EduState> {
  constructor(props: Readonly<EduProps>) {
    super(props);
  }

  render = () => {
    const eduSaliencyStyle: {} = this.getEduSaliencyColor();
    return (
      <p className="edu" style={eduSaliencyStyle}>
        {this.props.text.map((word, index) => {
          console.log(index);
          return <Word word={word} key={index}></Word>;
        })}
      </p>
    );
  };

  getEduSaliencyColor = (): {} => {
    console.log(this.props.heat_color);
    if (this.props.heat_color.length > 0) {
      console.log("rgb detected");
      return { color: `rgb(${this.props.heat_color})` };
    } else {
      console.log("no color");
      return {};
    }
  };
}

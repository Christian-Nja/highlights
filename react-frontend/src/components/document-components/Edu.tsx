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
          return <Word word={word} key={index}></Word>;
        })}
      </p>
    );
  };

  getEduSaliencyColor = (): {} => {
    if (this.props.heat_color.length > 0) {
      return { color: `rgb(${this.props.heat_color})` };
    } else {
      return {};
    }
  };
}

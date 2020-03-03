import * as React from "react";
import Word from "./Word";

export interface EduProps {
  score: any;
  color: any;
  text: [];
}

export interface EduState {}

export default class Edu extends React.Component<EduProps, EduState> {
  constructor(props: Readonly<EduProps>) {
    super(props);
  }

  render = () => {
    return (
      <div>
        {this.props.text.map((word, index) => {
          return <Word word={word} key={index}></Word>;
        })}
      </div>
    );
  };
}

import * as React from "react";

export interface FactsProps {
  facts: [{ agent: string; patient: string; event: string; location: string }];
}

export default class Word extends React.Component<FactsProps> {
  constructor(props: Readonly<FactsProps>) {
    super(props);
  }

  render = () => {
    return (
      <div className="facts">
        {this.props.facts.map((fact, index) => {
          return (
            <div key={index}>
              <div>Event: open_1</div>
              <div>Agent: Texas_Instrument_Japan</div>
              <div>Theme: plant_1</div>
              <div>Location: Japan</div>
            </div>
          );
        })}
      </div>
    );
  };
}

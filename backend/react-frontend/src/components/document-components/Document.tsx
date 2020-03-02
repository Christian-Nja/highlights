// pannellino in cui scrivere testo o inserire un file
// (configurazioni opzionali) tasto processa

// dei documenti che vengono sfogliati come spinner

// testo colorato appare (
//     conviene creare delle classi parole, e ad ogni parola un div, creando il testo come
//     concatenazione di div così è possibile cliccare sulle parole e usare funzioni.
// )

import * as React from "react";

export interface DocumentProps {
  title: string;
}

export default class Document extends React.Component<DocumentProps> {
  constructor(props: Readonly<DocumentProps>) {
    super(props);
  }

  render = () => {
    return <div></div>;
  };
}

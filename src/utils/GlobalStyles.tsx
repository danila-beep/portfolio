import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

type GlobalColorsProps = {
  globalColorPalette: {
    "bg-color": string;
    "second-bg-color": string;
    "text-color": string;
    "main-color": string;
  };
};

const GlobalStyles = (props: GlobalColorsProps) => {
  const GlobalStyle = createGlobalStyle`
      :root {
        --bg-color: ${props.globalColorPalette["bg-color"]};
        --second-bg-color: ${props.globalColorPalette["second-bg-color"]};
        --text-color: ${props.globalColorPalette["text-color"]};
        --main-color: ${props.globalColorPalette["main-color"]};
      }
    `;

  return <GlobalStyle />;
};

export default GlobalStyles;

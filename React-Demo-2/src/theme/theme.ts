import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Graphik",
    allVariants: {
      letterSpacing: "1%",
    },
  },
  palette: {
    text: {
      primary: "#343446",
      secondary: "#7D7D89",
    },
    custom: {
      chipText: "#4B4B60",
      tableRowHover: "#f5f7ff",
    },
  },
  custom: {
    fontWeights: {
      medium: 500,
      regular: 400,
    },
    fontSizes: {
      crypto: "16px",
      fiat: "14px",
      day: "20px",
      month: "14px",
    },
    lineHeights: {
      crypto: "22px",
      fiat: "16px",
      day: "2px",
      month: "16px",
    },
    letterSpacing: {
      cryptoFiat: "1%",
      day: "0.5%",
    },
    spacing: {
      rootGap: "4px",
      rootGapRow: "12px",
      containerGap: 10,
      tableTopBarMarginLeft: "1250px",
      leftContentGap: 3.75,
    },
    dimensions: {
      rootWidth: "100px",
      rootHeight: "42px",
      rootMaxWidth: "81px",
      rootMinHeight: "44px",
      containerMinWidth: 44,
      containerMinHeight: 25,
      chipWidth: "86px",
      chipHeight: "20px",
      textWithChipWidth: "219px",
      textWithChipHeight: "46px",
    },
    inputField: {
      width: 348,
      height: 40,
      borderRadius: 4,
      borderColor: "#E8E8F7",
      placeholderColor: "#7D7D89",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      chipText: string;
      tableRowHover: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      chipText?: string;
      tableRowHover?: string;
    };
  }

  interface Theme {
    custom: {
      fontWeights: {
        medium: number;
        regular: number;
      };
      fontSizes: {
        crypto: string;
        fiat: string;
        day: string;
        month: string;
      };
      lineHeights: {
        crypto: string;
        fiat: string;
        day: string;
        month: string;
      };
      letterSpacing: {
        cryptoFiat: string;
        day: string;
      };
      spacing: {
        rootGap: string;
        rootGapRow: string;
        containerGap: number;
        tableTopBarMarginLeft: string;
        leftContentGap: number;
      };
      dimensions: {
        rootWidth: string;
        rootHeight: string;
        rootMaxWidth: string;
        rootMinHeight: string;
        containerMinWidth: number;
        containerMinHeight: number;
        chipWidth: string;
        chipHeight: string;
        textWithChipWidth: string;
        textWithChipHeight: string;
      };
      inputField: {
        width: number;
        height: number;
        borderRadius: number;
        borderColor: string;
        placeholderColor: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: Partial<Theme["custom"]>;
  }
}

export default theme;

import { createTheme } from '@mui/material/styles';

interface CustomDimensions {
  CANDIDATE_TABLE_WIDTH: number;
  CANDIDATE_TABLE_HEIGHT: number;
}

interface CustomPosition {
  TOP: number;
  LEFT: number;
}

interface CustomChipStyle {
  MIN_WIDTH: number;
  MIN_HEIGHT: number;
  BORDER_RADIUS: number;
  GAP: number;
  PADDING_Y: number;
  PADDING_X: number;
  BACKGROUND: string;
}

interface CustomColors {
  CHIP_TEXT_COLOR: string;
  CHIP_BACKGROUND_COLOR: string;
  FIRST_COLUMN_TEXT_COLOR: string;
  ROW_HOVER_COLOR: string;
}

interface CustomTypography {
  TITLE_FONT_SIZE: string;
  TITLE_FONT_WEIGHT: number;
  TITLE_FONT_FAMILY: string;
  TITLE_FONT_STYLE: string;
}

interface CustomTheme {
  dimensions: CustomDimensions;
  position: CustomPosition;
  chipStyle: CustomChipStyle;
  colors: CustomColors;
  typography: CustomTypography;
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomTheme;
  }
  interface ThemeOptions {
    custom?: CustomTheme;
  }

  interface TypographyVariants {
    candidateTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    candidateTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    candidateTitle: true;
  }
}

const theme = createTheme({
  shape: {
    borderRadius: 6
  },
  spacing: 8,
  typography: {
    candidateTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
    },
  },
  custom: {
    dimensions: {
      CANDIDATE_TABLE_WIDTH: 1056,
      CANDIDATE_TABLE_HEIGHT: 646
    },
    position: {
      TOP: 9,
      LEFT: 28
    },
    chipStyle: {
      MIN_WIDTH: 80,
      MIN_HEIGHT: 26,
      BORDER_RADIUS: 4,
      GAP: 10,
      PADDING_Y: 4,
      PADDING_X: 12,
      BACKGROUND: '#F2F4FC'
    },
    colors: {
      CHIP_TEXT_COLOR: '#224DFF',
      CHIP_BACKGROUND_COLOR: '#F2F4FC',
      FIRST_COLUMN_TEXT_COLOR: '#224DFF',
      ROW_HOVER_COLOR: '#E0E0E0'
    },
    typography: {
      TITLE_FONT_SIZE: '1.25rem',
      TITLE_FONT_WEIGHT: 600,
      TITLE_FONT_FAMILY: '"Roboto", sans-serif',
      TITLE_FONT_STYLE: 'normal',
    }
  }
});

export default theme;

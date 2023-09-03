import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,  // Default breakpoints
        sm: 600,
        md: 960,  // Change the default 'md' breakpoint
        lg: 1280, // Change the default 'lg' breakpoint
        xl: 1920,
      },
    },
  });

export default GlobalTheme
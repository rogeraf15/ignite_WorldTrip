import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    white: '#F5F8FA',
    gray: {
      "50": '#DADADA',
      "800": '#47585B', 
    },
    yellow: "#FFBA08"
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
      
    }
  }
});


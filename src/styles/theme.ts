export const theme = {
  breakpoints: {
    s: 600,
    m: 1024,
    l: 1440,
    xl: 1920
  },
  colors: {
    primary: '#E7E7E7',
    secondary: '#232323'
  },
  fontFamily: 'SF UI Display, system-ui',
  buttons: {
    primary: {
      background: '#B93434',
      color: '#E7E7E7',
      filter: 'drop-shadow(0px 3.01056px 22.5792px rgba(54, 0, 0, 0.4))',
      border: '1px solid #E7E7E7',
      hover: {
        background: '#821919',
        filter: 'drop-shadow(0px 3.01056px 22.5792px rgba(54, 0, 0, 0.6))',
        boxShadow: 'inset -1.50528px -1.50528px 9.03168px rgba(0, 0, 0, 0.35);',
        border: '1px solid #FFFFFF'
      },
      active: {
        background: '#3E3E3E',
        border: '1px solid #000000'
      },
      sizes: {
        default: {
          fontSize: '27px',
          fontWeight: 700,
          borderRadius: '12px',
          padding: '19px 35px'
        }
      }
    },
    secondary: {
      background: '#E7E7E7',
      color: '#232323',
      hover: {
        background: '#FFFFFF',
        boxShadow: '0px 0px 6.03944px #CBCBCB'
      },
      active: {
        background: '#3E3E3E',
        color: '#E7E7E7'
      },
      sizes: {
        default: {
          fontSize: '22px',
          fontWeight: 200,
          borderRadius: '12px',
          padding: '11px 25px'
        }
      }
    }
  },
  typeface: {
    margin: 0,
    h1: {
      fontSize: '60px',
      lineHeight: '71.6px',
      fontWeight: '300',
      color: '#E7E7E7'
    },
    h4: {
      fontSize: '27px',
      lineHeight: '32.22px',
      fontWeight: '400',
      color: '#E7E7E7'
    },
    h6: {
      fontSize: '22px',
      lineHeight: '26.25px',
      fontWeight: '500',
      color: '#E7E7E7'
    }
  },
  forms: {
    input: {
      background: '#E7E7E7',
      color: '#232323',
      fontWeight: 200,
      fontSize: '22px',
      lineHeight: '26px',
      borderRadius: '12px',
      padding: '15px 25px',
      hover: {
        background: '#FFFFFF',
        boxShadow: '0px 0px 6.03944px #CBCBCB'
      },
      focus: {
        background: '#FFFFFF',
        color: '#000000',
        boxShadow: 'inset -1.49693px -1.49693px 5.98773px rgba(0, 0, 0, 0.45)'
      }
    }
  }
}

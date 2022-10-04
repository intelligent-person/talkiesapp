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
  fontFamily: 'Montserrat, sans-serif',
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
        },
        small: {
          fontSize: '16px',
          fontWeight: 700,
          borderRadius: '10px',
          padding: '12px 20px'
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
          fontSize: '20px',
          fontWeight: 300,
          borderRadius: '12px',
          padding: '10px 11px'
        },
        small: {
          fontSize: '16px',
          fontWeight: 300,
          borderRadius: '10px',
          padding: '12px 10px'
        }
      }
    },
    watch: {
      background: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(255, 255, 255, 1)',
      border: '1px solid #FFFFFF',
      hover: {
        background: 'rgba(62, 62, 62, 1)'
      },
      active: {
        background: '#E7E7E7',
        color: '#161517',
        border: '1px solid #161517'
      },
      sizes: {
        default: {
          fontSize: '22px',
          fontWeight: 700,
          borderRadius: '12px',
          padding: '10px 22px'
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
      color: '#E7E7E7',
      mobile: {
        fontSize: '40px',
        lineHeight: '48.6px'
      }
    },
    h4: {
      fontSize: '24px',
      lineHeight: '29.26px',
      fontWeight: '700',
      color: '#E7E7E7',
      mobile: {
        fontSize: '18px',
        lineHeight: '21.94px'
      }
    },
    h6: {
      fontSize: '20px',
      lineHeight: '24.38px',
      fontWeight: '300',
      color: '#E7E7E7',
      mobile: {
        fontSize: '12px',
        lineHeight: '14.63px'
      }
    }
  },
  forms: {
    label: {
      color: '#000000',
      fontWeight: 500,
      sizes: {
        default: {
          fontSize: '14px',
          lineHeight: '27px',
          borderRadius: '12px',
          padding: '5px 10px'
        },
        small: {
          fontSize: '10px',
          lineHeight: '12.19px',
          borderRadius: '15px',
          padding: '2px 5px'
        }
      }
    },
    input: {
      background: '#E7E7E7',
      color: '#232323',
      fontWeight: 300,
      hover: {
        background: '#FFFFFF',
        boxShadow: '0px 0px 5.98773px #CBCBCB'
      },
      focus: {
        background: '#FFFFFF',
        color: '#000000',
        boxShadow: 'inset -1.49693px -1.49693px 5.98773px rgba(0, 0, 0, 1)'
      },
      sizes: {
        default: {
          fontSize: '22px',
          borderRadius: '12px',
          padding: '15px 25px'
        },
        small: {
          fontSize: '16px',
          borderRadius: '10px',
          padding: '12px 14px'
        }
      }
    }
  }
};

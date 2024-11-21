  <!-- Embedded JavaScript Code -->
  <script>
    // Questions Array (Insert your current questions here)
    const questions = [
  // Question 1
  {
    integral: '\\int \\left( 2x \\right) \\left( x^2 + 1 \\right)^3 \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = x^2 + 1',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = x^2',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\left( x^2 + 1 \\right)^3',
        thenText: ', then ',
        duEquation: 'du = 3 \\left( x^2 + 1 \\right)^2 \\cdot 2x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = 2x',
        thenText: ', then ',
        duEquation: 'du = 2 \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\dfrac{1}{4} \\left( x^2 + 1 \\right)^4 + C',
        correct: true
      },
      {
        option: '',
        equation: '\\left( x^2 + 1 \\right)^4 + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{2} \\left( x^2 + 1 \\right)^4 + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{4} \\left( x^2 + 1 \\right)^3 + C',
        correct: false
      }
    ]
  },
  // Question 2
  {
    integral: '\\int x e^{x^2} \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = x^2',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = e^{x^2}',
        thenText: ', then ',
        duEquation: 'du = e^{x^2} \\cdot 2x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x e^{x^2}',
        thenText: ', then ',
        duEquation: 'du = e^{x^2} + 2x^2 e^{x^2} \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\dfrac{1}{2} e^{x^2} + C',
        correct: true
      },
      {
        option: '',
        equation: 'e^{x^2} + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{2} x e^{x^2} + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{2} e^{2x} + C',
        correct: false
      }
    ]
  },
  // Question 3
  {
    integral: '\\int \\cos\\left( 3x \\right) \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = 3x',
        thenText: ', then ',
        duEquation: 'du = 3 \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = \\cos\\left( 3x \\right)',
        thenText: ', then ',
        duEquation: 'du = -3 \\sin\\left( 3x \\right) \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\sin\\left( 3x \\right)',
        thenText: ', then ',
        duEquation: 'du = 3 \\cos\\left( 3x \\right) \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\dfrac{1}{3} \\sin\\left( 3x \\right) + C',
        correct: true
      },
      {
        option: '',
        equation: '\\sin\\left( 3x \\right) + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{3} \\cos\\left( 3x \\right) + C',
        correct: false
      },
      {
        option: '',
        equation: '-\\dfrac{1}{3} \\sin\\left( 3x \\right) + C',
        correct: false
      }
    ]
  },
  // Question 4
  {
    integral: '\\int \\dfrac{1}{x \\ln x} \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = \\ln x',
        thenText: ', then ',
        duEquation: 'du = \\dfrac{1}{x} \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x \\ln x',
        thenText: ', then ',
        duEquation: 'du = \\ln x + 1 \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\dfrac{1}{x \\ln x}',
        thenText: ', then ',
        duEquation: 'du = -\\dfrac{1 + \\ln x}{x^2 \\left( \\ln x \\right)^2} \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\ln \\left| \\ln x \\right| + C',
        correct: true
      },
      {
        option: '',
        equation: '\\dfrac{1}{\\ln x} + C',
        correct: false
      },
      {
        option: '',
        equation: '\\ln \\left| x \\ln x \\right| + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{\\ln x}{x} + C',
        correct: false
      }
    ]
  },
  // Question 5
  {
    integral: '\\int \\dfrac{2x}{x^2 + 4} \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = x^2 + 4',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = x^2',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\left( x^2 + 4 \\right)^2',
        thenText: ', then ',
        duEquation: 'du = 2 \\left( x^2 + 4 \\right) \\cdot 2x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = 2x',
        thenText: ', then ',
        duEquation: 'du = 2 \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\ln \\left| x^2 + 4 \\right| + C',
        correct: true
      },
      {
        option: '',
        equation: '\\dfrac{1}{x^2 + 4} + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{2} \\ln \\left| x^2 + 4 \\right| + C',
        correct: false
      },
      {
        option: '',
        equation: '\\arctan \\left( \\dfrac{x}{2} \\right) + C',
        correct: false
      }
    ]
  },
  // Question 6
  {
    integral: '\\int \\sin\\left( 5x \\right) \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = 5x',
        thenText: ', then ',
        duEquation: 'du = 5 \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = \\sin\\left( 5x \\right)',
        thenText: ', then ',
        duEquation: 'du = 5 \\cos\\left( 5x \\right) \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\cos\\left( 5x \\right)',
        thenText: ', then ',
        duEquation: 'du = -5 \\sin\\left( 5x \\right) \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '-\\dfrac{1}{5} \\cos\\left( 5x \\right) + C',
        correct: true
      },
      {
        option: '',
        equation: '\\dfrac{1}{5} \\cos\\left( 5x \\right) + C',
        correct: false
      },
      {
        option: '',
        equation: '-\\cos\\left( 5x \\right) + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{5} \\sin\\left( 5x \\right) + C',
        correct: false
      }
    ]
  },
  // Question 7
  {
    integral: '\\int \\dfrac{\\left( \\arcsin x \\right)^3}{\\sqrt{1 - x^2}} \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = \\arcsin x',
        thenText: ', then ',
        duEquation: 'du = \\dfrac{1}{\\sqrt{1 - x^2}} \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = 1 - x^2',
        thenText: ', then ',
        duEquation: 'du = -2x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\sqrt{1 - x^2}',
        thenText: ', then ',
        duEquation: 'du = \\dfrac{-x}{\\sqrt{1 - x^2}} \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\frac{1}{4} \\left( \\arcsin x \\right)^4 + C',
        correct: true
      },
      {
        option: '',
        equation: '\\frac{1}{4} \\left( \\arccos x \\right)^4 + C',
        correct: false
      },
      {
        option: '',
        equation: '3 \\left( \\arcsin x \\right)^2 + C',
        correct: false
      },
      {
        option: '',
        equation: '\\frac{3 \\left( \\arcsin x \\right)^2}{\\sqrt{1-x^2}} + C',
        correct: false
      }
    ]
  },
  // Question 8
  {
    integral: '\\int e^{3x} \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = 3x',
        thenText: ', then ',
        duEquation: 'du = 3 \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = e^{3x}',
        thenText: ', then ',
        duEquation: 'du = 3 e^{3x} \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = 3',
        thenText: ', then ',
        duEquation: 'du = 0',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\dfrac{1}{3} e^{3x} + C',
        correct: true
      },
      {
        option: '',
        equation: 'e^{3x} + C',
        correct: false
      },
      {
        option: '',
        equation: '3 e^{3x} + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{3} e^{x} + C',
        correct: false
      }
    ]
  },
  // Question 9
  {
    integral: '\\int \\dfrac{x}{\\sqrt{x^2 + 1}} \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = x^2 + 1',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = \\sqrt{x^2 + 1}',
        thenText: ', then ',
        duEquation: 'du = \\dfrac{x}{\\sqrt{x^2 + 1}} \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x^2',
        thenText: ', then ',
        duEquation: 'du = 2x \\, dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\sqrt{x^2 + 1} + C',
        correct: true
      },
      {
        option: '',
        equation: '\\ln \\left| x^2 + 1 \\right| + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{1}{2} \\left( x^2 + 1 \\right)^{3/2} + C',
        correct: false
      },
      {
        option: '',
        equation: '\\dfrac{x}{\\sqrt{x^2 + 1}} + C',
        correct: false
      }
    ]
  },
 // Question 10 (Updated)
  {
    integral: '\\int \\cot x \\, dx',
    uOptions: [
      {
        option: 'Let ',
        equation: 'u = \\sin x',
        thenText: ', then ',
        duEquation: 'du = \\cos x \\, dx',
        correct: true
      },
      {
        option: 'Let ',
        equation: 'u = \\cos x',
        thenText: ', then ',
        duEquation: 'du = -\\sin x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = \\cot x',
        thenText: ', then ',
        duEquation: 'du = -\\csc^2 x \\, dx',
        correct: false
      },
      {
        option: 'Let ',
        equation: 'u = x',
        thenText: ', then ',
        duEquation: 'du = dx',
        correct: false
      }
    ],
    integralOptions: [
      {
        option: '',
        equation: '\\ln \\left| \\sin x \\right| + C',
        correct: true
      },
      {
        option: '',
        equation: '\\ln \\left| \\cos x \\right| + C',
        correct: false
      },
      {
        option: '',
        equation: '-\\ln \\left| \\tan x \\right| + C',
        correct: false
      },
      {
        option: '',
        equation: '\\ln \\left| \\cot x \\right| + C',
        correct: false
      }
    ]
  },

// Questions 11 to 20

// Question 11
{
  integral: '\\int \\left( 3x^2 \\right) \\left( x^3 + 1 \\right)^5 \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^3 + 1',
      thenText: ', then ',
      duEquation: 'du = 3x^2 \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^3',
      thenText: ', then ',
      duEquation: 'du = 3x^2 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\left( x^3 + 1 \\right)^5',
      thenText: ', then ',
      duEquation: 'du = 5\\left( x^3 + 1 \\right)^4 \\cdot 3x^2 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = 3x^2',
      thenText: ', then ',
      duEquation: 'du = 6x \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{6} \\left( x^3 + 1 \\right)^6 + C',
      correct: true
    },
    {
      option: '',
      equation: '\\left( x^3 + 1 \\right)^6 + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{5} \\left( x^3 + 1 \\right)^5 + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{3} \\left( x^3 + 1 \\right)^6 + C',
      correct: false
    }
  ]
},

// Question 12
{
  integral: '\\int \\dfrac{x}{x^2 + 1} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^2 + 1',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\ln \\left( x^2 + 1 \\right)',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{2x}{x^2 + 1} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{2} \\ln \\left| x^2 + 1 \\right| + C',
      correct: true
    },
    {
      option: '',
      equation: '\\ln \\left| x^2 + 1 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} \\ln \\left| x^2 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| x \\right| + C',
      correct: false
    }
  ]
},

// Question 13
{
  integral: '\\int \\left( \\sin x \\right) \\ e^{\\cos x} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\cos x',
      thenText: ', then ',
      duEquation: 'du = -\\sin x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\sin x',
      thenText: ', then ',
      duEquation: 'du = \\cos x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = e^{\\cos x}',
      thenText: ', then ',
      duEquation: 'du = -e^{\\cos x} \\sin x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '-e^{\\cos x} + C',
      correct: true
    },
    {
      option: '',
      equation: 'e^{\\cos x} + C',
      correct: false
    },
    {
      option: '',
      equation: '-e^{-\\cos x} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{e^{\\cos x}} + C',
      correct: false
    }
  ]
},

// Question 14
{
  integral: '\\int x^3 \\sqrt{x^4 + 1} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^4 + 1',
      thenText: ', then ',
      duEquation: 'du = 4x^3 \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^4',
      thenText: ', then ',
      duEquation: 'du = 4x^3 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\sqrt{x^4 + 1}',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{4x^3}{2\\sqrt{x^4 + 1}} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x^3',
      thenText: ', then ',
      duEquation: 'du = 3x^2 \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{6} \\left( x^4 + 1 \\right)^{3/2} + C',
      correct: true
    },
    {
      option: '',
      equation: '\\left( x^4 + 1 \\right)^{1/2} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{3} \\left( x^4 + 1 \\right)^{3/2} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{4} \\left( x^4 + 1 \\right)^{3/2} + C',
      correct: false
    }
  ]
},

// Question 15
{
  integral: '\\int \\dfrac{2x}{\\left( x^2 + 4 \\right)^2} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^2 + 4',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\left( x^2 + 4 \\right)^2',
      thenText: ', then ',
      duEquation: 'du = 2\\left( x^2 + 4 \\right) \\cdot 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '-\\dfrac{1}{x^2 + 4} + C',
      correct: true
    },
    {
      option: '',
      equation: '\\dfrac{1}{x^2 + 4} + C',
      correct: false
    },
    {
      option: '',
      equation: '-\\ln \\left| x^2 + 4 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| x^2 + 4 \\right| + C',
      correct: false
    }
  ]
},

// Question 16
{
  integral: '\\int \\tan x \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\cos x',
      thenText: ', then ',
      duEquation: 'du = -\\sin x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\sin x',
      thenText: ', then ',
      duEquation: 'du = \\cos x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\tan x',
      thenText: ', then ',
      duEquation: 'du = \\sec^2 x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '-\\ln \\left| \\cos x \\right| + C',
      correct: true
    },
    {
      option: '',
      equation: '\\ln \\left| \\sin x \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\sec^2 x  + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| \\tan x \\right| + C',
      correct: false
    }
  ]
},

// Question 17
{
  integral: '\\int x^2 e^{x^3} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^3',
      thenText: ', then ',
      duEquation: 'du = 3x^2 \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = e^{x^3}',
      thenText: ', then ',
      duEquation: 'du = e^{x^3} \\cdot 3x^2 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{3} e^{x^3} + C',
      correct: true
    },
    {
      option: '',
      equation: 'e^{x^3} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} e^{x^3} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{3} e^{x^2} + C',
      correct: false
    }
  ]
},

// Question 18
{
  integral: '\\int \\sec^2 x \\tan^7 x \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\tan x',
      thenText: ', then ',
      duEquation: 'du = \\sec^2 x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\sec x',
      thenText: ', then ',
      duEquation: 'du = \\sec x \\tan x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\tan x \\sec^7 x',
      thenText: ', then ',
      duEquation: 'du = \\sec^9 x + 7 \\sec^7 x \\tan^2 x \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{8} \\tan^8 x + C',
      correct: true
    },
    {
      option: '',
      equation: '\\tan^7 x + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{7} \\sec^2 x + C',
      correct: false
    },
    {
      option: '',
      equation: '7 \\sec^2 x \\tan^6 x + C',
      correct: false
    }
  ]
},

// Question 19
{
  integral: '\\int \\sin^3 x \\cos x \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\sin x',
      thenText: ', then ',
      duEquation: 'du = \\cos x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\cos x',
      thenText: ', then ',
      duEquation: 'du = -\\sin x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\sin^3 x',
      thenText: ', then ',
      duEquation: 'du = 3 \\sin^2 x \\cos x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{4} \\sin^4 x + C',
      correct: true
    },
    {
      option: '',
      equation: '\\dfrac{1}{3} \\sin^3 x + C',
      correct: false
    },
    {
      option: '',
      equation: '3 \\sin^2 x + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{4} \\cos^4 x + C',
      correct: false
    }
  ]
},

// Question 20
{
  integral: '\\int \\dfrac{5x}{\\sqrt{x^2 + 9}} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^2 + 9',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = 5x',
      thenText: ', then ',
      duEquation: 'du = 5 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '5\\sqrt{x^2 + 9} + C',
      correct: true
    },
    {
      option: '',
      equation: '\\dfrac{5}{2} \\left( x^2 + 9 \\right)^{3/2} + C',
      correct: false
    },
    {
      option: '',
      equation: '5\\ln \\left| x^2 + 9 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{10x}{\\sqrt{x^2 + 9}} + C',
      correct: false
    }
  ]
},

      // Questions 21 to 30

// Question 21
{
  integral: '\\int x^2 \\cos\\left( x^3 \\right) \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^3',
      thenText: ', then ',
      duEquation: 'du = 3x^2 \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\cos\\left( x^3 \\right)',
      thenText: ', then ',
      duEquation: 'du = -\\sin\\left( x^3 \\right) \\cdot 3x^2 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{3} \\sin\\left( x^3 \\right) + C',
      correct: true
    },
    {
      option: '',
      equation: '\\sin\\left( x^3 \\right) + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} \\sin\\left( x^3 \\right) + C',
      correct: false
    },
    {
      option: '',
      equation: '-\\dfrac{1}{3} \\cos\\left( x^3 \\right) + C',
      correct: false
    }
  ]
},

// Question 22
{
  integral: '\\int \\dfrac{e^{2x}}{e^{2x} + 1} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = e^{2x} + 1',
      thenText: ', then ',
      duEquation: 'du = 2e^{2x} \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = e^{2x}',
      thenText: ', then ',
      duEquation: 'du = 2e^{2x} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = 2x',
      thenText: ', then ',
      duEquation: 'du = 2 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = e^{2x} + 1',
      thenText: ', then ',
      duEquation: 'du = e^{2x} \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{2} \\ln \\left| e^{2x} + 1 \\right| + C',
      correct: true
    },
    {
      option: '',
      equation: '\\ln \\left| e^{2x} + 1 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} \\ln \\left| e^{2x} \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| e^{2x} \\right| + C',
      correct: false
    }
  ]
},

// Question 23
{
  integral: '\\int \\dfrac{1}{\\left( x \\ln x \\right)} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\ln x',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{1}{x} \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x \\ln x',
      thenText: ', then ',
      duEquation: 'du = \\ln x + 1 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\dfrac{1}{x \\ln x}',
      thenText: ', then ',
      duEquation: 'du = -\\dfrac{1 + \\ln x}{x^2 \\left( \\ln x \\right)^2} \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\ln \\left| \\ln x \\right| + C',
      correct: true
    },
    {
      option: '',
      equation: '\\dfrac{1}{\\ln x} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| x \\ln x \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{\\ln x}{x} + C',
      correct: false
    }
  ]
},

// Question 24
{
  integral: '\\int \\dfrac{\\cos x}{\\sin^2 x} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\sin x',
      thenText: ', then ',
      duEquation: 'du = \\cos x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\cos x',
      thenText: ', then ',
      duEquation: 'du = -\\sin x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\tan x',
      thenText: ', then ',
      duEquation: 'du = \\sec^2 x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\sin^2 x',
      thenText: ', then ',
      duEquation: 'du = 2 \\sin x \\cos x \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '-\\csc x + C',
      correct: true
    },
    {
      option: '',
      equation: '\\sec x + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| \\tan x \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '-\\cot x + C',
      correct: false
    }
  ]
},

// Question 25
{
  integral: '\\int \\dfrac{1}{\\sqrt{2x + 1}} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = 2x + 1',
      thenText: ', then ',
      duEquation: 'du = 2 \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\sqrt{2x + 1}',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{1}{\\sqrt{2x + 1}} \\cdot 2 \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = 2x',
      thenText: ', then ',
      duEquation: 'du = 2 \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{4} \\ln \\left| 2x+1 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '2 \\sqrt{2x + 1} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\sqrt{2x + 1} + C',
      correct: true
    },
    {
      option: '',
      equation: '\\ln \\left| 2x + 1 \\right| + C',
      correct: false
    }
  ]
},

// Question 26
{
  integral: '\\int \\dfrac{x}{\\sqrt{x^2 + 4}} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^2 + 4',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\sqrt{x^2 + 4}',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{x}{\\sqrt{x^2 + 4}} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\sqrt{x^2 + 4} + C',
      correct: true
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} \\left( x^2 + 4 \\right)^{3/2} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| x^2 + 4 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{x}{\\sqrt{x^2 + 4}} + C',
      correct: false
    }
  ]
},

// Question 27
{
  integral: '\\int e^{5x} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = 5x',
      thenText: ', then ',
      duEquation: 'du = 5 \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = e^{5x}',
      thenText: ', then ',
      duEquation: 'du = 5e^{5x} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = 5',
      thenText: ', then ',
      duEquation: 'du = 0',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{5} e^{5x} + C',
      correct: true
    },
    {
      option: '',
      equation: 'e^{5x} + C',
      correct: false
    },
    {
      option: '',
      equation: '5 e^{5x} + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{5} e^{x} + C',
      correct: false
    }
  ]
},

// Question 28
{
  integral: '\\int \\dfrac{\\ln x}{x} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = \\ln x',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{1}{x} \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\dfrac{1}{x}',
      thenText: ', then ',
      duEquation: 'du = -\\dfrac{1}{x^2} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\ln x',
      thenText: ', then ',
      duEquation: 'du = x \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{2} \\left( \\ln x \\right)^2 + C',
      correct: true
    },
    {
      option: '',
      equation: '\\left( \\ln x \\right)^2 + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} x^2 + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln x + C',
      correct: false
    }
  ]
},

// Question 29
{
  integral: '\\int \\dfrac{1}{\\left( x^2 + 1 \\right)\\arctan(x)} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x^2 + 1',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\arctan (x)',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{1}{x^2 + 1} \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = \\dfrac{1}{x^2 + 1}',
      thenText: ', then ',
      duEquation: 'du = -\\dfrac{2x}{\\left( x^2 + 1 \\right)^2} \\, dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\arctan x + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| x^2 + 1 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\ln \\left| \\arctan(x) \\right| + C',
      correct: true
    },
    {
      option: '',
      equation: '\\dfrac{-1}{\\left( \\arctan x\\right)^2}  + C',
      correct: false
    }
  ]
},

// Question 30
{
  integral: '\\int \\dfrac{x}{x^2 + 1} \\, dx',
  uOptions: [
    {
      option: 'Let ',
      equation: 'u = x^2 + 1',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: true
    },
    {
      option: 'Let ',
      equation: 'u = x^2',
      thenText: ', then ',
      duEquation: 'du = 2x \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = \\ln \\left( x^2 + 1 \\right)',
      thenText: ', then ',
      duEquation: 'du = \\dfrac{2x}{x^2 + 1} \\, dx',
      correct: false
    },
    {
      option: 'Let ',
      equation: 'u = x',
      thenText: ', then ',
      duEquation: 'du = dx',
      correct: false
    }
  ],
  integralOptions: [
    {
      option: '',
      equation: '\\dfrac{1}{2} \\ln \\left| x^2 + 1 \\right| + C',
      correct: true
    },
    {
      option: '',
      equation: '\\ln \\left| x^2 + 1 \\right| + C',
      correct: false
    },
    {
      option: '',
      equation: '\\dfrac{1}{2} \\arctan x + C',
      correct: false
    },
    {
      option: '',
      equation: '\\arctan x + C',
      correct: false
    }
  ]
}
];

</script>

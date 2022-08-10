module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx'
    ],
    options: {
      safelist: {
        standard: [
          /custom-primary-light$/, /custom-primary$/, /custom-primary-dark$/,
          /custom-secondary-light$/, /custom-secondary$/, /custom-secondary-dark$/,
          /custom-highlight-light$/, /custom-highlight$/, /custom-highlight-dark$/,
          /custom-background-light$/, /custom-background$/, /custom-background-dark$/,
          /custom-body-light$/, /custom-body$/, /custom-body-dark$/,
          /custom-gray-light$/, /custom-gray$/, /custom-gray-dark$/,
        ]
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        custom: {
          primary: {
            light: '#048abf',
            DEFAULT: '#048abf',
            dark: '#048abf',
          },
          secondary: {
            light: '#f9fafb',
            DEFAULT: '#f9fafb',
            dark: '#f9fafb',
          },
          highlight: {
            light: '#048abf',
            DEFAULT: '#048abf',
            dark: '#048abf'
          },
          background: {
            light: '#f9fafb',
            DEFAULT: '#ffffff',
            dark: '#111827'
          },
          body: {
            light: '#6b7280',
            DEFAULT: '#4b5563',
            dark: '#111827'
          },
          gray: {
            light: '#DFE6E9',
            DEFAULT: '#B2BEC3',
            dark: '#636E72',
            darker: '#2D3436'
          }
        }
      },
      fill: theme => theme('colors')
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

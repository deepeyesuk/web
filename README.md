# gatsby-ts-tailwind-template

## Version History
Version | Date        | Title           | Description
-- | -- | -- | --
v0.0.2  | 2022-01-11  | 
v0.0.1  | 2022-01-08  | Initial Release | Gatsby + essential dependencies on a basic react template 


## Mustache Variables
### gatsby-config.js

#### View:
```
{
  "site": {
    "url": "https://www.deepeyes.co.uk",
    "title": "Deepeyes Website"
    "tagline": "Welcome to Deepeyes"
  },
  "age": "RIP"
}
```

#### template
```
module.exports = {
  siteMetadata: {
    siteUrl: {{site.url}},
    title: {{site.title}},
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
  ],
};
```

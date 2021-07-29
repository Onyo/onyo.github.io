const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Pede Pronto",
  tagline: "Documentação online",
  url: "https://onyo.github.io",
  baseUrl: "/documentacao/",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "Pede Pronto", // Usually your GitHub org/user name.
  projectName: "documentacao", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: "🌙",
        lightIcon: "\u2600",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    navbar: {
      // title: "Pede Pronto",
      logo: {
        alt: "Pede Pronto Logo",
        src: "img/logo-pede-pronto.png",
      },
      items: [
        {
          href: "https://github.com/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/alelobrasil",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pede Pronto.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Jogando pra home de docs
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://onyo.github.io/documentacao",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [[require.resolve("docusaurus-lunr-search"), { languages: ["pt"] }]],
};

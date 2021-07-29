/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Introdução",
      collapsed: false,
      items: ["checkout/intro/overview"],
    },
    {
      type: "category",
      label: "Guias",
      items: ["checkout/guides/webview-integration"],
    },
    {
      type: "category",
      label: "Plugins e plataformas",
      items: ["checkout/plugins/vtex"],
    },

    {
      type: "category",
      label: "Recursos",
      items: ["checkout/resources/postman", "checkout/resources/faq"],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

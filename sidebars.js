module.exports = {
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
      label: "API para gestão de lojas",
      items: ["checkout/batch/auth-batch", "checkout/batch/categories-batch", "checkout/batch/schedule-batch", "checkout/batch/online-offline-batch", "checkout/batch/menu-batch"],
    },
    {
      type: "category",
      label: "API para gestão de pedidos",
      items: ["checkout/orders/authentication_orders", "checkout/orders/manage_orders"],
    },
  ],
};

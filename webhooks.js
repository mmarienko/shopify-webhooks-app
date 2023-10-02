import { DeliveryMethod } from "@shopify/shopify-api";

export default {
  PRODUCTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId, apiVersion) => {
      console.log('--- Product update ---');
      const payload = JSON.parse(body);
      console.log(payload);
      console.log('--- /Product update ---');
    },
  },
};

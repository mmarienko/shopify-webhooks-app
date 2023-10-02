import { LogSeverity } from '@shopify/shopify-api';
import { shopifyApp } from "@shopify/shopify-app-express";
import { restResources } from "@shopify/shopify-api/rest/admin/2023-04";

const shopify = shopifyApp({
  api: {
    apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
    adminApiAccessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    isCustomStoreApp: true,
    scopes: process.env.SCOPES.split(','),
    hostName: process.env.HOST.replace(/https?:\/\//, ''),
    hostScheme: process.env.HOST.split('://')[0],
    apiVersion: "2023-04",
    isEmbeddedApp: false,
    restResources,
    logger: {
      level: LogSeverity.Debug,
      timestamps: true,
      httpRequests: true,
      log: async (_0, message) => {
        console.log(message);
      },
    },
  },
  webhooks: {
    path: "/api/webhooks",
  },
});

export default shopify;

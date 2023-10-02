import express from "express";

import shopify from "./shopify.js";
import webhookHandlers from "./webhooks.js";

const PORT = parseInt( process.env.PORT || "3000", 10 );

const app = express();

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers })
);

app.use(express.json());

app.use(shopify.cspHeaders());

app.listen(PORT);
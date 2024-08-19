import { Express } from "express";

import { Storage } from "../types/storage.js";
import { replacer } from "../utils/json.js";

export function registerRoutes(app: Express, storage: Storage) {
  const basePath = "/indexer/";

  // Get all reserved events
  app.get(basePath + "reserved", async function (req, res) {
    const reserved = await storage.reserved.get();

    res.end(JSON.stringify(reserved, replacer));
  });
}

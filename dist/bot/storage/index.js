"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const botbuilder_azure_1 = require("botbuilder-azure");
const settings_1 = require("../../settings");
let storage;
if (process.env.NODE_ENV !== "production") {
    storage = new botbuilder_1.MemoryBotStorage();
}
else {
    const tableClient = new botbuilder_azure_1.AzureTableClient(settings_1.tableName, settings_1.storageAccountName, settings_1.storageAccountKey);
    storage = new botbuilder_azure_1.AzureBotStorage({ gzipData: false }, tableClient);
}
exports.default = storage;
//# sourceMappingURL=index.js.map
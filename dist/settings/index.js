"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    const dotenv = require("dotenv");
    dotenv.config();
}
function normalizePort(val) {
    const parsedPort = parseInt(val, 10);
    if (isNaN(parsedPort)) {
        return val;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
}
console.log('test rvt');
exports.appId = process.env.MICROSOFT_APP_ID;
exports.appPassword = process.env.MICROSOFT_APP_PASSWORD;
exports.port = normalizePort(process.env.PORT || "3987");
exports.tableName = process.env.TABLE_NAME || "botstate";
exports.storageAccountName = process.env.STORAGE_ACCOUNT_NAME;
exports.storageAccountKey = process.env.STORAGE_ACCOUNT_KEY;
//# sourceMappingURL=index.js.map
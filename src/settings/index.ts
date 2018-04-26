declare function require(moduleName: string): any;

if (process.env.NODE_ENV !== "production") {
  // Used only in development to load environment variables from local file.
  // tslint:disable:no-var-requires
  const dotenv: any = require("dotenv");

  dotenv.config();
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
  const parsedPort = parseInt(val, 10);

  if (isNaN(parsedPort)) {
    // named pipe
    return val;
  }

  if (parsedPort >= 0) {
    // port number
    return parsedPort;
  }

  return false;
}

console.log('test rvt');

export const appId = process.env.MICROSOFT_APP_ID;
export const appPassword = process.env.MICROSOFT_APP_PASSWORD;
export const port = normalizePort(process.env.PORT || "3987");
export const tableName = process.env.TABLE_NAME || "botstate";
export const storageAccountName = process.env.STORAGE_ACCOUNT_NAME;
export const storageAccountKey = process.env.STORAGE_ACCOUNT_KEY;

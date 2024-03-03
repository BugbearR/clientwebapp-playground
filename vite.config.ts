import { defineConfig } from "vite";
import fs from "fs";

const defaultConfigOptions: { server?: { https?: { key?: Buffer; cert?: Buffer } } } = {};

if (fs.existsSync("./cert/privkey.pem") && fs.existsSync("./cert/cert.pem")) {
    defaultConfigOptions.server = defaultConfigOptions.server || {};
    defaultConfigOptions.server.https = defaultConfigOptions.server.https || {};

    defaultConfigOptions.server.https.key = fs.readFileSync("./cert/privkey.pem");
    defaultConfigOptions.server.https.cert = fs.readFileSync("./cert/cert.pem");
}

export default defineConfig(defaultConfigOptions);

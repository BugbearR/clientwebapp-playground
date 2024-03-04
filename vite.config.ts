import { defineConfig, UserConfig } from "vite";
import fs from "fs";

export default defineConfig((/*{ command, mode, isSsrBuild, isPreview }*/) => {
    const defaultConfigOptions : UserConfig = {
        server: {
            port: 3000,
            strictPort: true,
            https: {
                key: undefined,
                cert: undefined,
            },
        },
    };

    if (fs.existsSync("./cert/privkey.pem") && fs.existsSync("./cert/cert.pem")) {
        defaultConfigOptions.server = defaultConfigOptions.server || {};
        defaultConfigOptions.server.https = defaultConfigOptions.server.https || {};

        defaultConfigOptions.server.https.key = fs.readFileSync("./cert/privkey.pem");
        defaultConfigOptions.server.https.cert = fs.readFileSync("./cert/cert.pem");
    }
    return defaultConfigOptions;
});

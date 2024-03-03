import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change to the script directory
process.chdir(__dirname);

// Execute the openssl command
execSync("openssl req -config localhost.openssl.cnf -x509 -newkey rsa:4096 -nodes -keyout privkey.pem -out cert.pem", { stdio: "inherit" });

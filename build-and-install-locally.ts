/////////////////////////////////////////////////////////////////////
// pnpm run build-and-install-locally													 		 //
//																																 //
/////////////////////////////////////////////////////////////////////

import { execSync } from "node:child_process"
import packageJson from "./package.json" with {
	type: "json"
}

execSync("vsce package")
execSync(`code --install-extension ${packageJson.name}-${packageJson.version}.vsix`)

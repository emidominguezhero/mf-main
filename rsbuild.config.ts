import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

const port = 3000;

export default defineConfig({
	server: {
		port: port
	},
	dev: {
		assetPrefix: `http://localhost:${3000}`
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			config.output!.uniqueName = "main";

			appendPlugins([
				new ModuleFederationPlugin({
					name: "main",
					exposes: {},
					shared: ["react", "react-dom"]
				})
			]);
		}
	},
	plugins: [pluginReact()]
});

import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

const port = 3000;

export default defineConfig({
	server: {
		port
	},
	tools: {
		rspack: (config, { appendPlugins }) => {
			config.output!.uniqueName = "main";

			appendPlugins([
				new ModuleFederationPlugin({
					name: "main",
					remotes: {
						remote: `remote@${process.env.REMOTE_URL}/mf-manifest.json`
					},
					shared: ["react", "react-dom"]
				})
			]);
		}
	},
	plugins: [pluginReact()]
});

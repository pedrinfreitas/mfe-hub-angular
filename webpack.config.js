import {
  shareAll,
  withModuleFederationPlugin,
} from "@angular-architects/module-federation/webpack";

export default withModuleFederationPlugin({
  name: "mfe-hub",

  exposes: {
    "./Module": "./src/app/app.module.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

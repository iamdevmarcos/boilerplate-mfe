const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");

module.exports = ({
  orgName,
  projectName,
  webpackConfigEnv = {},
  rootDirectoryLevel,
  generateHTML = true,
  standaloneOptions = {},
  argv,
}) => {
  const isProduction = argv.mode === "production";

  const standaloneOpts = {
    importMap: require(path.resolve(
      process.cwd(),
      "../mfe-root-config/src/importmap.json"
    )),
    ...standaloneOptions,
  };

  return {
    mode: argv.mode || "development",
    entry: path.resolve(process.cwd(), `src/${orgName}-${projectName}.ts`),
    output: {
      filename: `${orgName}-${projectName}.js`,
      path: path.resolve(process.cwd(), "dist"),
      uniqueName: `${projectName}`,
      devtoolNamespace: `${projectName}`,
      publicPath: "",
      library: {
        type: "system",
      },
    },
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      client: {
        webSocketURL: {
          hostname: "localhost",
        },
      },
      allowedHosts: "all",
    },
    externals: ["single-spa", new RegExp(`^@${orgName}/`)],
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".wasm", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
            },
          ],
        },
        {
          test: /\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
        {
          test: /\.html$/i,
          exclude: /node_modules/,
          type: "asset/source",
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName:
                    (isProduction && "[hash:base64:5]") || "[name]__[local]",
                },
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: webpackConfigEnv.bundleAnalyzer ? "server" : "disabled",
      }),
      new SystemJSPublicPathPlugin({
        rootDirectoryLevel: rootDirectoryLevel,
      }),
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
      }),
      new PrettierPlugin(),
      !isProduction && generateHTML && new HtmlWebpackPlugin(),
      !isProduction &&
        generateHTML &&
        new StandaloneSingleSpaPlugin({
          appOrParcelName: `@${orgName}/${projectName}`,
          disabled: !webpackConfigEnv.standalone,
          HtmlWebpackPlugin,
          ...standaloneOpts,
        }),
    ].filter(Boolean),
  };
};

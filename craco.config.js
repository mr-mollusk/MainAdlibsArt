module.exports = {
  webpack: {
    configure: {
      entry: "./src/index.tsx",
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};

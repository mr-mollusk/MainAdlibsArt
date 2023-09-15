module.exports = {
  webpack: {
    configure: {
      entry: "./src/index.tsx",
    },
    configure: (webpackConfig) => {
      resolve: { extentions: ['.js', '.jsx', '.ts', '.tsx', 'css'] };
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

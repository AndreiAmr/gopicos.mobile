module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@templates': './src/templates',
            '@screens': './src/screens',
            '@infra': './src/infra',
            '@routes': './src/infra/routes',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};

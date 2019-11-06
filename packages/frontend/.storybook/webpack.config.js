const { resolve } = require('path');

module.exports = ({ config }) => {

  // Adds @texas alias in storybook
  config.resolve.alias['@texas'] = resolve(__dirname, '../src');
  
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
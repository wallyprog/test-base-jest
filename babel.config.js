module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }

    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@config': './src/config',
        '@controllers': './src/controllers',
        '@views': './src/views'
      }
    }
    ],["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
  // ,
  // ignore: [
  //   '**/*.test.ts'
  // ]

}

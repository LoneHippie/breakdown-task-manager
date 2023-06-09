module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
         [
            'module:react-native-dotenv',
            {
               moduleName: '@env',
               path: '.env',
               allowUndefined: true,
               blocklist: null,
               allowlist: null
            }
         ],
         [
            require.resolve('babel-plugin-module-resolver'),
            {
               root: ['.'],
               extensions: [
                  '.js',
                  '.jsx',
                  '.ts',
                  '.tsx',
                  '.android.js',
                  '.android.tsx',
                  '.ios.js',
                  '.ios.tsx'
               ],
               alias: {
                  '~app_tools': ['./src/tools'],
                  '~app_contexts': ['./src/contexts'],
                  '~app_interfaces': ['./src/interfaces'],
                  '~app_screens': ['./src/screens']
               }
            }
         ],
         [
            '@babel/plugin-proposal-decorators',
            {
               legacy: true
            }
         ]
      ]
   };
};

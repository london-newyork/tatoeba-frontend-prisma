module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/inline',
    })
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  // app dir が安定版になったときに以下を有効にする
  // experimental: {
  //   appDir: true,
  // },
}
// const withImages= require('next-images')
// module.exports= {
//     ...withImages(),
//     future: {
//         webpack5: true,
//     },
// }

// ESLintの設定 eslint-disable を追加する
/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(frag|vert|glsl)$/,
      use: [
        { 
          loader: 'glsl-shader-loader',
          options: {
            root: '/shaders'
          }
        }
      ]
    })

    // Important: return the modified config
    return config
  },
}
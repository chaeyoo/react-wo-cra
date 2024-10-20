module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: "> 0.25%, not dead",
            useBuiltIns: 'usage',
            corejs: 3
        }],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
};
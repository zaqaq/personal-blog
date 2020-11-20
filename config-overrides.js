const path = require('path');

const {
    override,
    addDecoratorsLegacy, //引入装饰器编译方法
    addWebpackAlias,
    overrideDevServer,
    disableEsLint,
    addWebpackResolve
} = require("customize-cra"); //引入对应添加或修改 webpack 配置项的方法

function resolve(dir) {
    return path.join(__dirname, dir)
}

const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
            '/api': {
                target: 'http://192.168.2.126:8888/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        }
    };
};

const addPublicPath = () => config => {
    if(config.mode === 'production') config.output.publicPath = './'
    return config;
}

// const addPublicPath1 = () => config => {
//     if(config.mode === 'production') config.output.publicPath = './'
//     return config;
// }


module.exports = {
    webpack: override( //添加或修改通过webpack 配置通过override包裹
        disableEsLint(),
        addDecoratorsLegacy(),
        addWebpackAlias({
            '@': resolve('src'),
            '@components': resolve('src/components'),
            '@page': resolve('src/page')
        }),
        // addWebpackResolve({
        //     extensions: ['.js', '.jsx', '.json']
        // }),
        addPublicPath(),
        //addPublicPath1()
    ),
    devServer: overrideDevServer(
        devServerConfig()
    )
};

// vue.config.js

function resolve(dir) {
    return require('path').join(__dirname, dir)
}

module.exports = {
    transpileDependencies: ['@dcloudio/uni-ui'],
    lintOnSave: process.env.NODE_ENV === "development",
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@pages': resolve('src/pages'),
                // 添加其他的路径别名配置
            }
        }
    }

}

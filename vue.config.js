// 該檔案生成的方式可以在 Vue Ui 中的「設定」->「Vue Cli」->「公開路徑」找到。
module.exports = {
  transpileDependencies: ['@vue/reactivity'],
  chainWebpack: (config) => {
    config.plugin('html')
      .tap((args) => {
        const [obj] = args; // 陣列解構
        obj.title = 'ERPSystem';
        return args;
      });
  },
  publicPath: './',
};

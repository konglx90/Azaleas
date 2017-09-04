import Toast from './Toast';

// export default class Toast extends toast {
//
// }

export default {
  /**
   * 每个插件都有的install方法，用于安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    // 创建"子类"方便挂载
    const VueToast = Vue.extend(Toast);
    let toast = null;

    /**
     * 初始化并显示
     * @returns {Promise} Promise实例
     */
    function $toast(msg) {
      return new Promise((resolve) => {
        // 第一次调用
        if (!toast) {
          toast = new VueToast();
          // 手动创建一个未挂载的实例
          toast.$mount();
          // 挂载
          document.querySelector(pluginOptions.container || 'body').appendChild(toast.$el);
        }
        // 显示toast
        toast.show(msg);
        resolve();
      });
    }
    // 定义关闭toast方法
    $toast.hide = function hide() {
      return new Promise((resolve) => {
        if (!toast || !toast.visiable) {
          resolve();
          return;
        }
        toast.hide();
      });
    };
    /* eslint-disable */
    Vue.toast = Vue.prototype.$toast = $toast
  },
};

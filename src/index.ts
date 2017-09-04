import {
  Hello,
  Toast,
} from './components';

const azu = {
  Hello,
  Toast,
};


const install = function (Vue: any, opts: Object = {}) {

  // Object.keys(azu).forEach((key) => {
  //   Vue.component(key, azu[key]);
  // });

  // Vue.prototype.$azu = ;
};

// auto install
if (typeof (<any>window) !== 'undefined' && (<any>window).Vue) {
  install((<any>window).Vue);
}

export {
  install
}

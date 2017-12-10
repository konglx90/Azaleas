import Vue from "vue";

declare module "*.vue" {
  export default Vue;
}

declare module 'vue/types/vue' {
  // 声明为 Vue 补充的东西
  interface Vue {
    dispatch: Function,
    broadcast: Function,
    children: any[any],
  }
}

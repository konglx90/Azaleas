<template>
   <transition name="fadeout">
      <div v-show="visible">
          <div slot="icon" class="azu-loading">
              <pre>loading</pre>
          </div>
          <div class="azu-loading-backdrop"></div>
      </div>
   </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Loading extends Vue {
  // inital data
  visible: boolean = true
  duration: number = 20000 // 超时20秒消失
  Timer: any = null
  // method
  show() {
    this.visible = true;
    if (this.duration > 0) {
      this.Timer = setTimeout(
        () => {
          this.visible = false;
        },
        this.duration,
      );
    }
  }
  hide() {
    this.visible = false;
    if (this.Timer) {
      clearTimeout(this.Timer);
    }
  }
}
</script>

<style>
    .fadeout-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }
</style>

<style lang="less">
@import '../../styles/components/loading.less';
</style>

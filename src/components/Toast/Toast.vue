<template>
   <transition name="fadeout">
      <div v-show="visible">
          <div slot="icon" class="azu-toast">
              <pre>{{msg}}</pre>
          </div>
          <div class="azu-toast-backdrop"></div>
      </div>
   </transition>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    msg: {
        type: String,
        default: 'toast'
    },
    duration: {
        type: Number,
        default: 2000
    }
  }
})
export default class Toast extends Vue {
  msg: string
  duration: number
  // inital data
  visible: boolean = true
  // method
  show (msg: string) {
    this.msg = msg;
    this.visible = true
    if (this.duration > 0) {
      setTimeout(
        () => {
          this.visible = false
        },
        this.duration
      )
    }
  }
  hide () {
    this.visible = false
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
@import '../../styles/components/toast.less';

</style>

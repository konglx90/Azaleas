<template>
    <section :class="prefixCls">
        <section :class="['azu-select-selection', {[prefixCls + '-show']: visible}]">
            <span>{{ showLabel }}</span>
            <!-- <span @click="toggleMenu">选择</span> -->
            <i class="ki24 icon24-arrow-down azu-select-arrow" @click="toggleMenu">选择</i>
        </section>
        <transition name="fadeout">
            <ul v-show="visible" :class="prefixCls + '-options'">
                <slot></slot>
            </ul>
        </transition>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const prefixCls = 'azu-select';

@Component({
  name: 'azu-select',
  props: {
    label: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
})
export default class Select extends Vue {
  label: string | number;
  value: string | number;
  // data
  visible: boolean = false;
  prefixCls: string = prefixCls;
  // method
  toggleMenu() {
    this.visible = !this.visible;
  }
  // computed
  get showLabel(): string | number {
    return this.label ? this.label : this.value;
  }
  mounted() {
    this.$on('on-select-selected', (value: string | number) => {
      this.$emit('onChange', value)
    });
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/components/select.less';
</style>

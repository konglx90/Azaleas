<template>
    <li class="azu-option" @mouseout.stop="blur" @click.stop="select">{{ showLabel }}</li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Emitter from '../../mixins/emitter';

@Component({
  name: 'azu-option',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
})
export default class Option extends Vue {
  label: string | number;
  value: string | number;
  // data
  isFocus: boolean = false;
  // method
  select() {
    this.dispatch('azu-select', 'on-select-selected', this.value);
  }
  blur() {
    this.isFocus = false;
  }
  // computed
  get showLabel(): string | number {
    return this.label ? this.label : this.value;
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/components/option.less';
li {
  color: #b7b7b7;
  border-bottom: 1px solid #e5e5e5;
}
</style>

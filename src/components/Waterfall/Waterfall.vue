<template>
    <div :class="prefixCls">
      <div class="waterfall-wrap" ref="waterfall">
        <slot name="waterfall"></slot>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const prefixCls = 'azu-waterfall';

const shouldUpdate = (heights: Array<number>) => (
  heights.length > 0 &&
            Math.min.apply(null, heights) !== 0 &&
            !isNaN(Math.min.apply(null, heights))
);

const setAbsolute = (dom: any) => {
  const d = dom;
  d.style.float = 'none';
  d.style.position = 'absolute';
};

@Component({
  props: {
    dataItems: {
      type: Array,
      required: true,
    },
  },
})
export default class Waterfall extends Vue {
  dataItems: Array<any>;
  // inital data
  prefixCls: string = prefixCls;
  contents: any = [];  // HTML type HTMLCollection
  lastIndex: number = -1; // start from -1
  leftTops: number = 0;
  rightTops: number = 0;
  // method
  hide(): void {
    console.log(this);
  }

  updateHeight(): void {
    const waterfall: any = this.$refs.waterfall;
    waterfall.style.height = `${Math.max(this.leftTops, this.rightTops) + 200}px`;
  }

  updateTops(heights: Array<number>,
    width: number, startIndex: number = 0, lastIndex: number = -1) {
    const waterfall: any = this.$refs.waterfall;
    waterfall.style.position = 'relative';

    this.$emit('waterfall-done');

    heights.forEach((height: number, index: number) => {
      const dom = this.contents[lastIndex + index + startIndex + 1];
      if (this.leftTops <= this.rightTops) {
        dom.style.top = `${this.leftTops}px`;
        dom.style.left = '0px';
        this.leftTops += height;
      } else {
        dom.style.top = `${this.rightTops}px`;
        dom.style.left = width > 50 ? `${width + 20}px` : '360px';
        this.rightTops += height;
      }
    });
    waterfall.style.height = `${Math.max(this.leftTops, this.rightTops)}px`;
  }

  setNoVisiableLeft(lastIndex: number): void {
    // start we can see nothing
    this.contents.forEach((item: any, index: number) => {
      if (index <= lastIndex) return;
      const i = item;
      i.style.left = '1000px';
      i.style.position = 'absolute';
    });
  }

  waterfall(lastIndex: number): void {
    // This main function for waterfall
    const dataItems = this.dataItems;

    // check value
    if (dataItems.length <= 0) {
      return;
    }

    // init a height array
    const elementHeights = dataItems.map(() => 0);
    let width = 0;

    this.updateHeight();

    this.setNoVisiableLeft(lastIndex);

    this.contents.forEach((item: any, index: number) => {
      if (index <= this.lastIndex) return;

      const eIndex = index % 20;  // e: element

      const data = dataItems[index];
      const hasImage = !!data.image;
      if (hasImage) {
        const img = new Image();
        const src = data.image;
        img.onerror = () => {
          elementHeights[eIndex] = item.offsetHeight + 20;
        };
        img.onload = () => {
          // REVIEW maybe a bug here
          elementHeights[eIndex] = item.offsetHeight + 20;
          if (!width) {
            width = item.offsetWidth;
          }
          setAbsolute(item);
          if (shouldUpdate(elementHeights)) {
            this.updateTops(elementHeights, width, 0, lastIndex);
          }
        };
        img.src = src;
      } else {
        elementHeights[eIndex] = item.offsetHeight + 20;
        if (!width) {
          width = item.offsetWidth;
        }
        setAbsolute(item);
      }
      if (shouldUpdate(elementHeights)) {
        this.updateTops(elementHeights, width, 0, lastIndex);
      }
      this.lastIndex = index; // store the last index
    });
  }

  mounted() {
    const waterfall: any = this.$refs.waterfall; // REVIEW
    this.contents = Array.prototype.slice.call(waterfall.children[0].children, 0);
    this.waterfall(this.lastIndex);
  }
}
</script>

<style lang="less">
@import '../../styles/components/waterfall.less';
</style>

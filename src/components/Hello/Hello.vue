<template>
  <div class="azu-hello">
    <h1>{{ msg }}</h1>
    <!-- My demo -->
    <ASelect v-model="value" style="width:200px;">
        <AOption value="孔令星" />
        <AOption value="孔令星2" />
    </ASelect>
    <div>dasdasdas</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AOption from '../Select/Option';
import ASelect from '../Select/Select';

class AzuVue extends Vue {
  // $toast: any;
  $loading: any;
}
// interface AZU {
//   $azu: string
// }
@Component({
  components: {
    AOption,
    ASelect,
  },
})
export default class Hello extends AzuVue {
  msg: string = 'this is a typescript project now'
  value: string = '孔令星'
  label: string = '孔令星'
  handleClick() {
    // console.log(this.$toast('大家好', 900));
    this.$loading();
    setTimeout(() => {
      this.$loading.hide();
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../styles/components/hello.less';
</style>

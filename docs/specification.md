### JS(TS)(airbnb)

#### vue-class-component 书写顺序

```
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
```

@Component
1. props
2. components

extends
1. data
2. lifecycle hook
3. computed
4. method

### CSS

#### 全局前缀名, 参考iview[iview](https://github.com/iview/iview/blob/2.0/src/styles/custom.less)的方式

```css
// Prefix
@css-prefix             : azu-;
@css-prefix-iconfont    : azu-icon;
```

### 文档国际化

加入英文文档

### plugin 使用规则

Vue.use 之后包在 $azu namespace 下，如：this.$azu.toast('大家好');

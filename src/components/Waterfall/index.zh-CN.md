---
category: Components
title: Waterfall
---

移动端的两列瀑布流
由于实现原理，无法支持单页请求图片资源过多的情况(会出现一段时间的空白)

## API

| 参数        | 说明                                     | 类型        | 默认值 |
|----------- |----------------------------------------- | ----------  | ------- |
| {{{{aimRef}}}}     | 在父组件中使用$ref获取的元素列表              | Array     | []  |

## Slot

TODO

## Usage

```
<template>
  <Waterfall>
    <li></li>
    <li></li>
  </Waterfall>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
```

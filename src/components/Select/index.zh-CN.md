---
category: Components
title: Select
---

下拉选择

## API

| 参数        | 说明                                     | 类型        | 默认值 |
|----------- |----------------------------------------- | ----------  | ------- |
| value       | 实际值                          | [String|Number]    | `''`  |
| label  |  显示的值                       | [String|Number]       | `''` |
| @onChange | value 改变                    | Function |       |  |

## Usage

```
import AOption from '../Select/Option';
import ASelect from '../Select/Select';

<ASelect v-model="value" style="width:200px;" @onChange="handleChange">
    <AOption value="孔令星" />
    <AOption value="孔令星2" />
</ASelect>
```

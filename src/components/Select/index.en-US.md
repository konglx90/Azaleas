---
category: Components
title: Select
---

Select by drop down

## API

| Property   | Description                         | Type         | Default |
|----------- |------------------------------------ | -----------  | ------- |
| value      | real value                          | String Number | `''`  |
| label      |  show in browser                    | String Number | `''` |
| @onChange  | when value is change to use         | Function |    |

## Usage

```
import AOption from '../Select/Option';
import ASelect from '../Select/Select';

<ASelect v-model="value" style="width:200px;" @onChange="handleChange">
    <AOption value="孔令星" />
    <AOption value="孔令星2" />
</ASelect>
```

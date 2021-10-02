# 输入框 Input

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const passwordValue = ref<string>('')
    const sizeValue = ref<string>('')
    return {
      passwordValue,
      sizeValue
    }
  },
})
</script>

<DRow :gutter="24">
<DCol :span="12">

<CodeBox>
## 基本使用

基本使用。

<template v-slot:demo>
  <DInput placeholder="Basic Usage" />
</template>
<template v-slot:code>

```vue
<template>
  <DInput placeholder="Basic Usage" />
</template>
```

</template>
</CodeBox>

<CodeBox>
## 前缀和后缀

在输入框上添加前缀或后缀图标。

<template v-slot:demo>
  <div class="py-4 space-y-2">
    <DInput prefix="￥" suffix="RMB" />
    <DInput>
      <template #prefix>
        <span>￥</span>
      </template>
      <template #suffix>
        <span>RMB</span>
      </template>
    </DInput>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="py-4 space-y-2">
    <DInput prefix="￥" suffix="RMB" />
    <DInput>
      <template #prefix>
        <span>￥</span>
      </template>
      <template #suffix>
        <span>RMB</span>
      </template>
    </DInput>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 前置/后置标签

用于配置一些固定组合。

<template v-slot:demo>
  <div class="py-4 space-y-2">
    <DInput type="text" addonBefore="https://" addonAfter=".com" />
    <DInput type="text">
      <template #addonBefore>
        <span>https://</span>
      </template>
      <template #addonAfter>
        <span>.com</span>
      </template>
    </DInput>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="py-4 space-y-2">
    <DInput type="text" addonBefore="https://" addonAfter=".com" />
    <DInput type="text">
      <template #addonBefore>
        <span>https://</span>
      </template>
      <template #addonAfter>
        <span>.com</span>
      </template>
    </DInput>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 密码框

密码框。

<template v-slot:demo>
  <DInput v-model:value="passwordValue" type="password" placeholder="input password" />
</template>

<template v-slot:code>

```vue
<template>
  <DInput v-model:value="value" type="password" placeholder="input password" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref<string>('')
    return {
      value,
    }
  },
})
</script>
```

</template>
</CodeBox>

</DCol>
<DCol :span="12">
## 三种大小

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小）

<CodeBox>

<template v-slot:demo>
  <div class="py-4 space-y-2">
    <DInput v-model:value="sizeValue" size="large" placeholder="large size" />
    <DInput v-model:value="sizeValue" placeholder="default size" />
    <DInput v-model:value="sizeValue" size="small" placeholder="small size" />
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="py-4 space-y-2">
    <DInput v-model:value="value" size="large" placeholder="large size" />
    <DInput v-model:value="value" placeholder="default size" />
    <DInput v-model:value="value" size="small" placeholder="small size" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref<string>('')
    return {
      value,
    }
  },
})
</script>
```

</template>
</CodeBox>

</DCol>
</DRow>

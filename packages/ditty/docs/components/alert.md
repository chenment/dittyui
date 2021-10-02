# 警告提示 Alert

<DRow :gutter="24">
<DCol :span="12">

<CodeBox>
## 基本

最简单的用法，适用于简短的警告提示。

<template v-slot:demo>
  <div class="p-4 space-y-4">
    <DAlert message="Success Text" type="success" />
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <a-alert message="Success Text" type="success" />
</template>
```

</template>
</CodeBox>

<CodeBox>
## 四种样式

共有四种样式 `success`、`info`、`warning`、`error`

<template v-slot:demo>
  <div class="p-4 space-y-4">
    <DAlert message="Success Text" type="success" />
    <DAlert message="Info Text" type="info" />
    <DAlert message="Warning Text" type="warning" />
    <DAlert message="Error Text" type="error" />
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <a-alert message="Success Text" type="success" />
    <a-alert message="Info Text" type="info" />
    <a-alert message="Warning Text" type="warning" />
    <a-alert message="Error Text" type="error" />
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>

## 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

<template v-slot:demo>
  <DAlert type="error" closable>
    <template #message>Error Text</template>
    <template #description>Error Description Error Description Error Description Error Description Error Description Error Description</template>
  </DAlert>
</template>
<template v-slot:code>

```vue
<template>
  <DAlert type="error" closable>
    <template #message>Error Text</template>
    <template #description
      >Error Description Error Description Error Description Error Description
      Error Description Error Description</template
    >
  </DAlert>
</template>
```

</template>
</CodeBox>

</DCol>

<DCol :span="12">
<CodeBox>
## 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

<template v-slot:demo>
  <div class="p-4 space-y-4">
    <DAlert
      type="success"
      message="Hello World"
      description="hello world description"
      closable
    />
    <DAlert
      type="info"
      message="Hello World"
      description="hello world description"
      closable
    />
    <DAlert
      type="warning"
      message="Hello World"
      description="hello world description"
      closable
    />
    <DAlert
      type="error"
      message="Hello World"
      description="hello world description"
      closable
    />
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <DAlert
      type="success"
      message="Hello World"
      description="hello world description"
      closable
    />
    <DAlert
      type="info"
      message="Hello World"
      description="hello world description"
      closable
    />
    <DAlert
      type="warning"
      message="Hello World"
      description="hello world description"
      closable
    />
    <DAlert
      type="error"
      message="Hello World"
      description="hello world description"
      closable
    />
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 顶部公告

页面顶部通告形式，默认有图标且 type 为 'warning'。

<template v-slot:demo>
  <DAlert message="hello world" banner />
</template>
<template v-slot:code>

```vue
<template>
  <DAlert message="hello world" banner />
</template>
```

</template>
</CodeBox>

</DCol>
</DRow>

# 按钮 Button

按钮嘛，你懂的。

<DRow>

</DRow>

<CodeBox>
## 按钮颜色

按钮的 `color` 分别为 `default`、`primary`、`info`、`success`、`warning` 和 `error`。

<template v-slot:demo>
  <div class="space-x-2 p-y-2">
    <DButton color="primary">Primary</DButton>
    <DButton color="secondary">Secondary</DButton>
    <DButton color="success">Success</DButton>
    <DButton color="info">Info</DButton>
    <DButton color="warning">Warning</DButton>
    <DButton color="danger">Danger</DButton>
    <DButton color="dark">Dark</DButton>
    <DButton color="light">Light</DButton>
  </div>
</template>

<template v-slot:code>

```vue
<template>
  <DButton color="primary">Primary</DButton>
  <DButton color="secondary">Secondary</DButton>
  <DButton color="success">Success</DButton>
  <DButton color="info">Info</DButton>
  <DButton color="warning">Warning</DButton>
  <DButton color="danger">Danger</DButton>
  <DButton color="dark">Dark</DButton>
  <DButton color="light">Light</DButton>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 透明背景

`outlined` 按钮有透明的背景。

<template v-slot:demo>
  <div class="space-x-2 p-2">
    <DButton color="primary" outlined>Primary</DButton>
    <DButton color="secondary" outlined>Secondary</DButton>
    <DButton color="success" outlined>Success</DButton>
    <DButton color="info" outlined>Info</DButton>
    <DButton color="warning" outlined>Warning</DButton>
    <DButton color="danger" outlined>Danger</DButton>
    <DButton color="dark" outlined>Dark</DButton>
    <DButton color="light" outlined>Light</DButton>
  </div>
  <div class="space-x-2 bg-gray-800 p-2">
    <DButton color="primary" outlined>Primary</DButton>
    <DButton color="secondary" outlined>Secondary</DButton>
    <DButton color="success" outlined>Success</DButton>
    <DButton color="info" outlined>Info</DButton>
    <DButton color="warning" outlined>Warning</DButton>
    <DButton color="danger" outlined>Danger</DButton>
    <DButton color="dark" outlined>Dark</DButton>
    <DButton color="light" outlined>Light</DButton>
  </div>
</template>

<template v-slot:code>

```vue
<template>
  <DButton color="primary" outlined>Primary</DButton>
  <DButton color="secondary" outlined>Secondary</DButton>
  <DButton color="success" outlined>Success</DButton>
  <DButton color="info" outlined>Info</DButton>
  <DButton color="warning" outlined>Warning</DButton>
  <DButton color="danger" outlined>Danger</DButton>
  <DButton color="dark" outlined>Dark</DButton>
  <DButton color="light" outlined>Light</DButton>
</template>
```

</template>

</CodeBox>

<CodeBox>

## 文本按钮

`text` 按钮

<template v-slot:demo>
  <div class="space-x-2 p-2">
    <DButton color="primary" text>Primary</DButton>
    <DButton color="secondary" text>Secondary</DButton>
    <DButton color="success" text>Success</DButton>
    <DButton color="info" text>Info</DButton>
    <DButton color="warning" text>Warning</DButton>
    <DButton color="danger" text>Danger</DButton>
    <DButton color="dark" text>Dark</DButton>
    <DButton color="light" text>Light</DButton>
  </div>
</template>

<template v-slot:code>

```vue
<template>
  <DButton color="primary" text>Primary</DButton>
  <DButton color="secondary" text>Secondary</DButton>
  <DButton color="success" text>Success</DButton>
  <DButton color="info" text>Info</DButton>
  <DButton color="warning" text>Warning</DButton>
  <DButton color="danger" text>Danger</DButton>
  <DButton color="dark" text>Dark</DButton>
  <DButton color="light" text>Light</DButton>
</template>
```

</template>
</CodeBox>

<CodeBox>

## block 按钮

<template v-slot:demo>
  <div class="space-y-2 p-2 grid">
    <DButton>Primary</DButton>
    <DButton outlined>Outlined</DButton>
  </div>
</template>

<template v-slot:code>

```vue
<template>
  <div class="grid">
    <DButton>Primary</DButton>
    <DButton outlined>Outlined</DButton>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 按钮尺寸

<template v-slot:demo>
  <div class="p-2 space-x-2">
    <DButton size="large">Large</DButton>
    <DButton>Default</DButton>
    <DButton size="small">Small</DButton>
    <DButton size="small" outlined>Small</DButton>
    <DButton outlined>Default</DButton>
    <DButton size="large" outlined>Large</DButton>
  </div>
</template>

<template v-slot:code>

```vue
<template>
  <DButton size="large">Large</DButton>
  <DButton>Default</DButton>
  <DButton size="small">Small</DButton>
  <DButton size="small" outlined>Small</DButton>
  <DButton outlined>Default</DButton>
  <DButton size="large" outlined>Large</DButton>
</template>
```

</template>
</CodeBox>

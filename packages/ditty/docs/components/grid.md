# 栅格 Grid

基于 flex 布局，响应式。

<style>
.col-block {
  background: rgb(0, 146, 255);
  padding: 8px 0px;
}

[class^='grid-demo-'] .dt-col {
  color: #fff;
  text-align: center;
}

[class^='grid-demo-'] .dt-col:not(.gutter-row) {
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 0;
}

[class^='grid-demo-'] .dt-col:not(.gutter-row) {
  padding: 16px 0;
  background: #0092ff;
}

[class^='grid-demo-'] .dt-col:not(.gutter-row):nth-child(2n + 1) {
  background: rgba(0, 146, 255, 0.75);
}

.grid-demo-gutter .dt-col {
  margin-top: 0;
  margin-bottom: 0;
}

.grid-demo-flex .dt-row,
.grid-demo-flex-align .dt-row {
  background: rgba(128, 128, 128, 0.08);
}
</style>

<CodeBox>

## 基础栅格

<template v-slot:demo>
<div class="grid-demo-base">
    <DRow>
      <DCol :span="24">col</DCol>
    </DRow>
    <DRow>
      <DCol :span="12">col-12</DCol>
      <DCol :span="12">col-12</DCol>
    </DRow>
    <DRow>
      <DCol :span="8">col-8</DCol>
      <DCol :span="8">col-8</DCol>
      <DCol :span="8">col-8</DCol>
    </DRow>
    <DRow>
      <DCol :span="6">col-6</DCol>
      <DCol :span="6">col-6</DCol>
      <DCol :span="6">col-6</DCol>
      <DCol :span="6">col-6</DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <DRow>
      <DCol :span="24">col</DCol>
    </DRow>
    <DRow>
      <DCol :span="12">col-12</DCol>
      <DCol :span="12">col-12</DCol>
    </DRow>
    <DRow>
      <DCol :span="8">col-8</DCol>
      <DCol :span="8">col-8</DCol>
      <DCol :span="8">col-8</DCol>
    </DRow>
    <DRow>
      <DCol :span="6">col-6</DCol>
      <DCol :span="6">col-6</DCol>
      <DCol :span="6">col-6</DCol>
      <DCol :span="6">col-6</DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(n 是自然数)。

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`。

<template v-slot:demo>
  <div class="grid-demo-gutter">
    <p class="font-medium my-4">Horizontal</p>
    <DRow :gutter="16">
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
    </DRow>
    <p class="font-medium my-4">Responsive</p>
    <DRow :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
    </DRow>
    <p class="font-medium my-4">Vertial</p>
    <DRow :gutter="[16, 24]">
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
      <DCol :span="6" class="gutter-row"><div class="col-block">col-6</div></DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="grid-demo-gutter">
    <p class="font-medium my-4">Horizontal</p>
    <DRow :gutter="16">
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
    </DRow>
    <p class="font-medium my-4">Responsive</p>
    <DRow :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
    </DRow>
    <p class="font-medium my-4">Vertial</p>
    <DRow :gutter="[16, 24]">
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
      <DCol :span="6" class="gutter-row">
        <div class="col-block">col-6</div>
      </DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 左右偏移

列偏移。

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

<template v-slot:demo>
  <div class="grid-demo-offset">
    <DRow>
      <DCol :span="8">col-8</DCol>
      <DCol :span="8" :offset="8">col-8 offset-8</DCol>
    </DRow>
    <DRow>
      <DCol :span="6" :offset="6">col-6 offset-6</DCol>
      <DCol :span="6" :offset="6">col-6 offset-6</DCol>
    </DRow>
    <DRow>
      <DCol :span="12" :offset="6">col-12 offset-6</DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="grid-demo-offset">
    <DRow>
      <DCol :span="8">col-8</DCol>
      <DCol :span="8" :offset="8">col-8 offset-8</DCol>
    </DRow>
    <DRow>
      <DCol :span="6" :offset="6">col-6 offset-6</DCol>
      <DCol :span="6" :offset="6">col-6 offset-6</DCol>
    </DRow>
    <DRow>
      <DCol :span="12" :offset="6">col-12 offset-6</DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 栅格排序

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

<template v-slot:demo>
  <div class="grid-demo-sort">
    <DRow>
      <DCol :span="6" :push="18">col-6 push-18</DCol>
      <DCol :span="18" :pull="6">col-18 pull-6</DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <DRow>
      <DCol :span="6" :push="18">col-6 push-18</DCol>
      <DCol :span="18" :pull="6">col-18 pull-6</DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 排版

布局基础。

子元素根据不同的值 `start`,`center`,`end`,`between`,`around`,`evenly`，分别定义其在父节点里面的排版方式。

<template v-slot:demo>
  <div class="grid-demo-flex">
    <p class="font-medium my-4">justify-content: start</p>
    <DRow justify="start">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: center</p>
    <DRow justify="center">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: end</p>
    <DRow justify="end">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: space-between</p>
    <DRow justify="between">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: space-around</p>
    <DRow justify="around">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: space-evenly</p>
    <DRow justify="evenly">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="grid-demo-flex">
    <p class="font-medium my-4">justify-content: start</p>
    <DRow justify="start">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: center</p>
    <DRow justify="center">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: end</p>
    <DRow justify="end">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: space-between</p>
    <DRow justify="between">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: space-around</p>
    <DRow justify="around">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
    <p class="font-medium my-4">justify-content: space-evenly</p>
    <DRow justify="evenly">
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
      <DCol :span="4">col-4</DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 对齐

子元素垂直对齐。

<template v-slot:demo>
  <div class="grid-demo-flex-align">
    <p class="font-medium my-4">align-items: start</p>
    <DRow align="top">
      <DCol :span="4">
        <DemoBox :value="80">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="100">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="50">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="120">col-4</DemoBox>
      </DCol>
    </DRow>
    <p class="font-medium my-4">align-items: center</p>
    <DRow align="middle">
      <DCol :span="4">
        <DemoBox :value="80">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="100">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="50">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="120">col-4</DemoBox>
      </DCol>
    </DRow>
    <p class="font-medium my-4">align-items: end</p>
    <DRow align="bottom">
      <DCol :span="4">
        <DemoBox :value="80">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="100">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="50">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="120">col-4</DemoBox>
      </DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="grid-demo-flex-align">
    <p class="font-medium my-4">align-items: start</p>
    <DRow align="top">
      <DCol :span="4">
        <DemoBox :value="80">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="100">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="50">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="120">col-4</DemoBox>
      </DCol>
    </DRow>
    <p class="font-medium my-4">align-items: center</p>
    <DRow align="middle">
      <DCol :span="4">
        <DemoBox :value="80">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="100">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="50">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="120">col-4</DemoBox>
      </DCol>
    </DRow>
    <p class="font-medium my-4">align-items: end</p>
    <DRow align="bottom">
      <DCol :span="4">
        <DemoBox :value="80">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="100">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="50">col-4</DemoBox>
      </DCol>
      <DCol :span="4">
        <DemoBox :value="120">col-4</DemoBox>
      </DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 排序

通过 `order` 来改变元素的排序。

<template v-slot:demo>
  <div class="grid-demo-flex-order">
    <p class="font-medium my-4">Normal</p>
    <DRow>
      <DCol :order="4" :span="6">1 order-4</DCol>
      <DCol :order="3" :span="6">2 order-3</DCol>
      <DCol :order="2" :span="6">3 order-2</DCol>
      <DCol :order="1" :span="6">4 order-1</DCol>
    </DRow>
    <p class="font-medium my-4">Responsive</p>
    <DRow>
      <DCol
        :span="6"
        :xs="{ order: 1 }"
        :sm="{ order: 2 }"
        :md="{ order: 3 }"
        :lg="{ order: 4 }"
      >
        1 col-order-responsive
      </DCol>
      <DCol
        :span="6"
        :xs="{ order: 2 }"
        :sm="{ order: 1 }"
        :md="{ order: 4 }"
        :lg="{ order: 3 }"
      >
        2 col-order-responsive
      </DCol>
      <DCol
        :span="6"
        :xs="{ order: 3 }"
        :sm="{ order: 4 }"
        :md="{ order: 2 }"
        :lg="{ order: 1 }"
      >
        3 col-order-responsive
      </DCol>
      <DCol
        :span="6"
        :xs="{ order: 4 }"
        :sm="{ order: 3 }"
        :md="{ order: 1 }"
        :lg="{ order: 2 }"
      >
        4 col-order-responsive
      </DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <DRow>
      <DCol :order="4" :span="6">1 order-4</DCol>
      <DCol :order="3" :span="6">2 order-3</DCol>
      <DCol :order="2" :span="6">3 order-2</DCol>
      <DCol :order="1" :span="6">4 order-1</DCol>
    </DRow>
    <DRow>
      <DCol
        :span="6"
        :xs="{ order: 1 }"
        :sm="{ order: 2 }"
        :md="{ order: 3 }"
        :lg="{ order: 4 }"
      >
        1 col-order-responsive
      </DCol>
      <DCol
        :span="6"
        :xs="{ order: 2 }"
        :sm="{ order: 1 }"
        :md="{ order: 4 }"
        :lg="{ order: 3 }"
      >
        2 col-order-responsive
      </DCol>
      <DCol
        :span="6"
        :xs="{ order: 3 }"
        :sm="{ order: 4 }"
        :md="{ order: 2 }"
        :lg="{ order: 1 }"
      >
        3 col-order-responsive
      </DCol>
      <DCol
        :span="6"
        :xs="{ order: 4 }"
        :sm="{ order: 3 }"
        :md="{ order: 1 }"
        :lg="{ order: 2 }"
      >
        4 col-order-responsive
      </DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## Flex 填充

Col 提供 `flex` 属性以支持填充。

<template v-slot:demo>
  <div class="grid-demo-flex-stretch">
    <p class="font-medium my-4">Percentage columns</p>
    <DRow>
      <DCol :flex="2">2 / 5</DCol>
      <DCol :flex="3">3 / 5</DCol>
    </DRow>
    <p class="font-medium my-4">Fill rest</p>
    <DRow>
      <DCol flex="100px">100px</DCol>
      <DCol flex="auto">Fill Rest</DCol>
    </DRow>
    <p class="font-medium my-4">Raw flex style</p>
    <DRow>
      <DCol flex="1 1 200px">1 1 200px</DCol>
      <DCol flex="0 1 300px">0 1 300px</DCol>
    </DRow>
    <DRow :wrap="false">
      <DCol flex="none">
        <div style="padding: 0 16px">none</div>
      </DCol>
      <DCol flex="auto">auto</DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <DRow>
      <DCol :flex="2">2 / 5</DCol>
      <DCol :flex="3">3 / 5</DCol>
    </DRow>
    <DRow>
      <DCol flex="100px">100px</DCol>
      <DCol flex="auto">Fill Rest</DCol>
    </DRow>
    <DRow>
      <DCol flex="1 1 200px">1 1 200px</DCol>
      <DCol flex="0 1 300px">0 1 300px</DCol>
    </DRow>
    <DRow :wrap="false">
      <DCol flex="none">
        <div style="padding: 0 16px">none</div>
      </DCol>
      <DCol flex="auto">auto</DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 响应式布局

预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。

其中 `:xs="6"` 相当于 `:xs={ span: 6 }`。

<template v-slot:demo>
  <div class="grid-demo-responsive">
    <DRow>
      <DCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</DCol>
      <DCol :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</DCol>
      <DCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</DCol>
    </DRow>
    <DRow>
      <DCol :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</DCol>
      <DCol :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"
        >Col</DCol
      >
      <DCol :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div>
    <DRow>
      <DCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</DCol>
      <DCol :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</DCol>
      <DCol :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</DCol>
    </DRow>
    <DRow>
      <DCol :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</DCol>
      <DCol :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"
        >Col</DCol
      >
      <DCol :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</DCol>
    </DRow>
  </div>
</template>
```

</template>
</CodeBox>

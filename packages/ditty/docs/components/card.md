# 卡片 Card

<CodeBox>
## 基础卡片

包含标题、内容、操作区域。

<template v-slot:demo>
  <DCard title="Card Title" style="width: 300px">
    <template #extra>
      <a href="#">More</a>
    </template>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </DCard>
</template>
<template v-slot:code>

```vue
<template>
  <DCard title="Card Title" style="width: 300px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </DCard>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 无边框

在灰色背景上使用无边框的卡片。

<template v-slot:demo>
  <div class="bg-gray-300 p-8">
    <DCard title="Card Title" :border="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </DCard>
  </div>
</template>
<template v-slot:code>

```vue
<template>
  <div class="bg-gray-300 p-8">
    <DCard title="Card Title" :border="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </DCard>
  </div>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 简洁卡片

只包含内容区域。

<template v-slot:demo>
  <DCard style="width: 300px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </DCard>
</template>
<template v-slot:code>

```vue
<template>
  <DCard style="width: 300px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </DCard>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 卡片封面

`cover` 插槽内可以指定封面。

<template v-slot:demo>
  <DCard hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </template>
    Card content
  </DCard>
</template>
<template v-slot:code>

```vue
<template>
  <DCard hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </template>
    Card content
  </DCard>
</template>
```

</template>
</CodeBox>

<CodeBox>
## 栅格卡片

在系统概览页面常常和栅格进行配合。

<template v-slot:demo>
  <div class="bg-gray-300 p-8">
    <DRow :gutter="16">
      <DCol :span="8">
        <DCard title="Card Title" :border="false">
          Card content
        </DCard>
      </DCol>
      <DCol :span="8">
        <DCard title="Card Title" :border="false">
          Card content
        </DCard>
      </DCol>
      <DCol :span="8">
        <DCard title="Card Title" :border="false">
          Card content
        </DCard>
      </DCol>
    </DRow>
  </div>
</template>
<template v-slot:code>

```vue

```

</template>
</CodeBox>

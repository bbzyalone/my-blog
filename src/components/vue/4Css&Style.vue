<template>
    <!-- 绑定对象 -->
    <div :class="{ active: isActive }">绑定对象</div>

    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">:class 指令也可以和一般的 class attribute 共存</div>

    <!-- 绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象 -->
    <div :class="classObject">也可以直接绑定一个对象</div>

    <!-- 也可以绑定一个返回对象的计算属性。这是一个常见且很有用的技巧 -->

    <!-- 绑定数组 -->
    <!-- 以给 :class 绑定一个数组来渲染多个 CSS class -->
    <div :class="[activeClass, errorClass]"></div>
    <!-- 数组中有条件地渲染某个 class -->
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    <!-- 有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象 -->
    <div :class="[{ active: isActive }, errorClass]"></div>

    <!-- 在组件上使用 -->
</template>

<script setup>
import { ref,computed } from 'vue'
const isActive = ref(true)
const hasError = ref(false)
//可以在对象中写多个字段来操作多个 class。此外，:class 指令也可以和一般的 class attribute 共存

// const classObject = reactive({
//     active: true,
//     'text-danger': false
// })

const error = ref(null)
const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))


const activeClass = ref('active')
const errorClass = ref('text-danger')

</script>
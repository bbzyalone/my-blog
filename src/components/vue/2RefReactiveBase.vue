<template>
  <div class="content">
    <!-- ref() -->
    <!-- 在模板中使用 ref 时，我们不需要附加 .value ref 会自动解包-->
    <!-- 将 ref 传递给函数，同时保留对最新值和响应式连接的访问 -->
    <button @click="increment">
      {{ count }}
    </button>

    <br>
    <!-- 深层响应性 & 浅层响应式-->
    <!-- Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 Map -->

    <!-- DOM 更新时机 -->
    <!-- DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，
             以确保不管你进行了多少次状态修改，每个组件都只会被更新一次 
             要等待 DOM 更新完成后再执行额外的代码，可以使用 nextTick() 全局 API-->
    <button @click="increment1">
      {{ count }}
    </button>

    <br>
    <!-- reactive() -->
    <!-- 与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性 -->
    <button @click="state.count++">
      {{ state.count }}
    </button>
    <!-- shallowReactive() API 可以选择退出深层响应性 -->

    <!-- reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的 -->

    <!-- 为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，
        而对一个已存在的代理对象调用 reactive() 会返回其本身： -->

    <!-- 数组和集合的注意事项 -->
    <!-- 与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型(如 Map) 中的元素被访问时，它不会被解包： -->

    <!-- 在模板中解包的注意事项 -->
    <!-- 在模板渲染上下文中，只有顶级的 ref 属性才会被解包。 -->
    <!-- 如果 ref 是文本插值的最终计算值 (即 {{ }} 标签)，那么它将被解包 -->

    <div>-----------------------------------------------------------------------------响应式基础end</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { nextTick } from 'vue'
import { reactive } from 'vue'

const count = ref(0)
//console.log(count) // { value: 0 }
//console.log(count.value) // 0
function increment() {
  // 在 JavaScript 中需要 .value
  count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
//const state = shallowRef({ count: 1 })  使用浅层响应式
//shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成
function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

async function increment1() {
  count.value++
  await nextTick()
  // 现在 DOM 已经更新了
  console.log('现在 DOM 已经更新了')
}


const state = reactive({ count: 0 })


</script>
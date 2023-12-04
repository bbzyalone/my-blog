<template>
    <!-- 用计算属性来描述依赖响应式状态的复杂逻辑 -->
    <!-- 计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value -->
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>


    <!-- 计算属性缓存 vs 方法 -->
    <!-- 调用一个函数也会获得和计算属性相同的结果 -->
    <!-- 计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算 -->

    <!-- 可写计算属性 -->
    <!-- 通过同时提供 getter 和 setter 来创建可写的响应式 -->

    <!-- Getter 不应有副作用 -->
    <!-- 不要在 getter 中做异步请求或者更改 DOM -->
    <!-- 一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值 -->

    <!-- 避免直接修改计算属性值 -->
    <!-- 从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，
        就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，
        并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。 -->
    <span>{{ fullName }}</span>


    <div>-----------------------------------------------------------------------------计算属性end</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

//Vue 的计算属性会自动追踪响应式依赖
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'yes' : 'no'
})

const firstName = ref('John')
const lastName = ref('Doe')


//运行 fullName.value = 'John Doe' 时，setter 会被调用而 firstName 和 lastName 会随之更新。
const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
</script>
<style></style>
<template>
    <div>
        <button @click="increment">
            {{ count }}
        </button>
    </div>
    <!-- 在模板中使用 ref 时，我们不需要附加 .value ref 会自动解包-->
</template>

<!-- <script setup>
import { ref } from 'vue'

const count = ref(0)//声明响应式状态

function increment() {
    count.value++
}

//console.log(count) // { value: 0 }
// console.log(count.value) // 0

// count.value++
// console.log(count.value) // 1
</script> -->

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
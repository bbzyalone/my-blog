<template>
    <div class="sidebar-lift">
        <!-- <p>我是标题我是标题</p>
        <p>我是标题我是标题</p>
        <p>我是标题我是标题</p>
        <p>我是标题我是标题</p>
        <p>我是标题我是标题</p>
        <p>我是标题我是标题</p>
        <p>我是标题我是标题</p>
        <p>我是标题我是标题</p> -->
        <div v-for="item in props.headings">
            <a v-if="item.depth == 1" :href="'#' + item.slug">{{ item.text }}</a>
            <a v-else :href="'#' + item.slug">{{ item.text }}</a>
            <a v-else :href="'#' + item.slug">{{ item.text }}</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { MarkdownHeading } from 'astro'

const props = defineProps<{
    headings?: MarkdownHeading[]
}>()

props.headings?.map((s) => {
    console.log("打印", s)
})


//console.log("vue-log",)
//console.log(props)




</script>
<style scoped>
.sidebar-lift{
    position: fixed;
    width: 300px;
    background-color: aqua;
}
</style>
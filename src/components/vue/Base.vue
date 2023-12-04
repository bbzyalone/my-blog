<!-- 模板语法 -->
<template>
    <div class="content">
        <!-- 文本插值 -->
        <span>Message: {{ msg }}</span>

        <!-- 原始 HTML   -->
        <!-- 双大括号会将数据解释为纯文本，而不是 HTML 若想插入 HTML，你需要使用 v-html 指令 -->
        <p>Using text interpolation: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>

        <!-- Attribute绑定 基本 -->
        <!-- 响应式绑定元素的id值 如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除-->
        <div v-bind:id="dynamicId"></div>
        <!-- 简写 -->
        <div :id="dynamicId2"></div>

        <!-- Attribute绑定 布尔型-->
        <!-- 依据 true / false 值来决定 attribute 是否应该存在于该元素上 -->
        <button :disabled="isButtonDisabled">我是一个按钮 但是不能点 哈哈哈</button>

        <!-- Attribute绑定 动态绑定多个值 -->
        <div v-bind="objectOfAttrs"></div>

        <!-- Attribute绑定 使用 JavaScript 表达式 -->
        <!-- 所有的数据绑定中都支持完整的 JavaScript 表达式 -->
        <!-- 
            {{ number + 1 }}
            {{ ok ? 'YES' : 'NO' }}
            {{ message.split('').reverse().join('') }}
            <div :id="`list-${id}`"></div> 
            在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：
                1.在文本插值中 (双大括号)
                2.在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中
        -->
        <div v-bind:id=1 + 1></div>

        <!-- 调用函数 -->
        <!-- 可以在绑定的表达式中使用一个组件暴露的方法 -->
        <time :title="toTitleDate(date)" :datetime="date">
            {{ formatDate(date) }}
        </time>

        <!-- 受限的全局访问 -->
        <!-- 模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 Math 和 Date。 -->
        <!-- 没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 window 上的属性 -->
        <!-- 可以自行在 app.config.globalProperties 上显式地添加它们，供所有的 Vue 表达式使用 -->

        <!-- 内置指令文档 https://cn.vuejs.org/api/built-in-directives.html -->

        <!-- 指令的动态参数 -->
        <a v-bind:[attributeName]="url"> 跳转1 </a>
        <!-- 简写 -->
        <a :[attributeName]="url"> 跳转2 </a>

        <div/>
        <!-- 指令的动态参数 将一个函数绑定到动态的事件名称上   //TODO 无效-->
        <a v-on:[eventName]="doSomething">跳转3</a>
        <!-- 简写 -->
        <a @[eventName]="doSomething">跳转4</a>
        <div>----------------------------------------------------------------------------------------模板语法结束</div>
    </div>
</template>

<!-- 通过使用单文件组件 (SFC) 简化 状态和方法的暴露 -->
<script setup>
const msg = 'Hello world!'
const rawHtml = '<span> 哈哈哈 </span>'
const dynamicId = 1
const dynamicId2 = 2
const isButtonDisabled = ''
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
}
const date = '2023-12.05'
function toTitleDate(date) {
    console.log('我是一个方法1', date)
}
const formatDate = (date) => {
    console.log('我也是一个方法2', date)
}
const attributeName = 'href'
const url = 'https://bbzywkq.com'

function eventName(){
    console.log('我也是一个方法3')
}
function doSomething(){
    console.log('我也是一个方法4')
}
</script>

<style></style>
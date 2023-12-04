
## 导入报红问题 
```
import xxx from 'astro:content'; //导入报红问题 
同步生成模块
npm/pnpm/yarn run astro sync
issues: https://github.com/withastro/astro/issues/5711
需要运行构建或使用新的 sync 命令来生成此模块
```

## vue集成
```


默认为静态页面 需要激活组件
<!-- 该组件的 JS 将在页面加载开始时导入 -->
<InteractiveButton client:load />

<!-- 该组件的 JS 将不会发送给客户端，直到用户向下滚动到该组件在页面上可见时 -->
<InteractiveCounter client:visible />

<!-- 这个组件不会在服务端渲染, 但是在页面加载时将渲染在客户端 -->
<InteractiveModal client:only="svelte" />

```

### 自定义app端点



## 侧边栏 

```
https://starlight.astro.build/zh-cn/
```

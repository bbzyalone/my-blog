---
title: 'position和display'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

在我初学前端的时候，对position和display，尤其是flex特别的混乱，故总结一套，希望能帮助到有需要的同学。这里我想特别告诫一下移动端学习web的同学，例如position:relative，web端叫相对定位，意思是这个属性加在一个元素上，这个元素就使用相对定位的规则在ui上去渲染；而不是和移动端那样设置了相对布局，子布局里都按相对布局去排列，和移动前端还是有很大的差别的，只要记住相对定位和相对布局是有区别的。  

## 一、关于position属性

### 1.1、position:static

默认值，没有定位，置顶元素使用正常的布局行为，即文档常规流中当前的布局位置，此时top、bottom、left、right属性无效。  

例：我在外层黄色div往里放了1个红色和蓝色div标签，如下（当然position不写默认就是static）。


### 1.2、position:relative

相对定位，不脱离文档流。参考自身静态位置，通过top、bottom、left、right定位，并且可以通过z-index进行层次分级  

例：我在蓝色div里放置了一个红色div；红色div的css如下，

```css
.box1 {
  width: 400px;
  height: 300px;
  background: red;
  position: relative;
  left: 50%;
}
```

最终ui如下图，可以看到红色div确实离左边的距离为蓝色的一半 

### 1.3、position:absolute

绝对定位，脱离文档流。通过top、bottom、left、right、定位。定位的起始位置由最近不为static的父元素。否则为body的坐标原点。可以通过z-index进行层次分级  

例：粉色div设置为position:static。在粉色div放入一个红色div设置为position:absolute,使用了left:10%。最终如下图，可以看到红色div不是以粉色区域定位，而是往上找到黑色区域定位。


假如把粉色div改成position:absolute或者是position:relative的话最终如下：


### 1.4、position:fixed

固定定位，脱离文档。相对于浏览器窗口进行定位。怎么拖动滚动条都不会发生变化  

例：红色div设置position:fixed。


### 1.5、position:sticky

粘性定位，他是relative和fixed的结合。当即将要画出屏幕时他就是fixed，否则和relative无异。使用sticky要搭配top、bottom、left、right来使用，否则不生效。例如写上top:0%，意思就是在top:0%这个临界点时会在relative和fixed之间切换  

例：给红色div设置position:sticky，top:0%


## 二、关于display属性

### 2.1、display:block

块级元素:

+   总是以一个块的形式表现出来，占领一整行。若干块级元素会从上到下依次排列(使用float属性除外)
+   可以设置宽度、高度，各个方向margin及padding
+   当元素宽度width没有设置时，他的宽度充满容器
+   块级元素可以嵌套其他块级元素及行内元素
+   块级元素的display默认为block
+   块级元素有：div、h1、h2、p等等

例：页面放了4个块级元素。对第3个红色div,写上了float:right后。就如同上面的第一条说的那样打乱了它的结构不会依次排列了


### 2.2、display:inline

行内元素：

+   它不会单独占据一行，只占据自身高度和宽度所在空间，即元素的宽高是由其文本内容撑开。若干行内元素从左到右(行内元素可以共处一行)，从上到下排列
+   行内元素不能设置宽高
+   行内元素只能设置左右margin和padding，不能设置上下margin和padding
+   行内元素使用float属性后，设置宽高生效
+   行内元素有：title、span、a、strong


### 2.4、display:inline-block

行内块级元素：

+   结合了inline和block特性，既能设置宽高也不会换行
+   行内块级元素起始就是行内元素设置宽高可以生效

## 三、比较特殊的display:flex

弹性元素： 这里虽然是在display里，但是我个人感觉他更像是position属性，准确点更像是移动端的布局，因为position准确的说是定位方式。设为flex布局后，子元素的float，clear和vertical-align属性将失效。简单说设置为display:flex后，此元素即为弹性布局容器，接下来是说此容器的属性

### 3.1、容器属性：flex-direction

+   row(默认值)：主轴为水平方向，起点在左端
+   row-reverse：主轴为水平方向，起点在右端
+   column：主轴为竖直方向，起点在上沿
+   column-reverse：主轴为竖直方向，起点在下沿


### 3.2、容器属性：flex-wrap

+   nowrap(默认值)：不换行
+   wrap：换行，第一行在上方
+   wrap-reverse：换行，第一行在下方


### 3.3、容器属性：justify-content

+   flex-start(默认值)：左对齐
+   flex-end：右对齐
+   center: 横轴方向居中
+   space-between：两端对齐，项目之间的间隔都相等
+   space-around：每个item之间间隔相等，所以2个item之间的间隔比边缘item到边框的距离大一倍


### 3.4、容器属性：align-items(单根轴线)

+   flex-start：交叉轴的起点对齐
+   flex-end：交叉轴的终点对齐
+   center: 交叉轴的中点对齐
+   baseline：项目的第一行文字基线对齐
+   stretch(默认值)：如果未设置高度或为auto,将占满整个容器
+   注意点：在弹性布局下，子元素未设置高度，内容文案align-items失效，不会横向居中。得用text-align='center'才生效


### 3.5、容器属性：align-content(多根轴线)

+   stretch(默认值)：轴线占满整个交叉轴
+   flex-start：交叉轴的起点对齐
+   flex-end：交叉轴的终点对齐
+   center: 交叉轴的中点对齐
+   space-between：与交叉轴2端对齐，轴线之间间隔平均分布
+   space-around：每根轴线2侧间距都相等，所以轴线间的间隔比轴线到边缘的间隔大一倍


### 3.6、弹性布局子元素的单独属性（注意：子元素属性。上面的是容器属性）

#### 3.6.1、align-self

+   auto(默认值)：元素继承父容器的align-items属性，如果没有父容器则为stretch
+   stretch：元素被拉伸以适应容器，如果指定纵轴大小的属性为auto，则其值会使项目的边距盒尺寸 尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制
+   center：元素位于容器中心，弹性布局子元素在纵轴上居中放置
+   flex-start：弹性布局子元素在纵轴上的起始位置(顶部)
+   flex-end：弹性布局子元素在纵轴上的终止位置(底部)
+   baseline：弹性布局子元素与基线对齐


#### 3.6.2、Order

项目的排列顺序，数值越小，排列越前。默认为0


#### 3.6.3、flex、flex-grow、flex-shrink

这几个属性呢有点类似移动前端的线性布局：

+   flex和flex-grow都是使元素放大，但放大的计算公式不同
+   flex-grow： 剩余空间为弹性布局剩余宽度，然后根据比例分配
+   flex： 剩余空间为弹性布局剩余宽度与进行flex的子元素宽度之和。然后根据比例分配
+   flex-shrink： 这个属性和上面2个类似，只不过数值越大，反而缩小的越大


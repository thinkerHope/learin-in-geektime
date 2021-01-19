## 01《Nodejs实战》杨浩 
这是一个项目实战课程

计划学习时间：2周（2021/1/16-2021/1-28）
实际学习时间：

### 项目介绍：
Node.js版极客时间网站
  列表页
    打通前后台
    服务端渲染
  详情页
    网页路由
    异步加载
  播放页
    API服务器

### 课程项目遇到的问题
1.立项
项目立项之前是技术预研
  ·分析要做的需求，找出技术难点
  ·针对每个技术难点就行攻克
2.开发


3.调优


4.维护


NodeJS高性能：阻塞I/O、事件循环
```js
try {
  interview(() => {
    console.log('smile')
  })
} catch(err) {
  console.log('cry', e);
}

function interview(cb) {
  setTimeout(() => {
    if (Math.random() < 0.1) {
      cb('success');
    } else {
      throw new Error('fail');
    }
  }, 500);
}
```
如上error会抛出到全局，在node中全局抛出错误会导致nodejs程序奔溃。
原因：try-catch的错误捕获机制是函数的调用栈，而setTimeout的回调函数是在另一个事件循环里的，导致最外层的 try-catch无法捕获(一个全新的函数调用栈)。


```markdow
Express

要了解一个框架，最好的方法：
  了解它的关键功能（官网?npm介绍页面--Features?）
  推到出它要解决的问题是什么


```
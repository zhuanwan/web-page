# fabric.Circle

fabric 是个对象， 它上面挂载了很多方法

-- fabric.StaticCanvas // 创建

-- fabric.util.xx // 工具类

-- fabric.CommonMethods.xx // 公共方法

-- fabric.Circle

## fabric.Circle

### 定义

`fabric.Circle`, 调用 `fabric.util.createClass`，继承 fabric.Object，返回 function

```js
fabric.Circle = fabric.util.createClass(fabric.Object, {
    ...
})
```

### 生成实例

`new fabric.Circle(options)` 生成实例，执行 `initialize`

```js
initialize: function(options) {
    if (options) {
        this.setOptions(options);
    }
},

 // this.setOptions 会调用
 _set: function(key, value) {
    this.callSuper('_set', key, value);

    if (key === 'radius') {
      this.setRadius(value);
    }

    return this;
  },
```

### canvas.add(实例)

````canvas.add(circle), 执行

```js title="伪代码"
this._onObjectAdded(Circle实例); // Circle实例添加进objects
this._renderObjects(ctx, objects); // 渲染 objects
objects[i].render(ctx);
this.drawObject(this._cacheContext, options.forClipping); // _cacheContext, 缓存ctx
this._render(ctx); // _cacheContext 上画Circle实例
// 开始画Circle实例
 _render: function(ctx) {
    ctx.beginPath();
    ctx.arc(
    0,
    0,
    this.radius,
    degreesToRadians(this.startAngle),
    degreesToRadians(this.endAngle),
    false
    );
    this._renderPaintInOrder(ctx);
},
// 画完了_cacheContext 添加到canvas
drawCacheOnCanvas: function(ctx) {
    ctx.scale(1 / this.zoomX, 1 / this.zoomY);
    ctx.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
},
````

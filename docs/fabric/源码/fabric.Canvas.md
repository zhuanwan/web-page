# fabric.Canvas


fabric是个对象， 它上面挂载了很多方法

-- fabric.StaticCanvas // 创建

-- fabric.util.xx // 工具类

-- fabric.CommonMethods.xx // 公共方法

-- fabric.Circle

## fabric.StaticCanvas

### 定义

`fabric.StaticCanvas`, 调用 `fabric.util.createClass`，返回function，该function的原型上会添加`fabric.CommonMethods.xx`, `fabric.Collection.xx` 等等

```js
fabric.StaticCanvas = fabric.util.createClass(fabric.CommonMethods, fabric.Collection, {
    initialize: function ...,
    backgroundColor: '',
    ...
}
fabric.CommonMethods = {
    _setOptions: function ...,
    ...
}
fabric.Collection = {
    _objects: [],
    add: function ...
    ...
}

// 省略了些
fabric.util.createClass = function() {
    function klass() {
      this.initialize.apply(this, arguments);
    }
    const properties = slice.call(arguments, 0);
    for (var i = 0, length = properties.length; i < length; i++) {
      addMethods(klass, properties[i], parent);
    }
    return klass
}
```

```js
fabric.StaticCanvas = function() {
    // 生成实例会执行
    this.initialize.apply(this, arguments);
}
fabric.StaticCanvas.prototype.initialize = function() {...}
fabric.StaticCanvas.prototype._setOptions = function() {...}
fabric.StaticCanvas.prototype.add = function() {...}
fabric.StaticCanvas.prototype._objects = []
```

### 生成实例
`new fabric.StaticCanvas(canvasEl, options)` 生成实例，执行 `initialize`

```js
initialize: function(el, options) {
    options || (options = { });
    this.renderAndResetBound = this.renderAndReset.bind(this);
    this.requestRenderAllBound = this.requestRenderAll.bind(this);
    this._initStatic(el, options); // 这个只生成loverCanvas，并设置背景
},
```

`this.renderAndReset` 重置canvas

```js
renderCanvas: function(ctx, objects) {
    var v = this.viewportTransform, path = this.clipPath;
    this.cancelRequestedRender(); // 消除动画
    // 计算canvas边界， 可以调用canvas.calcViewportBoundaries() 返回
    // this.vptCoords = {
    //    tl: min,
    //    tr: new Point(max.x, min.y),
    //    bl: new Point(min.x, max.y),
    //    br: max,
    //  };
    this.calcViewportBoundaries(); 
    this.clearContext(ctx);
    ...
}
```

`new fabric.Canvas(canvasEl, options)` 生成实例，执行 `initialize`, 和 StaticCanvas一样，initialize方法多了

```js
initialize: function(el, options) {
    options || (options = { });
    this.renderAndResetBound = this.renderAndReset.bind(this);
    this.requestRenderAllBound = this.requestRenderAll.bind(this);
    this._initStatic(el, options);

    this._initInteractive(); // 多了这个
    this._createCacheCanvas(); // 多了这个, 缓存canvas
},
```
`this._initInteractive()`
- 添加upperCanvas, 和lowerCanvas一起被`canvas-container`包裹
- 初始化监听事件
- 笔刷

```js
    this.wrapperEl = <div class="canvas-container'>
        <canvas class="upper-canvas"></canvas>
        <canvas class="lower-canvas"></canvas>
    </div>
    this.contextContainer = lowerCanvasEl.getContext('2d');
    this.contextTop =  upperCanvasEl.getContext('2d');

```

`this._createCacheCanvas();` 缓存canvas

```js
this.cacheCanvasEl = this._createCanvasElement();
this.contextCache = this.cacheCanvasEl.getContext('2d');
```

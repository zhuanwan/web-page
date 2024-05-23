import{_ as n,c as a,o as s,a as e}from"./app-Ba5SHWBn.js";const i={},c=e(`<h1 id="fabric-circle" tabindex="-1"><a class="header-anchor" href="#fabric-circle"><span>fabric.Circle</span></a></h1><p>fabric 是个对象， 它上面挂载了很多方法</p><p>-- fabric.StaticCanvas // 创建</p><p>-- fabric.util.xx // 工具类</p><p>-- fabric.CommonMethods.xx // 公共方法</p><p>-- fabric.Circle</p><h2 id="fabric-circle-1" tabindex="-1"><a class="header-anchor" href="#fabric-circle-1"><span>fabric.Circle</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p><code>fabric.Circle</code>, 调用 <code>fabric.util.createClass</code>，继承 fabric.Object，返回 function</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>fabric<span class="token punctuation">.</span>Circle <span class="token operator">=</span> fabric<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span>fabric<span class="token punctuation">.</span>Object<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成实例" tabindex="-1"><a class="header-anchor" href="#生成实例"><span>生成实例</span></a></h3><p><code>new fabric.Circle(options)</code> 生成实例，执行 <code>initialize</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function-variable function">initialize</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// this.setOptions 会调用</span>
 <span class="token function-variable function">_set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callSuper</span><span class="token punctuation">(</span><span class="token string">&#39;_set&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;radius&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setRadius</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="canvas-add-实例" tabindex="-1"><a class="header-anchor" href="#canvas-add-实例"><span>canvas.add(实例)</span></a></h3><div class="language-canvas.add(circle), line-numbers-mode" data-ext="canvas.add(circle)," data-title="canvas.add(circle),"><pre class="language-canvas.add(circle),"><code>
\`\`\`js title=&quot;伪代码&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[c];function l(p,o){return s(),a("div",null,t)}const d=n(i,[["render",l],["__file","fabric.Circle.html.vue"]]),u=JSON.parse('{"path":"/fabric/%E6%BA%90%E7%A0%81/fabric.Circle.html","title":"fabric.Circle","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"fabric.Circle","slug":"fabric-circle-1","link":"#fabric-circle-1","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"生成实例","slug":"生成实例","link":"#生成实例","children":[]},{"level":3,"title":"canvas.add(实例)","slug":"canvas-add-实例","link":"#canvas-add-实例","children":[]}]}],"git":{"updatedTime":1716273961000,"contributors":[{"name":"wu.hui","email":"wu.hui@qkupower.com","commits":1}]},"filePathRelative":"fabric/源码/fabric.Circle.md"}');export{d as comp,u as data};

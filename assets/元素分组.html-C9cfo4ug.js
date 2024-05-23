import{_ as s,c as a,o as t,a as n,b as e}from"./app-Ba5SHWBn.js";const p={},o=n('<h1 id="元素分组" tabindex="-1"><a class="header-anchor" href="#元素分组"><span>元素分组</span></a></h1><ul><li>getObjects() 返回一组中所有对象的数组</li><li>size() 所有对象的数量</li><li>contains() 检查特定对象是否在 group 中</li><li>item() 组中元素</li><li>forEachObject() 遍历组中对象</li><li>add() 添加元素对象</li><li>remove() 删除元素对象</li><li>fabric.util.object.clone() 克隆</li><li>getActiveObject() 拿到活动对象</li><li>setActiveObject(sel) 设置活动对象</li><li>discardActiveObject() 取消所有的活动对象</li><li>new fabric.ActiveSelection(objects, {canvas}) 主动选中哪些元素作为活动对象</li><li>canvas.getActiveObject().toActiveSelection() 打散</li></ul><p>官方示例 <a href="http://fabricjs.com/manage-selection" target="_blank" rel="noopener noreferrer">分组</a></p><h3 id="show-code" tabindex="-1"><a class="header-anchor" href="#show-code"><span><a href="https://zhuanwan.github.io/web/fabric/%E5%85%83%E7%B4%A0%E6%93%8D%E4%BD%9C/%E5%85%83%E7%B4%A0%E5%88%86%E7%BB%841" target="_blank" rel="noopener noreferrer"><strong>show</strong></a> <a href="https://github.com/zhuanwan/web-page/tree/master/docs/fabric/%E5%85%83%E7%B4%A0%E6%93%8D%E4%BD%9C/%E5%85%83%E7%B4%A0%E5%88%86%E7%BB%841.jsx" target="_blank" rel="noopener noreferrer"><strong>code</strong></a></span></a></h3>',4),l=e("iframe",{height:"200",width:"100%",style:{border:"1px solid #ff9000"},frameborder:"1",allowfullscreen:"true",src:"https://zhuanwan.github.io/web/fabric/元素操作/元素分组1"},null,-1),c=n(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,0,0,0.4)&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">evented</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Text</span><span class="token punctuation">(</span><span class="token string">&quot;我和长方形可以一起拖动&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">evented</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>rect<span class="token punctuation">,</span> text<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span>

group<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&quot;#0f0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[o,l,c];function r(u,k){return t(),a("div",null,i)}const b=s(p,[["render",r],["__file","元素分组.html.vue"]]),v=JSON.parse('{"path":"/fabric/%E5%85%83%E7%B4%A0%E6%93%8D%E4%BD%9C/%E5%85%83%E7%B4%A0%E5%88%86%E7%BB%84.html","title":"元素分组","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"show code","slug":"show-code","link":"#show-code","children":[]}],"git":{"updatedTime":1716276694000,"contributors":[{"name":"wu.hui","email":"wu.hui@qkupower.com","commits":2}]},"filePathRelative":"fabric/元素操作/元素分组.md"}');export{b as comp,v as data};

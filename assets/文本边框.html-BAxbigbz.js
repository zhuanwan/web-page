import{_ as s,c as a,o as t,a as n,b as p}from"./app-Ba5SHWBn.js";const o={},e=n('<h1 id="文本边框" tabindex="-1"><a class="header-anchor" href="#文本边框"><span>文本边框</span></a></h1><h2 id="自定义边框" tabindex="-1"><a class="header-anchor" href="#自定义边框"><span>自定义边框</span></a></h2><h3 id="show-code" tabindex="-1"><a class="header-anchor" href="#show-code"><span><a href="https://zhuanwan.github.io/web/fabric/%E6%96%87%E6%9C%AC/%E6%96%87%E6%9C%AC%E8%BE%B9%E6%A1%861" target="_blank" rel="noopener noreferrer"><strong>show</strong></a> <a href="https://github.com/zhuanwan/web-page/tree/master/docs/fabric/%E6%96%87%E6%9C%AC/%E6%96%87%E6%9C%AC%E8%BE%B9%E6%A1%861.jsx" target="_blank" rel="noopener noreferrer"><strong>code</strong></a></span></a></h3>',3),c=p("iframe",{height:"500",width:"100%",style:{border:"1px solid #ff9000"},frameborder:"1",allowfullscreen:"true",src:"https://zhuanwan.github.io/web/fabric/文本/文本边框1"},null,-1),i=n(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fabric <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;fabric&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> FabricText <span class="token operator">=</span> fabric<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span>fabric<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;border-text&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 添加一个 type 属性</span>
  <span class="token comment">// 初始化</span>
  <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callSuper</span><span class="token punctuation">(</span><span class="token string">&quot;initialize&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继承</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">_render</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fabric<span class="token punctuation">.</span><span class="token class-name">Textbox</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> padding <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>padding <span class="token operator">||</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>showTextBoxBorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> w <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> padding<span class="token punctuation">;</span>
      <span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> padding<span class="token punctuation">;</span>
      <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> padding<span class="token punctuation">;</span>
      <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> padding<span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> w<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> w<span class="token punctuation">,</span> y <span class="token operator">+</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> stroke <span class="token operator">=</span> ctx<span class="token punctuation">.</span>strokeStyle<span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textboxBorderColor<span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> stroke<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[e,c,i];function u(r,k){return t(),a("div",null,l)}const v=s(o,[["render",u],["__file","文本边框.html.vue"]]),h=JSON.parse('{"path":"/fabric/%E6%96%87%E6%9C%AC/%E6%96%87%E6%9C%AC%E8%BE%B9%E6%A1%86.html","title":"文本边框","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"自定义边框","slug":"自定义边框","link":"#自定义边框","children":[{"level":3,"title":"show code","slug":"show-code","link":"#show-code","children":[]}]}],"git":{"updatedTime":1716276694000,"contributors":[{"name":"wu.hui","email":"wu.hui@qkupower.com","commits":2}]},"filePathRelative":"fabric/文本/文本边框.md"}');export{v as comp,h as data};

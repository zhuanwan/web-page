import{_ as n,c as s,o as a,a as p}from"./app-Ba5SHWBn.js";const e={},t=p(`<h1 id="加减乘除带括号" tabindex="-1"><a class="header-anchor" href="#加减乘除带括号"><span>加减乘除带括号</span></a></h1><ul><li><p>定义结果字段res, 原理是相加”a + b“, 如果是b是负数 那么 a+(-b)</p></li><li><p>s 为要遍历的字符串，尾部加”+“</p></li><li><p>遍历前定义上一次的操作符pos为1，也就是”+“</p></li><li><p>遍历到数字的时候，定义subStr子串，代表上一次的保存的值</p></li><li><p>首先只考虑加减的时候，遍历到操作符的时候，只要把上一次的操作符pos和subStr相乘，得到数字和res相加，把pos设为当前操作符，subStr设为”“</p></li><li><p>有了乘除，要考虑优先级，如果碰到*/，就把subStr和pos存储起来，等下一次再遇到操作符的时候取出计算后重新赋值subStr，再按照加减的算法继续</p></li><li><p>有括号的情况，用递归，如果遇到左括号，继续循环，直到遇到最后一个右括号，这中间的字符串取出，赋值subStr，比如 5+(8-9*(2-1)), 8-9*(2-1)作为新的字符串计算</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> caculator<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s <span class="token operator">=</span> s + <span class="token string">&#39;+&#39;</span>

  <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token number">0</span> // 结果
  <span class="token builtin class-name">let</span> subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token builtin class-name">let</span> pos <span class="token operator">=</span> <span class="token number">1</span> // 上一次的操作符
  <span class="token builtin class-name">let</span> tempData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> // 存储上一次的 subStr 和 操作符

  <span class="token builtin class-name">let</span> zuokuoArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> // 左括号栈
  <span class="token builtin class-name">let</span> num <span class="token operator">=</span> <span class="token number">0</span> // 配合 左括号栈 匹配到右括号时子串长度

  <span class="token builtin class-name">let</span> i <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var ch <span class="token operator">=</span> s.charAt<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

    // 如果碰到左括号，左括号栈 入栈
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      zuokuoArr.push<span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    // 如果碰到右括号，左括号栈 出栈
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      zuokuoArr.pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    // 如果左括号栈内还有左括号，继续循环，子串长度 + <span class="token number">1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>zuokuoArr.length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      num++
      <span class="token builtin class-name">continue</span>
    <span class="token punctuation">}</span>

    // 如果发现左括号栈 长度为0 并且 有子串, 那么递归单独计算子串，把结果赋值给subStr, 子串长度设为0，继续循环
    <span class="token keyword">if</span> <span class="token punctuation">(</span>zuokuoArr.length <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      const t <span class="token operator">=</span> s.substring<span class="token punctuation">(</span>i - num + <span class="token number">1</span>, i<span class="token punctuation">)</span>
      num <span class="token operator">=</span> <span class="token number">0</span>
      subStr <span class="token operator">=</span> caculator<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
      <span class="token builtin class-name">continue</span>
    <span class="token punctuation">}</span>

    /////////////////// 以上是括号逻辑 ////////////////////
    ////////////////// 下面是计算逻辑 ////////////////////

    // 如果发现 是数字，继续循环，得到完整数字
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      subStr <span class="token operator">=</span> subStr + ch
      <span class="token builtin class-name">continue</span>
    <span class="token punctuation">}</span>

    // 如果碰到 +-*/
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;+&#39;</span>, <span class="token string">&#39;-&#39;</span>, <span class="token string">&#39;*&#39;</span>, <span class="token string">&#39;/&#39;</span><span class="token punctuation">]</span>.includes<span class="token punctuation">(</span>ch<span class="token punctuation">))</span> <span class="token punctuation">{</span>
      // 先判断前面的是否存储上一次的subStr, 计算得出当前subStr
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tempData.length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        const <span class="token function">op</span> <span class="token operator">=</span> tempData.pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        const d <span class="token operator">=</span> tempData.pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>op <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          subStr <span class="token operator">=</span> d * subStr
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>op <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          subStr <span class="token operator">=</span> d / subStr
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      // 如果是 + - ，计算结果，如果是*/，存储subStr和操作符
      switch <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;+&#39;</span><span class="token builtin class-name">:</span>
          res <span class="token operator">+=</span> pos * subStr
          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
          pos <span class="token operator">=</span> <span class="token number">1</span>
          <span class="token builtin class-name">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;-&#39;</span><span class="token builtin class-name">:</span>
          res <span class="token operator">+=</span> pos * subStr
          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
          pos <span class="token operator">=</span> <span class="token parameter variable">-1</span>
          <span class="token builtin class-name">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;*&#39;</span><span class="token builtin class-name">:</span>
          tempData.push<span class="token punctuation">(</span>subStr<span class="token punctuation">)</span>
          tempData.push<span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
          <span class="token builtin class-name">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;/&#39;</span><span class="token builtin class-name">:</span>
          tempData.push<span class="token punctuation">(</span>subStr<span class="token punctuation">)</span>
          tempData.push<span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
          <span class="token builtin class-name">break</span>
        default:
          <span class="token builtin class-name">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token builtin class-name">return</span> res
<span class="token punctuation">}</span>

console.log<span class="token punctuation">(</span>caculator<span class="token punctuation">(</span><span class="token string">&#39;4-4*(3+2)-(4)+4&#39;</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[t];function l(c,o){return a(),s("div",null,i)}const r=n(e,[["render",l],["__file","加减乘除带括号.html.vue"]]),d=JSON.parse('{"path":"/algorithm/%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E5%B8%A6%E6%8B%AC%E5%8F%B7.html","title":"加减乘除带括号","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1716273961000,"contributors":[{"name":"wu.hui","email":"wu.hui@qkupower.com","commits":1}]},"filePathRelative":"algorithm/加减乘除带括号.md"}');export{r as comp,d as data};

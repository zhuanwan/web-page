import{_ as n,c as s,o as a,a as p}from"./app-Ba5SHWBn.js";const t="/web-page/images/640.png",e={},o=p('<h1 id="基础排序" tabindex="-1"><a class="header-anchor" href="#基础排序"><span>基础排序</span></a></h1><p><a href="https://mp.weixin.qq.com/s/vn3KiV-ez79FmbZ36SX9lg" target="_blank" rel="noopener noreferrer">转</a></p><p><img src="'+t+`" alt="网上找的图" title="网上找的图"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>排序算法的稳定性: 能保证排序前 2 个相等的数的前后位置顺序和排序后它们两个的前后位置顺序相同</p></div><h2 id="冒泡排序-稳定" tabindex="-1"><a class="header-anchor" href="#冒泡排序-稳定"><span>冒泡排序（稳定）</span></a></h2><p>1、循环遍历，两两比较，如果前面的数大于后面的数，交换，这样第一轮交换后最后的数是最大的 2、重复 1，如果一轮下来没有要交换的，退出循环，证明已经是排序了</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> sort<span class="token punctuation">(</span>arr, xs<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span> // 是否还需要继续判断标志
    <span class="token keyword">for</span> <span class="token punctuation">(</span>let j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr.length - <span class="token number">1</span><span class="token punctuation">;</span> j++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j+1<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>, arr<span class="token punctuation">[</span>j+1<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j+1<span class="token punctuation">]</span>, arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
        flag <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token builtin class-name">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择排序-不稳定" tabindex="-1"><a class="header-anchor" href="#选择排序-不稳定"><span>选择排序（不稳定）</span></a></h2><p>1、先找最大（小）的值，放起始位置 2、从剩余数组中找最大（小）的值，放第二个位置 3、重复 2</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> sort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr.length - <span class="token number">1</span><span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> minIndex <span class="token operator">=</span> i
    <span class="token keyword">for</span> <span class="token punctuation">(</span>let j <span class="token operator">=</span> i + <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr.length<span class="token punctuation">;</span> j++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minIndex <span class="token operator">=</span> j
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!=</span><span class="token operator">=</span> i <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span>, arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>, arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">]</span>
      console.log<span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token builtin class-name">return</span> arr
<span class="token punctuation">}</span>

console.log<span class="token punctuation">(</span>sort<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4,2</span>,3,6,5<span class="token punctuation">]</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入排序-稳定" tabindex="-1"><a class="header-anchor" href="#插入排序-稳定"><span>插入排序（稳定）</span></a></h2><p>1、第一个元素为已排序，取出第二个，和第一个比较，是否交换 2、第一个和第二个元素为已排序，取出第三个，和第一个，第二个比较，是否交换 3、重复 2</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token keyword">function</span> sort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  var len <span class="token operator">=</span> arr.length
  var preIndex,current<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    preIndex <span class="token operator">=</span> i <span class="token parameter variable">-1</span>
    current <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    while<span class="token punctuation">(</span>preIndex <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>preIndex + <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span>
      preIndex--
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>preIndex + <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> current
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> arr
<span class="token punctuation">}</span>

console.log<span class="token punctuation">(</span>sort<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4,2</span>,3,6,5<span class="token punctuation">]</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="希尔排序-不稳定" tabindex="-1"><a class="header-anchor" href="#希尔排序-不稳定"><span>希尔排序（不稳定）</span></a></h2><p>希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。</p><p>以[8, 9, 1, 7, 2, 3, 5, 4, 6, 0]为例 1、gap 为 4 的快速排序 1.a[4]=2，a[0]=8 比较(交换) =&gt; [2,9,1,7,8,3,5,4,6,0] 2.a[5]=3，a[1]=9 比较(交换) =&gt; [2,3,1,7,8,9,5,4,6,0] 3.a[6]=5，a[2]=1 比较(不交换) =&gt; [2,3,1,7,8,9,5,4,6,0] 3.a[7]=4，a[3]=7 比较(交换) =&gt; [2,3,1,4,8,9,5,7,6,0] 3.a[8]=6，a[4]=8，a[0]=2 比较(交换) =&gt; [2,3,1,4,6,9,5,7,8,0] 3.a[9]=0，a[5]=9，a[1]=3 比较(交换) =&gt; [2,0,1,4,6,3,5,7,8,9]</p><p>2、gap 为 1 普通快速排序</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> shellSort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  var len <span class="token operator">=</span> arr.length,
    temp,
    gap <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>gap <span class="token operator">&lt;</span> len / <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    //动态定义间隔序列
    gap <span class="token operator">=</span> gap * <span class="token number">3</span> + <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>gap<span class="token punctuation">;</span> gap <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">=</span> Math.floor<span class="token punctuation">(</span>gap / <span class="token number">3</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>var j <span class="token operator">=</span> i - gap<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> temp<span class="token punctuation">;</span> j -<span class="token operator">=</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>j + gap<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      arr<span class="token punctuation">[</span>j + gap<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console.log<span class="token punctuation">(</span>shellSort<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">8</span>, <span class="token number">9</span>, <span class="token number">1</span>, <span class="token number">7</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">5</span>, <span class="token number">4</span>, <span class="token number">6</span>, <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="归并排序-稳定" tabindex="-1"><a class="header-anchor" href="#归并排序-稳定"><span>归并排序（稳定）</span></a></h2><p>以空间换时间，递归每次用个新数组保存排序后的数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> mergeSort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  var len <span class="token operator">=</span> arr.length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> arr
  <span class="token punctuation">}</span>
  var middle <span class="token operator">=</span> Math.floor<span class="token punctuation">(</span>len / <span class="token number">2</span><span class="token punctuation">)</span>
  var left <span class="token operator">=</span> arr.slice<span class="token punctuation">(</span><span class="token number">0</span>, middle<span class="token punctuation">)</span>
  var right <span class="token operator">=</span> arr.slice<span class="token punctuation">(</span>middle<span class="token punctuation">)</span>
  <span class="token builtin class-name">return</span> merge<span class="token punctuation">(</span>mergeSort<span class="token punctuation">(</span>left<span class="token punctuation">)</span>, mergeSort<span class="token punctuation">(</span>right<span class="token punctuation">))</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> merge<span class="token punctuation">(</span>left, right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  var result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  while<span class="token punctuation">(</span>left.length <span class="token operator">&amp;&amp;</span> right.length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result.push<span class="token punctuation">(</span>left.shift<span class="token punctuation">(</span><span class="token punctuation">))</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result.push<span class="token punctuation">(</span>right.shift<span class="token punctuation">(</span><span class="token punctuation">))</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left.length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result.push<span class="token punctuation">(</span>left.shift<span class="token punctuation">(</span><span class="token punctuation">))</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>right.length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result.push<span class="token punctuation">(</span>right.shift<span class="token punctuation">(</span><span class="token punctuation">))</span>
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速排序-不稳定" tabindex="-1"><a class="header-anchor" href="#快速排序-不稳定"><span>快速排序（不稳定）</span></a></h2><p>1、选择一个基准，这里选中间的，然后左边放小于基准的，右边放大于基准的 2、重复 1</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> quickSort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr.length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> arr
  <span class="token punctuation">}</span>
  var pivotIndex <span class="token operator">=</span> Math.floor<span class="token punctuation">(</span>arr.length / <span class="token number">2</span><span class="token punctuation">)</span>
  var pivot <span class="token operator">=</span> arr.splice<span class="token punctuation">(</span>pivotIndex, <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  var left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  var right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left.push<span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      right.push<span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> quickSort<span class="token punctuation">(</span>left<span class="token punctuation">)</span>.concat<span class="token punctuation">(</span><span class="token punctuation">[</span>pivot<span class="token punctuation">]</span>, quickSort<span class="token punctuation">(</span>right<span class="token punctuation">))</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> quickSort<span class="token punctuation">(</span>arr, left, right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  var len <span class="token operator">=</span> arr.length,
    partitionIndex,
    left <span class="token operator">=</span> typeof left <span class="token operator">!=</span> <span class="token string">&quot;number&quot;</span> ? <span class="token number">0</span> <span class="token builtin class-name">:</span> left,
    right <span class="token operator">=</span> typeof right <span class="token operator">!=</span> <span class="token string">&quot;number&quot;</span> ? len - <span class="token number">1</span> <span class="token builtin class-name">:</span> right<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    partitionIndex <span class="token operator">=</span> partition<span class="token punctuation">(</span>arr, left, right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    quickSort<span class="token punctuation">(</span>arr, left, partitionIndex - <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    quickSort<span class="token punctuation">(</span>arr, partitionIndex + <span class="token number">1</span>, right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> partition<span class="token punctuation">(</span>arr, left, right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  // 分区操作
  var pivot <span class="token operator">=</span> left, // 设定基准值（pivot）
    index <span class="token operator">=</span> pivot + <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      swap<span class="token punctuation">(</span>arr, i, index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      index++<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  swap<span class="token punctuation">(</span>arr, pivot, index - <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> index - <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> swap<span class="token punctuation">(</span>arr, i, j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  var temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

const arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span>, <span class="token number">8</span>, <span class="token number">1</span>, <span class="token number">7</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">5</span>, <span class="token number">4</span>, <span class="token number">6</span>, <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console.log<span class="token punctuation">(</span>quickSort<span class="token punctuation">(</span>arr<span class="token punctuation">))</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> partition2<span class="token punctuation">(</span>arr, low, high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">let</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">&gt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      --high<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ++low<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> low<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> partition3<span class="token punctuation">(</span>a, left, right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span>
  <span class="token punctuation">}</span>

  <span class="token builtin class-name">let</span> pivot <span class="token operator">=</span> a<span class="token punctuation">[</span>left<span class="token punctuation">]</span>  // 基准
  <span class="token builtin class-name">let</span> i <span class="token operator">=</span> left
  <span class="token builtin class-name">let</span> j <span class="token operator">=</span> right
  while<span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    if<span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> pivot <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j--
      <span class="token builtin class-name">continue</span>
    <span class="token punctuation">}</span>
    if<span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> pivot <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i++
      <span class="token builtin class-name">continue</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>,a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span>,a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    i++
    j--
  <span class="token punctuation">}</span>

  <span class="token punctuation">[</span>a<span class="token punctuation">[</span>left<span class="token punctuation">]</span>,a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>,a<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span>

  <span class="token builtin class-name">return</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="堆排序-不稳定" tabindex="-1"><a class="header-anchor" href="#堆排序-不稳定"><span>堆排序（不稳定）</span></a></h2><p>1、创建一个大根堆H[0,...,n-1]，最大值在顶部 2、堆首和堆尾互换, 调整H[0, n-2]堆 3、重复2</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  // 交换两个节点
  <span class="token keyword">function</span> swap<span class="token punctuation">(</span>A, i, j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> temp <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>

  // 创建堆，其实是对data数组做一个结构调整，使其具有堆的特性
  <span class="token keyword">function</span> buildHeap<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var len <span class="token operator">=</span> data.length
    <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> Math.floor<span class="token punctuation">(</span>len / <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i--<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      heapAjust<span class="token punctuation">(</span>data, i, len<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  // 堆调整函数，即调整当前data为大根堆
  <span class="token keyword">function</span> heapAjust<span class="token punctuation">(</span>data, i, len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var child <span class="token operator">=</span> <span class="token number">2</span> * i + <span class="token number">1</span>
    // 如果有孩子结点，默认情况是左孩子
    <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">&lt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      var temp <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      // 如果右孩子存在且其值大于左孩子的值，则将child指向右孩子
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child + <span class="token number">1</span> <span class="token operator">&lt;=</span> len <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>child + <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        child <span class="token operator">=</span> child + <span class="token number">1</span>
      <span class="token punctuation">}</span>
      // 如果当前结点的值小于其孩子结点的值，则交换，直至循环结束
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>child<span class="token punctuation">]</span>
        data<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">=</span> temp
        i <span class="token operator">=</span> child
        child <span class="token operator">=</span> <span class="token number">2</span> * i + <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  // 排序
  <span class="token keyword">function</span> heapSort<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buildHeap<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    var len <span class="token operator">=</span> data.length
    <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> len - <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i--<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      swap<span class="token punctuation">(</span>data, i, <span class="token number">0</span><span class="token punctuation">)</span>
      heapAjust<span class="token punctuation">(</span>data, <span class="token number">0</span>, i - <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token builtin class-name">return</span> data
  <span class="token punctuation">}</span>
  const arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">62</span>, <span class="token number">88</span>, <span class="token number">58</span>, <span class="token number">47</span>, <span class="token number">35</span>, <span class="token number">73</span>, <span class="token number">51</span>, <span class="token number">99</span>, <span class="token number">37</span>, <span class="token number">93</span><span class="token punctuation">]</span>
  var newArr <span class="token operator">=</span> heapSort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  console.log<span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> // <span class="token punctuation">[</span><span class="token number">35</span>, <span class="token number">37</span>, <span class="token number">47</span>, <span class="token number">51</span>, <span class="token number">58</span>, <span class="token number">62</span>, <span class="token number">73</span>, <span class="token number">88</span>, <span class="token number">93</span>, <span class="token number">99</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计数排序-稳定" tabindex="-1"><a class="header-anchor" href="#计数排序-稳定"><span>计数排序（稳定）</span></a></h2><p>1、花O(n)的时间扫描一下整个序列 A，获取最小值 min 和最大值 max 2、开辟一块新的空间创建新的数组 B，长度为 ( max - min + 1) 3、数组 B 中 index 的元素记录的值是 A 中某元素出现的次数 4、最后输出目标整数序列，具体的逻辑是遍历数组 B，输出相应元素以及对应的个数</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">function</span> countSort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token builtin class-name">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token builtin class-name">let</span> buckets <span class="token operator">=</span> new Array<span class="token punctuation">(</span>max - min + <span class="token number">1</span><span class="token punctuation">)</span>.fill<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buckets<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> - min<span class="token punctuation">]</span>++ //减去最小值，确保索引大于负数
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token builtin class-name">let</span> bucketCount <span class="token operator">=</span> max - min + <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bucketCount<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      //将桶的编号加上最小值，变回原来的元素
      arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> i + min
      index++
      buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span>--
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token builtin class-name">return</span> arr
<span class="token punctuation">}</span>
var arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">8</span>, <span class="token number">7</span>, <span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">7</span>, <span class="token number">3</span><span class="token punctuation">]</span>
console.log<span class="token punctuation">(</span>countSort<span class="token punctuation">(</span>arr<span class="token punctuation">))</span> //1,2,2,3,3,7,7,8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="桶排序-稳定" tabindex="-1"><a class="header-anchor" href="#桶排序-稳定"><span>桶排序（稳定）</span></a></h2><p>1、确认范围，亦即求取原数组的最大值与最小值。 2、确认需要多少个桶（这个通常作为参数传入，不能大于原数组长度），然后最大值减最小值，除以桶的数量，但得每个桶最多能放多个元素，我们称这个数为桶的最大容量。 3、遍历原数组的所有元素，除以这个最大容量，就能得到它要放入的桶的编号了。在放入时可以使用插入排序，也可以在合并时才使用快速排序。 对所有桶进行遍历，如果桶内的元素已经排好序，直接一个个取出来，放到结果数组就行了</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  const bucketSort <span class="token operator">=</span> <span class="token punctuation">(</span>array, bucketSize<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>array.length <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">return</span> array
    <span class="token punctuation">}</span>

    console.time<span class="token punctuation">(</span><span class="token string">&#39;桶排序耗时&#39;</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token builtin class-name">let</span> minValue <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token builtin class-name">let</span> maxValue <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minValue <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> //输入数据的最小值
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxValue <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> //输入数据的最大值
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    //桶的初始化
    const DEFAULT_BUCKET_SIZE <span class="token operator">=</span> <span class="token number">5</span> //设置桶的默认数量为 <span class="token number">5</span>
    bucketSize <span class="token operator">=</span> bucketSize <span class="token operator">||</span> DEFAULT_BUCKET_SIZE
    const bucketCount <span class="token operator">=</span> Math.floor<span class="token punctuation">((</span>maxValue - minValue<span class="token punctuation">)</span> / bucketSize<span class="token punctuation">)</span> + <span class="token number">1</span>
    const buckets <span class="token operator">=</span> new Array<span class="token punctuation">(</span>bucketCount<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    //利用映射函数将数据分配到各个桶中
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      buckets<span class="token punctuation">[</span>Math.floor<span class="token punctuation">((</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> - minValue<span class="token punctuation">)</span> / bucketSize<span class="token punctuation">)</span><span class="token punctuation">]</span>.push<span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    array.length <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      quickSort<span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> //对每个桶进行排序，这里使用了快速排序
      <span class="token keyword">for</span> <span class="token punctuation">(</span>var j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span>.length<span class="token punctuation">;</span> j++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array.push<span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console.timeEnd<span class="token punctuation">(</span><span class="token string">&#39;桶排序耗时&#39;</span><span class="token punctuation">)</span>

    <span class="token builtin class-name">return</span> array
  <span class="token punctuation">}</span>

  // 快速排序
  const quickSort <span class="token operator">=</span> <span class="token punctuation">(</span>arr, left, right<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> len <span class="token operator">=</span> arr.length,
      partitionIndex
    left <span class="token operator">=</span> typeof left <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span> ? <span class="token number">0</span> <span class="token builtin class-name">:</span> left
    right <span class="token operator">=</span> typeof right <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span> ? len - <span class="token number">1</span> <span class="token builtin class-name">:</span> right

    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      partitionIndex <span class="token operator">=</span> partition<span class="token punctuation">(</span>arr, left, right<span class="token punctuation">)</span>
      quickSort<span class="token punctuation">(</span>arr, left, partitionIndex - <span class="token number">1</span><span class="token punctuation">)</span>
      quickSort<span class="token punctuation">(</span>arr, partitionIndex + <span class="token number">1</span>, right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token builtin class-name">return</span> arr
  <span class="token punctuation">}</span>

  const partition <span class="token operator">=</span> <span class="token punctuation">(</span>arr, left, right<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    //分区操作
    <span class="token builtin class-name">let</span> pivot <span class="token operator">=</span> left, //设定基准值（pivot）
      index <span class="token operator">=</span> pivot + <span class="token number">1</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>pivot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        swap<span class="token punctuation">(</span>arr, i, index<span class="token punctuation">)</span>
        index++
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    swap<span class="token punctuation">(</span>arr, pivot, index - <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">return</span> index - <span class="token number">1</span>
  <span class="token punctuation">}</span>

  const swap <span class="token operator">=</span> <span class="token punctuation">(</span>arr, i, j<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
  <span class="token punctuation">}</span>
  const array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span>, <span class="token number">6</span>, <span class="token number">8</span>, <span class="token number">5</span>, <span class="token number">9</span>, <span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">5</span>, <span class="token number">3</span>, <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  const newArr <span class="token operator">=</span> bucketSort<span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console.log<span class="token punctuation">(</span><span class="token string">&#39;newArr:&#39;</span>, newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基数排序-稳定" tabindex="-1"><a class="header-anchor" href="#基数排序-稳定"><span>基数排序（稳定）</span></a></h2><p>1、将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零 2、从最低位开始，依次进行一次排序 3、从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  <span class="token keyword">function</span> radixSort<span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var max <span class="token operator">=</span> Math.max.apply<span class="token punctuation">(</span><span class="token number">0</span>, array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    var <span class="token builtin class-name">times</span> <span class="token operator">=</span> getLoopTimes<span class="token punctuation">(</span>max<span class="token punctuation">)</span>,
        len <span class="token operator">=</span> array.length<span class="token punctuation">;</span>
    var buckets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> //初始化10个桶
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>var radix <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> radix <span class="token operator">&lt;=</span> <span class="token builtin class-name">times</span><span class="token punctuation">;</span> radix++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        //个位，十位，百位，千位这样循环
        lsdRadixSort<span class="token punctuation">(</span>array, buckets, len, radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token builtin class-name">return</span> array<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  // 根据数字某个位数上的值得到桶的编号
  <span class="token keyword">function</span> getBucketNumer<span class="token punctuation">(</span>num, d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">(</span>num + <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>.reverse<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  // 或者这个
  <span class="token keyword">function</span> getBucketNumer<span class="token punctuation">(</span>num, i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> Math.floor<span class="token variable"><span class="token punctuation">((</span>num <span class="token operator">/</span> Math.pow<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> i<span class="token punctuation">))</span></span> % <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  // 获取数字的位数
  <span class="token keyword">function</span> getLoopTimes<span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var digits <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            digits++<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>num <span class="token operator">=</span> num <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span>
    <span class="token builtin class-name">return</span> digits<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> lsdRadixSort<span class="token punctuation">(</span>array, buckets, len, radix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    //入桶
    <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">let</span> el <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">let</span> index <span class="token operator">=</span> getBucketNumer<span class="token punctuation">(</span>el, radix<span class="token punctuation">)</span><span class="token punctuation">;</span>
        buckets<span class="token punctuation">[</span>index<span class="token punctuation">]</span>.push<span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    var k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    //重写原桶
    <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">let</span> bucket <span class="token operator">=</span> buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>let j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> bucket.length<span class="token punctuation">;</span> j++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>k++<span class="token punctuation">]</span> <span class="token operator">=</span> bucket<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        bucket.length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  // <span class="token builtin class-name">test</span>
  var arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">278</span>, <span class="token number">109</span>, <span class="token number">63</span>, <span class="token number">930</span>, <span class="token number">589</span>, <span class="token number">184</span>, <span class="token number">505</span>, <span class="token number">269</span>, <span class="token number">8</span>, <span class="token number">83</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  console.log<span class="token punctuation">(</span>radixSort<span class="token punctuation">(</span>arr<span class="token punctuation">))</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),c=[o];function l(i,u){return a(),s("div",null,c)}const k=n(e,[["render",l],["__file","基础排序.html.vue"]]),d=JSON.parse('{"path":"/algorithm/%E5%9F%BA%E7%A1%80%E6%8E%92%E5%BA%8F.html","title":"基础排序","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"冒泡排序（稳定）","slug":"冒泡排序-稳定","link":"#冒泡排序-稳定","children":[]},{"level":2,"title":"选择排序（不稳定）","slug":"选择排序-不稳定","link":"#选择排序-不稳定","children":[]},{"level":2,"title":"插入排序（稳定）","slug":"插入排序-稳定","link":"#插入排序-稳定","children":[]},{"level":2,"title":"希尔排序（不稳定）","slug":"希尔排序-不稳定","link":"#希尔排序-不稳定","children":[]},{"level":2,"title":"归并排序（稳定）","slug":"归并排序-稳定","link":"#归并排序-稳定","children":[]},{"level":2,"title":"快速排序（不稳定）","slug":"快速排序-不稳定","link":"#快速排序-不稳定","children":[]},{"level":2,"title":"堆排序（不稳定）","slug":"堆排序-不稳定","link":"#堆排序-不稳定","children":[]},{"level":2,"title":"计数排序（稳定）","slug":"计数排序-稳定","link":"#计数排序-稳定","children":[]},{"level":2,"title":"桶排序（稳定）","slug":"桶排序-稳定","link":"#桶排序-稳定","children":[]},{"level":2,"title":"基数排序（稳定）","slug":"基数排序-稳定","link":"#基数排序-稳定","children":[]}],"git":{"updatedTime":1716273961000,"contributors":[{"name":"wu.hui","email":"wu.hui@qkupower.com","commits":1}]},"filePathRelative":"algorithm/基础排序.md"}');export{k as comp,d as data};

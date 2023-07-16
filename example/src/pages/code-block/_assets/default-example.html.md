---
caption: "Default CodeBlock TypeScript snippet output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```html
<figure
	itemscope
	itemtype="https://schema.org/SoftwareSourceCode"
	class="sb-code-block-figure"
	style="--line-number-width: 1.5ch;"
>
	<figcaption>CodeBlock example TS code</figcaption>
	<pre
		class="astro-code scratchcode-dark"
		style="background-color: #0d1117; overflow-x: auto;"
		tabindex="0"
	>
    <code>
      <span class="line">
        <span style="color: #FF7B72">export</span>
        <span style="color: #FFA657"> </span>
        <span style="color: #FF7B72">default</span>
        <span style="color: #FFA657"> </span>
        <span style="color: #FF7B72">function</span>
        <span style="color: #FFA657"> </span>
        <span style="color: #D2A8FF">compact</span>
        <span style="color: #FFA657">&lt;T&gt;(arr</span>
        <span style="color: #FF7B72">:</span>
        <span style="color: #FFA657"> Array&lt;T&gt;)</span>
        <span style="color: #FF7B72">:</span>
        <span style="color: #FFA657"> Array&lt;T&gt; </span>
        <span style="color: #C9D1D9">{</span>
      </span>
      <span class="line">
        <span style="color: #C9D1D9">  </span>
        <span style="color: #FF7B72">return</span>
        <span style="color: #C9D1D9"> arr.</span>
        <span style="color: #D2A8FF">filter</span>
        <span style="color: #C9D1D9">((</span>
        <span style="color: #FFA657">item</span>
        <span style="color: #C9D1D9">) </span>
        <span style="color: #FF7B72">=&gt;</span>
        <span style="color: #C9D1D9"> item </span>
        <span style="color: #FF7B72">!==</span>
        <span style="color: #C9D1D9"> </span>
        <span style="color: #79C0FF">undefined</span>
        <span style="color: #C9D1D9"> </span>
        <span style="color: #FF7B72">&amp;&amp;</span>
        <span style="color: #C9D1D9"> item </span>
        <span style="color: #FF7B72">!==</span>
        <span style="color: #C9D1D9"> </span>
        <span style="color: #79C0FF">null</span>
        <span style="color: #C9D1D9">)</span>
      </span>
      <span class="line">
        <span style="color: #C9D1D9">}</span>
      </span>
    </code>
    <button class="copy-to-clipboard">copy</button>
  </pre>
</figure>
```

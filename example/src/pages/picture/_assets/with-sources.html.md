---
caption: "Picture with <code>sources</code> output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```html
<span itemscope itemtype="https://schema.org/ImageObject">
	<picture class="sb-picture">
		<source
			media="(min-width: 500px)"
			srcset="
				/images/768/darkness-at-noon.avif  1x,
				/images/1536/darkness-at-noon.avif 2x,
				/images/2034/darkness-at-noon.avif 3x
			"
			type="image/avif"
		/>
		<source
			media="(min-width: 500px)"
			srcset="
				/images/768/darkness-at-noon.webp  1x,
				/images/1536/darkness-at-noon.webp 2x,
				/images/2034/darkness-at-noon.webp 3x
			"
			type="image/webp"
		/>
		<source
			media="(min-width: 500px)"
			srcset="
				/images/768/darkness-at-noon.png  1x,
				/images/1536/darkness-at-noon.png 2x,
				/images/2034/darkness-at-noon.png 3x
			"
			type="image/png"
		/>
		<source
			media="(max-width: 499px)"
			srcset="/images/380/darkness-at-noon.avif 1x"
			type="image/avif"
		/>
		<source
			media="(max-width: 499px)"
			srcset="/images/380/darkness-at-noon.webp 1x"
			type="image/webp"
		/>
		<source
			media="(max-width: 499px)"
			srcset="/images/380/darkness-at-noon.png 1x"
			type="image/png"
		/>
		<img
			alt="Black hole sun"
			decoding="async"
			height="512"
			loading="lazy"
			src="/images/darkness-at-noon.png"
			width="768"
		/>
	</picture>
</span>
```

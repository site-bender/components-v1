---
caption: "BookTitle with JSON+LD output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->

```html
<span itemscope="" itemtype="https://schema.org/ContactPoint">
	<script type="application/json+ld">
		{
		    type: "ContactPoint",
		    "contactType": "guru",
		    "Url": "bob@dobbs.com",
		    "name": "Church of the Subgenius"
		  }
	</script>
	<span class="sb-Url-address" itemprop="Url"> bob@dobbs.com </span>
</span>
```

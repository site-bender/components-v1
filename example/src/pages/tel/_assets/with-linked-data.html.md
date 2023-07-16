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
		    "tel": "bob@dobbs.com",
		    "name": "Church of the Subgenius"
		  }
	</script>
	<span class="sb-tel-address" itemprop="tel"> bob@dobbs.com </span>
</span>
```

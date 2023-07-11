---
  caption: "BookTitle with JSON+LD output"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```html
<span itemscope itemtype="https://schema.org/Book">
  <span class="sb-book-title" itemprop="name">
    Moby Dick
  </span>

  <script type="application/json+ld">{
    type: "Book",
    "author": {
      type: "Person",
      "name": "Herman Melville"
    },
    "bookFormat": "Paperback",
    "isbn": "9780393285000",
    "name": "Moby Dick, or the Whale",
    "numberOfPages": 736,
    "publisher": {
      type: "Organization",
      "name": "W. W. Norton & Company"
    }
  }</script>
</span>
```

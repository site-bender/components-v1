---
  caption: "CodeBlock JavaScript example with microdata"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```jsx
---
import * as exampleJs from "./_assets/example.js.md";
---

<CodeBlock
  properties={{
    codeSampleType: "code snippet",
    programmingLanguage: "JavaScript",
  }}
  snippet={exampleTs}
/>
```

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
````md
---
  caption: "CodeBlock example TS code"
---

```js
export default function not(input) {
  return !input
}
```

<!-- This is ./_assets/example.js.md -->
````

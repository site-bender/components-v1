---
  caption: "Default CodeBlock TypeScript snippet example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```jsx
---
import * as exampleTs from "./_assets/example.ts.md";
---

<CodeBlock snippet={exampleTs} />
```

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
````md
---
  caption: "CodeBlock example TS code"
---

```ts
export default function compact<T>(arr: Array<T>): Array<T> { 
  return arr.filter((item) => item !== undefined && item !== null)
}
```

<!-- This is ./_assets/example.ts.md -->
````

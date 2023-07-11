---
  caption: "CodeBlock TypeScript code snippet example"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
export default function compact<T>(arr: Array<T>): Array<T> {
  return arr.filter((item) => item !== undefined && item !== null)
}
```

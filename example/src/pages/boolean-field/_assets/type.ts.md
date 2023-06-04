---
  caption: "BooleanField props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
export type Dataset = Record<string, string | number | boolean>

export type Props = HTMLAttributes<"input"> & {
  dataset?: Dataset;
  label?: string;
  name: string;
  value?: string;
};
```

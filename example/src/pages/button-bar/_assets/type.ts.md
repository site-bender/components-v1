---
  caption: "BooleanField props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
export type Dataset = Record<string, string | number | boolean>

export type Props = HTMLAttributes<"fieldset"> & {
  dataset?: Dataset;
  label?: string;
};
```

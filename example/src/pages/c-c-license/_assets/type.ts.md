---
  caption: "BooleanField props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
export type Props = HTMLAttributes<"p"> & {
  a?: HTMLAttributes<"a">; // defaults to {}
  dataset?: Dataset;
  fill?: string;           // defaults to "var(--sb-cc-license-fill-color, white)"
  byAttribution?: boolean;
  noDerivatives?: boolean;
  nonCommercial?: boolean;
  shareAlike?: boolean;
  size?: string;           // defaults to "2rem"
  stroke?: string;         // defaults to "var(--sb-cc-license-stroke-color, black)"
};
```

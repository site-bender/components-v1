---
  caption: "Duration props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string | undefined | null;
}

export type Props = HTMLAttributes<"time"> & {
  dataset?: Dataset;
  duration: Temporal.Duration;
};

const { dataset, duration = "PT0S" } = Astro.props;
```

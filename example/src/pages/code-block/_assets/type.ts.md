---
  caption: "BooleanField props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
export type Dataset = Record<string, string | number | boolean>

export type Frontmatter = {
  anchor?: string;
  aria?: string;
  blurb?: string;
  client?: string;
  content?: Array<string>;
  dataset?: Dataset;
  description?: string;
  label?: string;
  layout?: string;
  page?: string;
  publishedOn?: string;
  rel?: string;
  tags?: Array<string>;
  thumbnail?: string;
  title?: string;
};

export type MDXInstance<T> = {
  compiledContent: () => string;
  file: string;
  frontmatter: T;
  publishedOn?: string;
  rawContent: () => string;
  title?: string;
  url: string | undefined;
};

export type Props<T> = {
  caption?: string;
  count?: number;
  cssClasses?: Array<string>;
  dataset?: Dataset | undefined | null;
  figcaptionAttributes?: HTMLAttributes<"figcaption">;
  index?: number;
  isIndexed?: boolean;
  properties?: Partial<SoftwareSourceCode>;
  snippet: MDXInstance<T>;
};
```

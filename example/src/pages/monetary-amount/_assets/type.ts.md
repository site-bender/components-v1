---
  caption: "MonetaryAmount props"
---

<!-- markdownlint-disable MD041 -->
<!-- dprint-ignore -->
```ts
import type { HTMLAttributes } from "astro/types";

export type Dataset = Record<string, string | number | boolean>;

export type NumberStyle = "decimal" | "currency" | "percent" | "unit";

export type NumberFormatOptions = {
  compactDisplay?: "short" | "long";
  currency?: MonetaryAmountCode; // e.g., "CNY", "USD", "RUB", "EUR"
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
  currencySign?: "standard" | "accounting";
  localeMatcher?: "best fit" | "lookup";
  maximumFractionDigits?: number; // 0-20; default is larger of min and 3 for currency
  maximumSignificantDigits?: number; // 1-21; default is 21
  minimumFractionDigits?: number; // 0-20 default is 0 or 2 for currency
  minimumIntegerDigits?: number; // 1-21; default is 1
  minimumSignificantDigits?: number; // 1-21; default is 1
  notation?: "standard" | "scientific" | "engineering" | "compact";
  numberingSystem?: NumberingSystem; // e.g., "arab", "fullwide", "laoo"
  signDisplay?: "auto" | "always" | "exceptZero" | "never";
  style?: NumberStyle;
  unit?: Unit; // e.g., "day" | "foot" | "gram" | "petabyte"
  unitDisplay?: "short" | "long" | "narrow";
};

export type Props = HTMLAttributes<"a"> & {
  dataset?: Dataset;
  href?: string | URL | null | undefined;
  locale?: string;
  options?: NumberFormatOptions;
  useTabularNumerals?: boolean | undefined;
  value?: number | undefined;
};
```

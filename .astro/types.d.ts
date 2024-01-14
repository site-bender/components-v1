declare module "astro:content" {
	interface Render {
		".mdx": Promise<{
			Content: import("astro").MarkdownInstance<{}>["Content"];
			headings: import("astro").MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module "astro:content" {
	interface Render {
		".md": Promise<{
			Content: import("astro").MarkdownInstance<{}>["Content"];
			headings: import("astro").MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module "astro:content" {
	export { z } from "astro/zod";
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import("astro/zod").ZodObject<{
		src: import("astro/zod").ZodString;
		width: import("astro/zod").ZodNumber;
		height: import("astro/zod").ZodNumber;
		format: import("astro/zod").ZodUnion<
			[
				import("astro/zod").ZodLiteral<"png">,
				import("astro/zod").ZodLiteral<"jpg">,
				import("astro/zod").ZodLiteral<"jpeg">,
				import("astro/zod").ZodLiteral<"tiff">,
				import("astro/zod").ZodLiteral<"webp">,
				import("astro/zod").ZodLiteral<"gif">,
				import("astro/zod").ZodLiteral<"svg">,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import("astro/zod").AnyZodObject
		| import("astro/zod").ZodUnion<import("astro/zod").AnyZodObject[]>
		| import("astro/zod").ZodDiscriminatedUnion<
				string,
				import("astro/zod").AnyZodObject[]
		  >
		| import("astro/zod").ZodIntersection<
				import("astro/zod").AnyZodObject,
				import("astro/zod").AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import("astro/zod").ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>,
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<
		(typeof entryMap)[C]
	>["slug"];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends CollectionEntry<C>,
	>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> =
		import("astro/zod").infer<
			ReturnTypeOrOriginal<Required<ContentConfig["collections"][C]>["schema"]>
		>;

	const entryMap: {
		snippets: {
			"css/flex-nav.md": {
				id: "css/flex-nav.md";
				slug: "css/flex-nav";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/header-flex.md": {
				id: "css/header-flex.md";
				slug: "css/header-flex";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/headings.md": {
				id: "css/headings.md";
				slug: "css/headings";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/main-and-footer.md": {
				id: "css/main-and-footer.md";
				slug: "css/main-and-footer";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/off-screen.md": {
				id: "css/off-screen.md";
				slug: "css/off-screen";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/responsive-first-pass.md": {
				id: "css/responsive-first-pass.md";
				slug: "css/responsive-first-pass";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/sidebar-grid.md": {
				id: "css/sidebar-grid.md";
				slug: "css/sidebar-grid";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/skip-link.md": {
				id: "css/skip-link.md";
				slug: "css/skip-link";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"css/supports.md": {
				id: "css/supports.md";
				slug: "css/supports";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/anchor.md": {
				id: "html/anchor.md";
				slug: "html/anchor";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/basic-style.md": {
				id: "html/basic-style.md";
				slug: "html/basic-style";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/main-nav-h2.md": {
				id: "html/main-nav-h2.md";
				slug: "html/main-nav-h2";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/responsive-body.md": {
				id: "html/responsive-body.md";
				slug: "html/responsive-body";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/responsive-head.md": {
				id: "html/responsive-head.md";
				slug: "html/responsive-head";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/responsive.md": {
				id: "html/responsive.md";
				slug: "html/responsive";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/skip-link.md": {
				id: "html/skip-link.md";
				slug: "html/skip-link";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"html/spaced-nav-links.md": {
				id: "html/spaced-nav-links.md";
				slug: "html/spaced-nav-links";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"idris/app-function.md": {
				id: "idris/app-function.md";
				slug: "idris/app-function";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"idris/reverse-type.md": {
				id: "idris/reverse-type.md";
				slug: "idris/reverse-type";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/app-function.md": {
				id: "ts/app-function.md";
				slug: "ts/app-function";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/concat-fail.md": {
				id: "ts/concat-fail.md";
				slug: "ts/concat-fail";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/concat-with-type.md": {
				id: "ts/concat-with-type.md";
				slug: "ts/concat-with-type";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/constraint.md": {
				id: "ts/constraint.md";
				slug: "ts/constraint";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/curried-min-max.md": {
				id: "ts/curried-min-max.md";
				slug: "ts/curried-min-max";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/desideratum.md": {
				id: "ts/desideratum.md";
				slug: "ts/desideratum";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/divide-assertion.md": {
				id: "ts/divide-assertion.md";
				slug: "ts/divide-assertion";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/divide-function.md": {
				id: "ts/divide-function.md";
				slug: "ts/divide-function";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/euclidean-distance.md": {
				id: "ts/euclidean-distance.md";
				slug: "ts/euclidean-distance";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/get-component.md": {
				id: "ts/get-component.md";
				slug: "ts/get-component";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/haskell-style.md": {
				id: "ts/haskell-style.md";
				slug: "ts/haskell-style";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/import-from-app-app.md": {
				id: "ts/import-from-app-app.md";
				slug: "ts/import-from-app-app";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/import-from-app.md": {
				id: "ts/import-from-app.md";
				slug: "ts/import-from-app";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/istanbul-ignore-next.md": {
				id: "ts/istanbul-ignore-next.md";
				slug: "ts/istanbul-ignore-next";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/make-and.md": {
				id: "ts/make-and.md";
				slug: "ts/make-and";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/no-ints.md": {
				id: "ts/no-ints.md";
				slug: "ts/no-ints";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/pattern-match.md": {
				id: "ts/pattern-match.md";
				slug: "ts/pattern-match";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/phantom-type.md": {
				id: "ts/phantom-type.md";
				slug: "ts/phantom-type";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/pick.md": {
				id: "ts/pick.md";
				slug: "ts/pick";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/render-a-element.md": {
				id: "ts/render-a-element.md";
				slug: "ts/render-a-element";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/render.md": {
				id: "ts/render.md";
				slug: "ts/render";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/reverse-type.md": {
				id: "ts/reverse-type.md";
				slug: "ts/reverse-type";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/string-by-pattern.md": {
				id: "ts/string-by-pattern.md";
				slug: "ts/string-by-pattern";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/string-of-length.md": {
				id: "ts/string-of-length.md";
				slug: "ts/string-of-length";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/typeof-infinity.md": {
				id: "ts/typeof-infinity.md";
				slug: "ts/typeof-infinity";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/union-type-retrieved.md": {
				id: "ts/union-type-retrieved.md";
				slug: "ts/union-type-retrieved";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"ts/union-type.md": {
				id: "ts/union-type.md";
				slug: "ts/union-type";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
			"txt/app-hierarchy.md": {
				id: "txt/app-hierarchy.md";
				slug: "txt/app-hierarchy";
				body: string;
				collection: "snippets";
				data: any;
			} & { render(): Render[".md"] };
		};
	};

	type ContentConfig = never;
}

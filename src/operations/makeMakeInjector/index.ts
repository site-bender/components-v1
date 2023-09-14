import type { InjectValueOperation, Injector } from "../../types/operations"

import type { Store } from "solid-js/store"
import type { StoreConfig } from "../"
import type { TypeOfSource } from "../../types/enums"
import type { EmptyValue } from "../../types/values"
import getFromLocalStorage from "./getFromLocalStorage"
import getFromQueryString from "./getFromQueryString"
import getFromSessionStorage from "./getFromSessionStorage"
import getFromState from "./getFromState"
import getFromUrlParams from "./getFromUrlParams"

export default function makeMakeInjector(store: Store<StoreConfig>) {
	return function injectValue(operation: InjectValueOperation): Injector {
		switch (operation.sourceType) {
			case TypeOfSource.STATE:
				return getFromState(operation, store)
			// case TypeOfSource.FETCH:
			// 	return getFromFetch(operation)
			case TypeOfSource.LOCAL_STORAGE:
				return getFromLocalStorage(operation)
			case TypeOfSource.SESSION_STORAGE:
				return getFromSessionStorage(operation)
			case TypeOfSource.QUERY_STRING:
				return getFromQueryString(operation)
			case TypeOfSource.URL_PARAMS:
				return getFromUrlParams(operation)
			// case TypeOfSource.COOKIE_STORAGE:
			// 	return getFromCookieStorage(operation)
			default:
				return () => ({}) as EmptyValue
		}
	}
}

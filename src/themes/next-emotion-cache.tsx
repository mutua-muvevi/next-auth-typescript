"use client";

import * as React from "react";
import PropTypes from "prop-types";
import createCache, {
	EmotionCache,
	Options as CacheOptions,
} from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider as DefaultCacheProvider } from "@emotion/react";

interface NextAppDirEmotionCacheProviderProps {
	options?: CacheOptions;
	CacheProvider?: typeof DefaultCacheProvider;
	children: React.ReactNode;
}

interface Registry {
	cache: EmotionCache;
	flush: () => { name: string; isGlobal: boolean }[];
}

export default function NextAppDirEmotionCacheProvider(
	props: NextAppDirEmotionCacheProviderProps
) {
	const { options, CacheProvider = DefaultCacheProvider, children } = props;

	const [registry] = React.useState<Registry>(() => {
		const cache = createCache(options);
		cache.compat = true;
		const prevInsert = cache.insert;
		let inserted: { name: string; isGlobal: boolean }[] = [];
		cache.insert = (...args: Parameters<typeof prevInsert>) => {
			const [selector, serialized] = args;
			if (cache.inserted[serialized.name] === undefined) {
				inserted.push({
					name: serialized.name,
					isGlobal: !selector,
				});
			}
			return prevInsert(...args);
		};
		const flush = () => {
			const prevInserted = inserted;
			inserted = [];
			return prevInserted;
		};
		return { cache, flush };
	});

	useServerInsertedHTML(() => {
		const inserted = registry.flush();
		if (inserted.length === 0) {
			return null;
		}
		let styles = "";
		let dataEmotionAttribute = registry.cache.key;

		const globals: { name: string; style: string }[] = [];

		inserted.forEach(({ name, isGlobal }) => {
			const style = registry.cache.inserted[name];

			if (typeof style !== "boolean") {
				if (isGlobal) {
					globals.push({ name, style });
				} else {
					styles += style;
					dataEmotionAttribute += ` ${name}`;
				}
			}
		});

		return (
			<>
				{globals.map(({ name, style }) => (
					<style
						key={name}
						data-emotion={`${registry.cache.key}-global ${name}`}
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: style }}
					/>
				))}
				{styles && (
					<style
						data-emotion={dataEmotionAttribute}
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: styles }}
					/>
				)}
			</>
		);
	});

	return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}

NextAppDirEmotionCacheProvider.propTypes = {
	CacheProvider: PropTypes.element,
	children: PropTypes.node,
	options: PropTypes.object,
};

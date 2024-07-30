import { useRef, useCallback } from "react";

// ----------------------------------------------------------------------

interface UseDoubleClickProps {
	click?: any;
	doubleClick?: any;
	timeout?: number;
	// click?: (event: any) => void;
	// doubleClick?: (event: any) => void;
}

export function useDoubleClick({ click, doubleClick, timeout = 250 } : UseDoubleClickProps) {
	const clickTimeout = useRef();

	const clearClickTimeout = () => {
		if (clickTimeout) {
			clearTimeout(clickTimeout.current);
			clickTimeout.current = null;
		}
	};

	return useCallback(
		(event : any) => {
			clearClickTimeout();
			if (click && event.detail === 1) {
				clickTimeout.current = setTimeout(() => {
					click(event);
				}, timeout);
			}
			if (event.detail % 2 === 0) {
				doubleClick(event);
			}
		},
		[click, doubleClick, timeout]
	);
}

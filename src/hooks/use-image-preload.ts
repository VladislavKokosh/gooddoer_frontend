import { useEffect, useState } from "react";

const useImagePreload = (src: string) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.src = src;

		const handleLoad = () => {
			setImageLoaded(true);
		};

		image.addEventListener("load", handleLoad);
		return () => image.removeEventListener("load", handleLoad);
	}, [src]);

	return imageLoaded;
};

export { useImagePreload };

import { useLocalStorage } from "usehooks-ts";

interface IPhotoView {
	photoId: string;
	views: number;
}
export const usePhotoViewStorage = (key: string): [IPhotoView, () => void] => {
	const [views, setViews] = useLocalStorage<IPhotoView[]>("client", []);

	const increaseViews = () => {
		if (views.length) {
			const currentKeyViews = views.filter((v) => v.photoId === key);
			if (currentKeyViews.length) {
				setViews(
					views.map((v) => {
						return v.photoId === key ? { ...v, views: +v.views + 1 } : v;
					})
				);
			} else {
				setViews([...views, { photoId: key, views: 1 }]);
			}
		} else {
			setViews([{ photoId: key, views: 1 }]);
		}
	};

	const photo_views = views.find((v) => +v.photoId === +key)!;

	return [photo_views, increaseViews];
};

import { PhotoInterface } from "../../utils/types";
import { usePhotoViewStorage } from "../../lib/hooks";
import Modal from "../Modal";
import "./styles.css";

interface IProps {
	photo: PhotoInterface;
}
function Thumb({ photo }: IProps) {
	const [, increaseViews] = usePhotoViewStorage(photo.id);

	return (
		<div className="photo-content">
			<Modal
				target={
					<img src={photo.thumbnailUrl} className="thumb" alt="photo_thumb" />
				}
				updateViews={increaseViews}
			>
				<img src={photo.url} height={500} alt="photo_url" />
			</Modal>
		</div>
	);
}

export default Thumb;

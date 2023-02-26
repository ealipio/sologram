import { useNavigate } from 'react-router-dom';

import {
  VERTICAL_IMG,
  PLACEHOLDER_IMG,
  HORIZONTAL_IMG,
} from '../constants/routes';

import ImageCard from './ImageCard';
import ImageFilters from './ImageFilters';

export interface IAddPostProps {}

export function AddPost(props: IAddPostProps) {
  const navigate = useNavigate();
  const handlePostNow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // https://i.bb.co/f1VvzJQ/solarpunk-1.jpg
    // save image and properties (filter applied)
    // show a message that item was saved
    // redirect to timeline
    // @todo: filter component, square 1:1 aspect ratio for image preview
    navigate('/timeline');
  };
  return (
    <div className="flex flex-col content-center mt-14 mb-16">
      <div className="w-full text-gray-400 mt-4 text-center text-xs font-bold">
        Enter an image URL
      </div>

      <div className="w-full p-4">
        <input
          className="p-2 border w-full font-bold"
          type="text"
          placeholder={PLACEHOLDER_IMG}
          name="imageURL"
        />
      </div>

      <ImageCard imageSrc={HORIZONTAL_IMG} />

      <div className="w-full text-sky-600 mt-4 text-center text-xs font-bold">
        Give it a Name
      </div>

      <div className="w-full p-4 mb-4">
        <input
          className="p-2 border w-full font-bold"
          type="text"
          name="imageURL"
        />
      </div>

      <ImageFilters imageSrc={HORIZONTAL_IMG} />

      <div className="w-full mx-auto  p-2">
        <button
          onClick={handlePostNow}
          className="bg-black text-white p-4 w-full rounded"
        >
          Post now!
        </button>
      </div>
    </div>
  );
}

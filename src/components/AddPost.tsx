import { useNavigate } from 'react-router-dom';

import {
  VERTICAL_IMG,
  PLACEHOLDER_IMG,
  HORIZONTAL_IMG,
} from '../constants/routes';

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

      <div className="sm:w-1/4 bg-black flex justify-center items-center w-full">
        <img
          className="bg-contain object-scale-down aspect-[1/1]"
          src={VERTICAL_IMG}
        />
      </div>

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

      <div className="relative overflow-auto w-full mb-10 bg-slate-200">
        <div className="flex flex-row gap-2 flex-nowrap">
          <div className="w-2/5 h-48 flex-none">
            <div className="font-bold uppercase">Normal</div>
            <div className="bg-black">
              <img
                className="bg-contain object-scale-down aspect-[1/1]"
                src={VERTICAL_IMG}
              />
            </div>
          </div>
          <div className="w-2/5 h-48 flex-none">
            <div className="font-bold uppercase">armageddon</div>
            <div className="bg-black">
              <img
                className="bg-contain object-scale-down aspect-[1/1] hue-rotate-90"
                src={VERTICAL_IMG}
              />
            </div>
          </div>
          <div className="w-2/5 h-48 flex-none">
            <div className="font-bold uppercase">sepia</div>
            <div className="bg-black">
              <img
                className="bg-contain object-scale-down aspect-[1/1] sepia"
                src={VERTICAL_IMG}
              />
            </div>
          </div>
          <div className="w-2/5 h-48 flex-none">
            <div className="font-bold uppercase">b/n</div>
            <div className="bg-black">
              <img
                className="bg-contain object-scale-down aspect-[1/1] grayscale"
                src={VERTICAL_IMG}
              />
            </div>
          </div>
          <div className="w-2/5 h-48 flex-none">
            <div className="font-bold uppercase">tokio</div>
            <div className="bg-black">
              <img
                className="bg-contain object-scale-down aspect-[1/1] brightness-100 saturate-50"
                src={VERTICAL_IMG}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-green-400 p-4">
        <button
          onClick={handlePostNow}
          className="bg-black text-white p-4 w-full rounded"
        >
          Post now
        </button>
      </div>
    </div>
  );
}

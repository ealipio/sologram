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

      <div className="relative overflow-auto w-full">
        <div className="flex flex-row gap-2 flex-nowrap">
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 1</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 2</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 3</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 4</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 5</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 6</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 7</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 8</div>
          <div className="w-2/5 flex-none h-32 bg-slate-400"> filter 9</div>
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

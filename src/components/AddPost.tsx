import { useNavigate } from 'react-router-dom';

export interface IAddPostProps {}

export function AddPost(props: IAddPostProps) {
  const navigate = useNavigate();
  const handlePostNow = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // save image and properties (filter applied)
    // show a message that item was saved
    // redirect to timeline
    navigate('/timeline');
  };
  return (
    <div className="flex flex-col content-center bg-yellow-400">
      <div className="w-full">
        <p className="text-gray-400">Enter an image URL</p>
      </div>

      <div className="w-full p-4">
        <input className="w-full" type="text" name="imageURL" />
      </div>

      <div className="w-full bg-sky-500">
        <div className="h-32">preview component</div>
      </div>

      <div>
        <label htmlFor="title">Give it a name:</label>
      </div>

      <div className="w-full mx-auto p-4 bg-green-400">
        <input type="text" id="title" className="m-2 w-full" />
      </div>

      <div className="w-full bg-pink-400">
        <div className="h-32">image filter component</div>
      </div>

      <div className="w-full mx-auto bg-gray-400 p-4">
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

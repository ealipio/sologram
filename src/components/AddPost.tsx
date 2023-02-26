import { useNavigate } from 'react-router-dom';

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
          placeholder="https://i.bb.co/f1VvzJQ/solarpunk-1.jpg"
          name="imageURL"
        />
      </div>

      <div className="w-full bg-black p-2">
        <img
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>

      <div className="w-full text-sky-600 mt-4 text-center text-xs font-bold">
        Give it a Name
      </div>

      <div className="w-full p-4 bg-green-400 mb-4">
        <input
          className="p-2 border w-full font-bold"
          type="text"
          name="imageURL"
        />
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

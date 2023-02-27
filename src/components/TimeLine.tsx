import ImageCard from './ImageCard';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useImageStore } from '../store/imageStore';

export interface IHeaderProps {}

export function TimeLine(props: IHeaderProps) {
  const posts = useImageStore((state) => state.posts);

  const PostsList = posts.map((post, i) => {
    return (
      <div className="mt-4 relative" key={i}>
        <div className="text-sm font-bold ml-1">{post.title}</div>
        <div className="text-xs text-gray-400 font-semibold mb-2 ml-1">
          {post.date.toDateString()}
        </div>
        <ImageCard imageSrc={post.imageURL} />
        <div className="cursor-pointer absolute right-2 bottom-2">
          <HeartIcon className="text-red-600 -my-10 h-8 w-8 " />
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-100 h-auto grid grid-cols-1 mt-14 mb-16">
      {PostsList}
    </div>
  );
}

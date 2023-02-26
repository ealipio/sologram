import ImageCard from './ImageCard';
import { HeartIcon } from '@heroicons/react/24/solid';
import { GENERIC_IMG, HORIZONTAL_IMG, VERTICAL_IMG } from '../constants/routes';

export interface IHeaderProps {}

export function TimeLine(props: IHeaderProps) {
  const posts = [
    {
      title: 'Solarpunk dream',
      date: 'Posted just now',
      src: HORIZONTAL_IMG,
      like: false,
    },
    {
      title: 'Solarpunk dream',
      date: 'Posted just now',
      src: VERTICAL_IMG,
      like: false,
    },
    {
      title: 'Solarpunk dream',
      date: 'Posted just now',
      src: GENERIC_IMG,
      like: false,
    },
    {
      title: 'Solarpunk dream',
      date: 'Posted just now',
      src: VERTICAL_IMG,
      like: false,
    },
  ];

  const PostsList = posts.map((post, i) => {
    return (
      <div className="mt-4 relative" key={i}>
        <div className="text-sm font-bold ml-1">{post.title}</div>
        <div className="text-xs text-gray-400 font-semibold mb-2 ml-1">
          {post.date}
        </div>
        <ImageCard imageSrc={post.src} />
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

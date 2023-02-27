import * as React from 'react';
import ImageCard from './ImageCard';
import { HeartIcon } from '@heroicons/react/24/solid';
import { IPost } from '../store/imageStore';
import { useImageStore } from '../store/imageStore';

interface IPostsProps {
  posts: IPost[];
}

const Posts: React.FunctionComponent<IPostsProps> = ({ posts }) => {
  const likePost = useImageStore((state) => state.likePost);

  const list = posts.map((post: IPost) => {
    return (
      <div className="mt-4 relative" key={post.id}>
        <div className="text-sm font-bold ml-1">{post.title}</div>
        <div className="text-xs text-gray-400 font-semibold mb-2 ml-1">
          {post.date.toDateString()}
        </div>
        <ImageCard
          imageSrc={post.imageURL}
          filterClassName={post.filter}
          post={post}
        />
        <div
          className="cursor-pointer absolute right-2 bottom-4"
          onClick={() => {
            likePost(post);
          }}
        >
          <HeartIcon
            className={`h-8 w-8 ${
              post.liked ? 'text-red-600' : 'text-gray-100'
            }`}
          />
        </div>
      </div>
    );
  });

  return <>{list}</>;
};

export default Posts;

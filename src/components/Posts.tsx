import React, { useCallback, useRef } from 'react';
import * as timeago from 'timeago.js';
import { HeartIcon } from '@heroicons/react/24/solid';

import ImageCard from './ImageCard';
import { IPost } from '../store/imageStore';
import { useImageStore } from '../store/imageStore';
import { grabTwoByTwo } from '../utils/array';

interface IPostsProps {}

export const Posts: React.FunctionComponent<IPostsProps> = () => {
  const likePost = useImageStore((state) => state.likePost);
  const posts = useImageStore((state) => state.posts);
  const [hasMore, setHasMore] = React.useState<boolean>(posts.length > 0);

  const [counter, setCounter] = React.useState<number>(2);
  const [postsToRender, setPostToRender] = React.useState(grabTwoByTwo(posts));

  // infinite scroll implementation
  const observer = useRef<null | IntersectionObserver>();
  const lastItemRef = useCallback(
    (node: SVGSVGElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (hasMore) {
            setCounter((prev) => prev + 2);
            const toRender = grabTwoByTwo(posts, counter + 2);
            setPostToRender(toRender);
            const hasMore__ = posts.length > toRender.length;
            setHasMore(hasMore__);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, counter]
  );

  const list = postsToRender.map((post: IPost, index) => {
    return (
      <div className="mt-4 relative" key={post.id}>
        <div className="text-sm font-bold ml-1">{post.title}</div>
        <div className="text-xs text-gray-400 font-semibold mb-2 ml-1">
          {timeago.format(new Date(post.date))}
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
          {postsToRender.length !== index + 1 && (
            <HeartIcon
              className={`h-8 w-8 ${
                post.liked ? 'text-red-600' : 'text-gray-100'
              }`}
            />
          )}

          {postsToRender.length === index + 1 && (
            <HeartIcon
              ref={lastItemRef}
              className={`h-8 w-8 ${
                post.liked ? 'text-red-600' : 'text-gray-100'
              }`}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-100 grid grid-cols-1 mt-14 mb-16">
      {posts.length
        ? list
        : 'No Posts available yet, add a new one in the add section'}
    </div>
  );
};

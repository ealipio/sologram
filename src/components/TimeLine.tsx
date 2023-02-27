import ImageCard from './ImageCard';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useImageStore, IPost } from '../store/imageStore';

export function TimeLine() {
  const posts = useImageStore((state) => state.posts);
  const likePost = useImageStore((state) => state.likePost);

  const handleLikePost = (post: IPost) => {
    likePost(post);
  };
  const PostsList = posts.map((post) => {
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
            handleLikePost(post);
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

  return (
    <div className="bg-gray-100 h-auto grid grid-cols-1 mt-14 mb-16">
      {PostsList}
    </div>
  );
}

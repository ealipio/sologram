import Posts from './Posts';
import { useImageStore } from '../store/imageStore';

export function TimeLine() {
  const posts = useImageStore((state) => state.posts);

  return (
    <div className="bg-gray-100 h-auto grid grid-cols-1 mt-14 mb-16">
      {posts.length ? (
        <Posts posts={posts} />
      ) : (
        'No Posts available yet, add a new one in the add section'
      )}
    </div>
  );
}

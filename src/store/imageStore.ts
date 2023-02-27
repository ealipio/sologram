import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IPost {
  title: string;
  imageURL: string;
  date: Date;
  liked: boolean;
  filter: string;
  id: number;
}

interface ImageStore {
  posts: IPost[];
  likePost: (post: IPost) => void;
  addPost: (post: IPost) => void;
}

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      posts: [],
      likePost: (post: IPost) =>
        set((prevState) => {
          const updatedPosts = prevState.posts.map((prevPost) => {
            if (prevPost.id === post.id) {
              return { ...prevPost, liked: !prevPost.liked };
            }
            return prevPost;
          });
          return { posts: updatedPosts };
        }),
      addPost: (newPost: IPost) =>
        set((prevState) => ({ posts: [...prevState.posts, newPost] })),
    }),
    {
      name: 'sologram',
    }
  )
);

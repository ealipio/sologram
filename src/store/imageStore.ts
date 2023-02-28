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
        set((currentState) => {
          const updatedPosts = currentState.posts.map((prevPost) => {
            if (prevPost.id === post.id) {
              return { ...prevPost, liked: !prevPost.liked };
            }
            return prevPost;
          });
          return { posts: updatedPosts };
        }),
      addPost: (newPost: IPost) =>
        set((currentState) => ({ posts: [...currentState.posts, newPost] })),
    }),
    {
      name: 'sologram',
    }
  )
);

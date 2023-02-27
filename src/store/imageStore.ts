import { create } from 'zustand';
import { GENERIC_IMG, HORIZONTAL_IMG, VERTICAL_IMG } from '../constants/routes';

export interface IPost {
  title: string;
  imageURL: string;
  date: Date;
  liked: boolean;
  filter?: string;
  id: number;
}

interface ImageStore {
  posts: IPost[];
  likePost: (post: IPost) => void;
  addImage: (post: IPost) => void;
}

const posts = [
  {
    id: 1,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: HORIZONTAL_IMG,
    liked: true,
  },
  {
    id: 2,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: VERTICAL_IMG,
    liked: true,
  },
  {
    id: 3,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: GENERIC_IMG,
    liked: false,
  },
  {
    id: 4,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: VERTICAL_IMG,
    liked: false,
  },
];

export const useImageStore = create<ImageStore>((set) => ({
  posts: posts,
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
  addImage: (newPost: IPost) =>
    set((prevState) => ({ posts: [...prevState.posts, newPost] })),
}));

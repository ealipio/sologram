import { create } from 'zustand';
import {
  GENERIC_IMG,
  HORIZONTAL_IMG,
  VERTICAL_IMG,
} from '../constants/messages';

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

const posts = [
  {
    id: 1,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: HORIZONTAL_IMG,
    filter: 'grayscale',
    liked: true,
  },
  {
    id: 2,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: VERTICAL_IMG,
    filter: 'sepia',
    liked: true,
  },
  {
    id: 3,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: GENERIC_IMG,
    filter: 'hue-rotate-90',
    liked: false,
  },
  {
    id: 4,
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: VERTICAL_IMG,
    filter: 'brightness-100 saturate-50',
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
  addPost: (newPost: IPost) =>
    set((prevState) => ({ posts: [...prevState.posts, newPost] })),
}));

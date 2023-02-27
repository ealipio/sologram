import { create } from 'zustand';
import { GENERIC_IMG, HORIZONTAL_IMG, VERTICAL_IMG } from '../constants/routes';

interface ImageItem {
  title: string;
  imageURL: string;
  date: Date;
  like: boolean;
  filter?: string;
}

interface ImageStore {
  posts: ImageItem[];
}

const posts = [
  {
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: HORIZONTAL_IMG,
    like: false,
  },
  {
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: VERTICAL_IMG,
    like: false,
  },
  {
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: GENERIC_IMG,
    like: false,
  },
  {
    title: 'Solarpunk dream',
    date: new Date(),
    imageURL: VERTICAL_IMG,
    like: false,
  },
];

export const useImageStore = create<ImageStore>((set) => ({
  posts: posts,
  addImage: (newImage: ImageItem) =>
    set((prevState) => ({ posts: [...prevState.posts, newImage] })),
}));

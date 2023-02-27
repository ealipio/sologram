import { IPost } from '../store/imageStore';

export const grabTwoByTwo = (array: IPost[], step: number = 2) => {
  return array.slice(0, step);
};

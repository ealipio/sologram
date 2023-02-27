import { useRef } from 'react';
import { IPost, useImageStore } from '../store/imageStore';

export function useLikeInDoubleTap() {
  const likePost = useImageStore((state) => state.likePost);
  const timer = useRef<number | null>(null);
  const threshold = 300;

  type clickType = React.MouseEvent<HTMLDivElement, MouseEvent>;

  const handler = (data: IPost) => (event: clickType) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        timer.current = null;
      }, threshold);
    } else {
      clearTimeout(timer.current);
      timer.current = null;
      // like post when double click image card
      likePost(data);
    }
  };

  return handler;
}

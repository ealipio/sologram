import React from 'react';
import { IPost } from '../store/imageStore';
import { useLikeInDoubleTap } from '../hooks/useLikeInDoubleTap';
interface IImageCardProps {
  imageSrc: string;
  post?: IPost;
  filterClassName: string;
}

const ImageCard: React.FC<IImageCardProps> = ({
  imageSrc,
  filterClassName = '',
  post,
}) => {
  const handleDoubleTapOnCard = useLikeInDoubleTap();

  return (
    <div
      className={`w-full bg-black flex justify-center items-center ${filterClassName}`}
      onClick={post ? handleDoubleTapOnCard(post) : () => {}}
    >
      <img
        className="bg-contain object-scale-down aspect-[1/1]"
        loading="lazy"
        src={imageSrc}
      />
    </div>
  );
};

export default ImageCard;

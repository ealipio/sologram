import * as React from 'react';

interface IImageCardProps {
  imageSrc: string;
}

const ImageCard: React.FunctionComponent<IImageCardProps> = ({ imageSrc }) => {
  return (
    <div className="sm:w-1/4 bg-black flex justify-center items-center w-full">
      <img
        className="bg-contain object-scale-down aspect-[1/1]"
        src={imageSrc}
      />
    </div>
  );
};

export default ImageCard;

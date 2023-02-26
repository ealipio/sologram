import * as React from 'react';

interface IImageFiltersProps {
  imageSrc: string;
}

const ImageFilters: React.FunctionComponent<IImageFiltersProps> = ({
  imageSrc,
}) => {
  return (
    <div className="relative overflow-auto w-full mb-1">
      <div className="flex flex-row gap-2 flex-nowrap">
        <div className="w-2/5 h-48 flex-none">
          <div className="font-bold uppercase">Normal</div>
          <div className="bg-black">
            <img
              className="bg-contain object-scale-down aspect-[1/1]"
              src={imageSrc}
            />
          </div>
        </div>
        <div className="w-2/5 h-48 flex-none">
          <div className="font-bold uppercase">armageddon</div>
          <div className="bg-black">
            <img
              className="bg-contain object-scale-down aspect-[1/1] hue-rotate-90"
              src={imageSrc}
            />
          </div>
        </div>
        <div className="w-2/5 h-48 flex-none">
          <div className="font-bold uppercase">sepia</div>
          <div className="bg-black">
            <img
              className="bg-contain object-scale-down aspect-[1/1] sepia"
              src={imageSrc}
            />
          </div>
        </div>
        <div className="w-2/5 h-48 flex-none">
          <div className="font-bold uppercase">b/n</div>
          <div className="bg-black">
            <img
              className="bg-contain object-scale-down aspect-[1/1] grayscale"
              src={imageSrc}
            />
          </div>
        </div>
        <div className="w-2/5 h-48 flex-none">
          <div className="font-bold uppercase">tokio</div>
          <div className="bg-black">
            <img
              className="bg-contain object-scale-down aspect-[1/1] brightness-100 saturate-50"
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFilters;

import * as React from 'react';

interface IImageFiltersProps {
  imageSrc: string;
}

interface IFilter {
  name: string;
  className: string;
}
interface IFilteredItemProp {
  imageSrc: string;
  filter: IFilter;
}

const FilteredItem: React.FC<IFilteredItemProp> = ({ imageSrc, filter }) => {
  return (
    <div className="w-2/5 h-48 flex-none">
      <div className="font-bold uppercase">{filter.name}</div>
      <div className="bg-black">
        <img
          className={`bg-contain object-scale-down aspect-[1/1] ${filter.className}`}
          src={imageSrc}
        />
      </div>
    </div>
  );
};

const ImageFilters: React.FunctionComponent<IImageFiltersProps> = ({
  imageSrc,
}) => {
  const filters: IFilter[] = [
    { name: 'normal', className: '' },
    { name: 'armageddon', className: 'hue-rotate-90' },
    { name: 'sepia', className: 'sepia' },
    { name: 'sepia', className: 'sepia' },
    { name: 'b/n', className: 'grayscale' },
    { name: 'tokio', className: 'brightness-100 saturate-50' },
  ];

  return (
    <div className="relative overflow-auto w-full mb-1">
      <div className="flex flex-row gap-2 flex-nowrap">
        {filters.map((filter, index) => (
          <FilteredItem key={index} filter={filter} imageSrc={imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default ImageFilters;

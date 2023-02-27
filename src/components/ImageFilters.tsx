import * as React from 'react';

interface IImageFiltersProps {
  imageSrc: string;
  onFilterSelected: (filterClassName: string) => void;
}

interface IFilter {
  name: string;
  className: string;
}
interface IFilteredItemProp {
  imageSrc: string;
  filter: IFilter;
  onFilterSelected: (filterClassName: string) => void;
}

const FilteredItem: React.FC<IFilteredItemProp> = ({
  imageSrc,
  filter,
  onFilterSelected,
}) => {
  const handleClick = (filter: IFilter) => () => {
    onFilterSelected(filter.className);
  };
  return (
    <div className="w-2/5 h-48 flex-none">
      <div className="font-bold uppercase">{filter.name}</div>
      <div className="bg-black" onClick={handleClick(filter)}>
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
  onFilterSelected,
}) => {
  const filters: IFilter[] = [
    { name: 'normal', className: '' },
    { name: 'armageddon', className: 'hue-rotate-90' },
    { name: 'sepia', className: 'sepia' },
    { name: 'b/n', className: 'grayscale' },
    { name: 'tokio', className: 'brightness-100 saturate-50' },
  ];

  return (
    <div className="relative overflow-auto w-full mb-1">
      <div className="flex flex-row gap-2 flex-nowrap">
        {filters.map((filter, index) => (
          <FilteredItem
            key={index}
            filter={filter}
            imageSrc={imageSrc}
            onFilterSelected={onFilterSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageFilters;

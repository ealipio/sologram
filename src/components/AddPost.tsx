import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useImageStore } from '../store/imageStore';

import { IMAGE_ERROR, PLACEHOLDER_IMG, TIME_LINE } from '../constants/messages';

import ImageCard from './ImageCard';
import ImageFilters from './ImageFilters';
import { isValidUrl } from '../utils/url';

export interface IAddPostProps {}

interface IFormData {
  title: string;
  filterClassName: string;
}
const DEFAULT_DATA = {
  title: '',
  imageURL: '',
  filterClassName: '',
};
export function AddPost(props: IAddPostProps) {
  const [formData, setFormData] = useState<IFormData>(DEFAULT_DATA);
  const [filterClassName, setFilterClassName] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const addPost = useImageStore((state) => state.addPost);

  const { title } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = () => {
      const img = new Image();
      img.onload = () => setImageURL(imageURL);
      img.onerror = () => setImageURL(IMAGE_ERROR);
      img.src = imageURL;
    };
    if (imageURL && isValidUrl(imageURL)) {
      fetchImage();
    }
  }, [imageURL]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date();
    const dataToSave = {
      ...formData,
      imageURL,
      filter: filterClassName,
      date,
      id: date.getTime(),
      liked: false,
    };
    addPost(dataToSave);
    //@todo: show a message that item was saved
    // restart data
    setFormData(DEFAULT_DATA);
    setImageURL(DEFAULT_DATA.imageURL);
    navigate(`/${TIME_LINE}`);
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFilterSelected = (filterClassName: string) => {
    setFilterClassName(filterClassName);
  };

  return (
    <div className="flex flex-col content-center mt-14 mb-16">
      <form onSubmit={onSubmit}>
        <div className="w-full text-gray-400 mt-4 text-center text-xs font-bold">
          Enter an image URL
        </div>

        <div className="w-full p-4">
          <input
            className="p-2 border w-full font-bold"
            type="text"
            placeholder={PLACEHOLDER_IMG}
            name="imageURL"
            onChange={onChangeImage}
            value={imageURL}
          />
        </div>

        {imageURL && isValidUrl(imageURL) && (
          <ImageCard imageSrc={imageURL} filterClassName={filterClassName} />
        )}

        {imageURL && isValidUrl(imageURL) && (
          <div className="w-full text-sky-600 mt-4 text-center text-xs font-bold">
            Give it a Name
          </div>
        )}

        {imageURL && isValidUrl(imageURL) && (
          <div className="w-full p-4 mb-4">
            <input
              className="p-2 border w-full font-bold"
              type="text"
              onChange={onChange}
              value={title}
              name="title"
            />
          </div>
        )}

        {imageURL && isValidUrl(imageURL) && (
          <ImageFilters
            imageSrc={imageURL}
            onFilterSelected={handleFilterSelected}
          />
        )}

        {imageURL && isValidUrl(imageURL) && (
          <div className="w-full mx-auto  p-2">
            <button
              type="submit"
              className="bg-black text-white p-4 w-full rounded"
            >
              Post now!
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

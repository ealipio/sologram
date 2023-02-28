import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useImageStore } from '../store/imageStore';

import { IMAGE_ERROR, PLACEHOLDER_IMG, TIME_LINE } from '../constants/messages';

import ImageCard from './ImageCard';
import ImageFilters from './ImageFilters';
import { isValidUrl, getDefaultTitle } from '../utils/url';

const DEFAULT_DATA = {
  title: '',
  imageURL: '',
  filterClassName: '',
};

export const AddPost: React.FC = () => {
  const [filterClassName, setFilterClassName] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const addPost = useImageStore((state) => state.addPost);

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
      title,
      imageURL,
      filter: filterClassName,
      date,
      id: date.getTime(),
      liked: false,
    };
    addPost(dataToSave);
    //@todo: show a message that item was saved
    setImageURL(DEFAULT_DATA.imageURL);
    setTitle(DEFAULT_DATA.title);

    navigate(`/${TIME_LINE}`);
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageURL(url);
    if (isValidUrl(url)) {
      setTitle(getDefaultTitle(url));
    }
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
              onChange={onChangeTitle}
              value={title}
            />
          </div>
        )}

        {imageURL && isValidUrl(imageURL) && (
          <ImageFilters
            imageSrc={imageURL}
            onFilterSelected={handleFilterSelected}
          />
        )}

        {imageURL && isValidUrl(imageURL) && title && (
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
};

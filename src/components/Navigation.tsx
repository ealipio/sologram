import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, PlusIcon } from '@heroicons/react/24/solid';
import { TIME_LINE, ADD_POST } from '../constants/messages';

export interface INavigationProps {}

export function Navigation(props: INavigationProps) {
  const { pathname } = useLocation();

  const isAddPostRoute = pathname.includes(ADD_POST);

  return (
    <div className="flex">
      <section className="block fixed inset-x-0 bottom-0 z-10 bg-white border-t-2">
        <div className="flex justify-evenly">
          <div className="pt-2 pb-0">
            <Link to={`${TIME_LINE}/`} className="inline-block  h-10 w-10">
              <HomeIcon
                className={`${isAddPostRoute ? 'text-gray-300' : 'text-black'}`}
              />
            </Link>
          </div>

          <div className="pt-2 pb-0 ">
            <Link
              to={`${ADD_POST}/`}
              className="inline-block text-white h-10 w-10"
            >
              <PlusIcon
                className={`rounded  ${
                  isAddPostRoute ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

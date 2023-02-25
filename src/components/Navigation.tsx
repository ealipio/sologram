import { Link } from 'react-router-dom';
import { HomeIcon } from '../assets/HomeIcon';

export interface INavigationProps {}

export function Navigation(props: INavigationProps) {
  return (
    <div className="bg-red-700 flex space-x-3">
      <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div className="flex justify-between">
          <Link
            to={`timeline/`}
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <HomeIcon />
            <span className="tab tab-home block text-xs">Home</span>
          </Link>

          <Link
            to={`add-post/`}
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <HomeIcon />
            <span className="tab tab-home block text-xs">Post</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export interface IHeaderProps {}

export function TimeLine(props: IHeaderProps) {
  const posts = [
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
    {
      title: 'This is the title',
      date: 'here the date',
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      like: false,
    },
  ];

  const PostsList = posts.map((post) => {
    return (
      <div className="mt-4">
        <div>{post.title}</div>
        <div>{post.date}</div>
        <div className="px-6">
          <img className="w-full" src={post.src} />
        </div>
        <div>action</div>
      </div>
    );
  });

  return (
    <div className="bg-gray-100 h-auto grid sm:grid-cols-3 grid-cols-1">
      {PostsList}
    </div>
  );
}

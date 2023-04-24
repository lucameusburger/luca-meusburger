type Props = {
  title: string;
  type: string;
  description?: string;
  link?: string;
};

function ProjectPill({ title, type, link }: Props) {
  return (
    <div className="flex gap-2">
      <a
        href={link}
        target="_blank"
        className="border cursor-pointer active:bg-purple-600 transition-all border-purple-500 hover:bg-purple-500 hover:text-white  px-5 py-2 whitespace-nowrap text-ellipsis overflow-hidden text-xl rounded-full flex-grow md:flex-grow-0 "
      >
        {title}
      </a>
      <a
        href={link}
        target="_blank"
        className="border cursor-pointer active:bg-purple-600 transition-all border-purple-500 hover:bg-purple-500 hover:text-white  px-5 py-2 whitespace-nowrap bg-purple-100  text-xl rounded-full   "
      >
        {type}
      </a>
    </div>
  );
}

export default ProjectPill;

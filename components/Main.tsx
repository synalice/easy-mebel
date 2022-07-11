interface IMainProps {
  children: JSX.Element[] | JSX.Element | string;
}

export default function Main({ children }: IMainProps) {
  return (
    <div className="p-5 sm:py-3 sm:px-12 md:py-3 md:px-28 my-2 border border-gray-400 flex flex-col items-center ">
      {children}
    </div>
  );
}

interface IMainProps {
  children: JSX.Element[] | JSX.Element | string;
}

export default function Main({ children }: IMainProps) {
  return (
    <div className="p-3 my-2 border border-gray-400">
      <div className="rounded-lg p-2 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}

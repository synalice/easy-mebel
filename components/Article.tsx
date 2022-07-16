interface IArticleProps {
  children: JSX.Element[] | JSX.Element | string;
  className?: string
}

export default function Article({ children, className }: IArticleProps) {
  return (
    <article className={"p-5 sm:py-3 sm:px-12 md:py-3 md:px-28 my-2 border border-gray-400 flex flex-col items-center " + className}>
      {children}
    </article>
  );
}

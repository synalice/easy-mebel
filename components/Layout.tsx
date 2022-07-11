interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="ml-2 mr-2 lg:max-w-4xl lg:mx-auto">
      {children}
    </div>
  );
}

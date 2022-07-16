interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <main className="mx-2 lg:max-w-4xl lg:mx-auto min-h-screen">
      {children}
    </main>
  );
}

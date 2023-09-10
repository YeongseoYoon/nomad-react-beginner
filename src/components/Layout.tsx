interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="px-5 pt-20">
        <div className="min-h-[calc(100vh-56px)] relative">{children}</div>
      </main>
      <div className="fixed bottom-0">
        <a target="_blank" href="https://icons8.com">
          icon by Icons8
        </a>
      </div>
    </>
  );
};

export default Layout;

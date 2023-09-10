interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="px-5 pt-20">
      <div className="min-h-[calc(100vh-56px)] relative">{children}</div>
    </main>
  );
};

export default Layout;

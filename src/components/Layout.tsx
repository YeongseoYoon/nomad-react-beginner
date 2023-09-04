interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-5">
      <main className="pt-40 min-h-[calc(100vh-56px)] relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;

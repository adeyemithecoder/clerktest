const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='items-center justify-center min-h-screen w-full bg-primary-50 flex bg-cover bg-fixed bg-slate-500'>
      {children}
    </div>
  );
};

export default Layout;

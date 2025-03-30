"use client";

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> { }

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="max-w-3xl w-full p-6 bg-white">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;

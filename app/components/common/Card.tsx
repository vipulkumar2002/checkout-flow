interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">{children}</div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className}`}>{children}</div>
  );
};

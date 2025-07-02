type QuarryContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function QuarryContainer({
  children,
  className = '',
}: QuarryContainerProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}
    >
      {children}
    </div>
  );
}

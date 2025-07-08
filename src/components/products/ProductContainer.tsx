type ProductContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ProductContainer({
  children,
  className = '',
}: ProductContainerProps) {
  return (
    <div
      className={`max-w-5xl mx-auto grid gap-6 ${className}`}
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
    >
      {children}
    </div>
  );
}

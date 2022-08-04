export const Container = ({ children }: WrapperProps) => {
  return (
    <>
      <div className="md:container md:mx-auto px-4">{children}</div>
    </>
  );
};

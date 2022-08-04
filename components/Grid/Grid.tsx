import { GridItem } from "./GridItem";

export const Grid = () => {
  return (
    <>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
          return <GridItem />;
        })}
      </div>
    </>
  );
};

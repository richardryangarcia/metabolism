import { GridItem } from "./GridItem";

type GridProps = {
  tokens: Token[];
};

export const Grid = ({ tokens }: GridProps) => {
  return (
    <>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tokens.map((token: Token) => {
          return <GridItem token={token} />;
        })}
      </div>
    </>
  );
};

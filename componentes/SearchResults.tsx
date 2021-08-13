import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: {
    data: [{ id: number; price: number; title: string }];
    totalPrice: number;
  };
  addToWishList: (id: number) => void;
}

export function SearchResults({ results, addToWishList }: SearchResultsProps) {
  const { data, totalPrice } = results;
  return (
    <div>
      <h2>{totalPrice}</h2>
      {data.map((product) => {
        return <ProductItem product={product} key={product.id} addToWishList={addToWishList} />;
      })}
    </div>
  );
}

import { List, ListRowRenderer } from 'react-virtualized';
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

  const listRowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results.data[index]} addToWishList={addToWishList} />
      </div>
    );
  };
  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={1000}
        overscanRowCount={5}
        rowCount={results.data.length}
        rowRenderer={listRowRender}
      />

      {/* {data.map((product) => {
        return <ProductItem product={product} key={product.id} addToWishList={addToWishList} />;
      })} */}
    </div>
  );
}

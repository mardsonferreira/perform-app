import { ProductItem } from './ProductItem';

type Product = {
  id: number;
  price: number;
  title: string;
};

interface SearchResultsProps {
  results: Array<Product>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}

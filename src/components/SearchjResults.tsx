import { useMemo } from 'react';
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
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0);
    }, [results]);

    return (
        <>
            <h2>{totalPrice}</h2>
            <div>
                {results.map(product => (
                    <ProductItem product={product} />
                ))}
            </div>
        </>
    );
}

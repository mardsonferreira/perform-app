import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

type Product = {
    id: number;
    price: number;
    title: string;
};

interface SearchResultsProps {
    results: Array<Product>;
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({
    results,
    onAddToWishlist,
}: SearchResultsProps) {
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
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishlist={onAddToWishlist}
                    />
                ))}
            </div>
        </>
    );
}

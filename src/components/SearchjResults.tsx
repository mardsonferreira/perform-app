import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

type Product = {
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
};

interface SearchResultsProps {
    results: Array<Product>;
    totalPrice: number;
    onAddToWishlist: (id: number) => void;
}

export function SearchResults({
    results,
    totalPrice,
    onAddToWishlist,
}: SearchResultsProps) {
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

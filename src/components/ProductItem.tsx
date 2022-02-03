import { memo } from 'react';

type Product = {
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
};

interface ProductItemProps {
    product: Product;
    onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onAddToWishlist(product.id)}>
                Add to Wish List
            </button>
        </div>
    );
}

export const ProductItem = memo(
    ProductItemComponent,
    (prevProps, nextProps) => {
        return Object.is(prevProps.product, nextProps.product);
    }
);

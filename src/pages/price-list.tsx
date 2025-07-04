import ProductContainer from '@/components/products/ProductContainer';
import ProductItem from '@/components/products/ProductItem';
import { products } from '@/domain/product';

export default function PriceList() {
  return (
    <>
      <div>
        <ProductContainer>
          {products.map((p) => (
            <ProductItem key={p.id} product={p} />
          ))}
        </ProductContainer>
      </div>
    </>
  );
}

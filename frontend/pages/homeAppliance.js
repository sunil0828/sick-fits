import { useQuery } from '@apollo/client';
import Product from '../components/Product';
import { ALL_PRODUCTS_QUERY, ProductsListStyles } from '../components/Products';

export default function HomeAppliancePage() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('data :', data, 'loading:', loading, 'error:', error);
  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((product) =>
          product.category === 'HOME APPLIANCE' ? (
            <Product key={product.id} product={product} />
          ) : (
            ''
          )
        )}
      </ProductsListStyles>
    </div>
  );
}

import { memo } from 'react';

interface ProductItemProps {
  product: { id: number; price: number; title: string };
  addToWishList: (id: number) => void;
}

const ProductItemComponent = ({ product, addToWishList }: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => addToWishList(product.id)}>Add to wish List</button>
    </div>
  );
};

// o memo faz uma verificação chamda shallow compare -> comparação rasa
//  o memo verifica se as propriedades foram alteração para então criar a representação na
// dom do compoenente e assim o react executará o algoritmo de comparação
// Caso o as propriedades não tenham mudado o memo informará ao Recat de quem nem precisa executar
// o algoritmo de comparação e criar a representação do componente em si
export const ProductItem = memo(ProductItemComponent, (prevPros, nextProps) => {
  // comparando valores dos objetos
  return Object.is(prevPros.product, nextProps.product);
});

// Quais situações utilizar o memo ?
// 1 -

import lodash from 'lodash';
import dynamic from 'next/dynamic';
import { memo, useState } from 'react';
import { AddProductToWishListProps } from './AddProductToWishList';

// import { AddProductToWishList } from './AddProductToWishList';

// Lazy load com next
const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import('./AddProductToWishList').then((m) => m.AddProductToWishList);
  },
  {
    // eslint-disable-next-line react/display-name
    loading: () => <span>Carregando...</span>,
  },
);

// pra usar essa mesma funcionalidade no react convencional, basta usar o hook lazy de dentro do react
// a função import('./AddProductToWishList').then((m) => m.AddProductToWishList) funciona do mesmo jeito.
interface ProductItemProps {
  product: { id: number; price: number; title: string };
  addToWishList: (id: number) => void;
}

const ProductItemComponent = ({ product, addToWishList }: ProductItemProps) => {
  const [wishListModal, setWishListModal] = useState(false);

  const toogleModal = () => setWishListModal(!wishListModal);

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      {wishListModal ? (
        <AddProductToWishList
          onAddToWishList={() => addToWishList(product.id)}
          onRequestClose={() => toogleModal()}
        />
      ) : (
        <button onClick={() => toogleModal()}>Adicionar aos favoritos</button>
      )}
    </div>
  );
};

// o memo faz uma verificação chamda shallow compare -> comparação rasa
//  o memo verifica se as propriedades foram alteração para então criar a representação na
// dom do compoenente e assim o react executará o algoritmo de comparação
// Caso o as propriedades não tenham mudado o memo informará ao Recat de quem nem precisa executar
// o algoritmo de comparação e criar a representação do componente em si
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  // comparando valores dos objetos

  return lodash.isEqual(prevProps.product, nextProps.product);
  // return Object.is(prevPros.product, nextProps.product);
});

// Quais situações utilizar o memo ?
// 1 -

import React from 'react';

export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}
const AddProductToWishList: React.FC<AddProductToWishListProps> = ({
  onAddToWishList,
  onRequestClose,
}) => {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={() => onAddToWishList()}>Sim</button>
      <button onClick={() => onRequestClose()}>Não</button>
    </span>
  );
};

export { AddProductToWishList };

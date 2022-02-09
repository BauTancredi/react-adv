import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    setShoppingCart((oldShoppingCard) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCard;
        return rest;
      }

      return {
        ...oldShoppingCard,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

export default useShoppingCart;

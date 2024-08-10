import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { fakerPT_BR } from "@faker-js/faker";

// Dados para lista de produtos
const generateProducts = (count: number) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const productName = fakerPT_BR.commerce.product();
    products.push({
      id: i.toString(),
      name: productName,
      price: `R$ ${fakerPT_BR.commerce.price()}`,
      image: fakerPT_BR.image.urlPlaceholder({
        text: productName,
        width: 150,
        height: 150,
        backgroundColor: "4d79b8",
        textColor: "000000",
        format: "png",
      }),
    });
  }
  return products;
};

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface ProductContextType {
  products: Product[];
  getProductById: (id: string) => Product | undefined;
  removeProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState(generateProducts(15));

  const getProductById = useCallback(
    (id: string) => products.find((product) => product.id === id),
    [products]
  );

  const removeProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductContext.Provider value={{ products, getProductById, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("O useProductsContext deve ser utilizado em conjunto a um ProductProvider");
  }
  return context;
};

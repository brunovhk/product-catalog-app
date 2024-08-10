import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ProductList from "@/components/ProductList";
import { ThemedView } from "@/components/ThemedView";
import { pt_BR, fakerPT_BR } from "@faker-js/faker";

// Dados de exemplo para lista de produtos
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

const ExploreScreen = () => {
  const [products, setProducts] = useState(generateProducts(15));

  const handleRemoveProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  return (
    <ThemedView style={styles.container}>
      <ProductList products={products} onRemoveProduct={handleRemoveProduct} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExploreScreen;

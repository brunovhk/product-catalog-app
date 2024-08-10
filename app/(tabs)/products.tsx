import React from "react";
import { StyleSheet } from "react-native";
import ProductList from "@/components/ProductList";
import { ThemedView } from "@/components/ThemedView";

// Dados de exemplo para lista de produtos
const generateProducts = (count: number) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    products.push({
      id: i.toString(),
      name: `Product ${i}`,
      price: `R$ ${i * 12}`,
      image: `https://via.placeholder.com/100?text=Produto+${i}`,
    });
  }
  return products;
};

const products = generateProducts(15);

const ExploreScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ProductList products={products} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExploreScreen;

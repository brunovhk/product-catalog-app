import React from "react";
import { StyleSheet } from "react-native";
import ProductList from "@/components/ProductList";
import { ThemedView } from "@/components/ThemedView";
import { useProductsContext } from "@/context/ProductContext";

const ExploreScreen = () => {
  const { products, removeProduct } = useProductsContext();

  return (
    <ThemedView style={styles.container}>
      <ProductList products={products} onRemoveProduct={removeProduct} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExploreScreen;

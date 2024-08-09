import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ProductList from "../../components/ProductList";

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
    <SafeAreaView style={styles.container}>
      <ProductList products={products} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default ExploreScreen;

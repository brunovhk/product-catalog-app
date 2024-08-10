import React from "react";
import { StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useProductsContext } from "@/context/ProductContext";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const { getProductById } = useProductsContext();

  const product = getProductById(id as string) || {
    id: id,
    name: `Produto ${id}`,
    price: `R$ `,
    image: ``,
  };

  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <ThemedText style={styles.name}>{product.name}</ThemedText>
      <ThemedText style={styles.price}>{product.price}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
  },
});

export default ProductDetails;

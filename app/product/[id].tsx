import React from "react";
import { StyleSheet, Image } from "react-native";
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // Dados de exemplo (substitua com seus dados reais ou fetch)
  const product = {
    id: id,
    name: `Product ${id}`,
    price: `R$ ${parseInt(id) * 12}`,
    image: `https://via.placeholder.com/100?text=Produto+${id}`,
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
  },
});

export default ProductDetails;

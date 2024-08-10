import React from "react";
import { FlatList, Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const numColumns = 2;
const spacing = 10; // Espaçamento entre os cards

const themeColors = {
  light: {
    cardBackground: "#A1CEDC",
    priceColor: "#00a123", // Ajuste da cor do preço para um melhor contraste no tema claro
  },
  dark: {
    cardBackground: "#555555",
    priceColor: "#01d42f", // Ajuste da cor do preço para um melhor contraste no tema escuro
  },
};

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const colorScheme = useColorScheme() ?? "light";
  const colors = themeColors[colorScheme];

  const renderItem = ({ item }: { item: Product }) => (
    <ThemedView
      style={[styles.productCard, { backgroundColor: colors.cardBackground }]}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <ThemedText style={styles.productName}>{item.name}</ThemedText>
      <ThemedText style={[styles.productPrice, { color: colors.priceColor }]}>
        {item.price}
      </ThemedText>
    </ThemedView>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginHorizontal: spacing,
  },
  listContainer: {
    paddingVertical: 10,
  },
  productCard: {
    flex: 1,
    justifyContent: "center",
    marginBottom: spacing,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProductList;

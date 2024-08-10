import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

const numColumns = 2;
const spacing = 10; // Espaçamento entre os cards

const themeColors = {
  light: {
    cardBackground: "#A1CEDC",
    priceColor: "#00a123", // Ajuste da cor do preço para um melhor contraste no tema claro
    removeButtonColor: "#ff4d4d", // Cor do botão de remoção no tema claro
    detailsButtonColor: "#007bff", // Cor do botão de detalhes no tema claro
  },
  dark: {
    cardBackground: "#555555",
    priceColor: "#01d42f", // Ajuste da cor do preço para um melhor contraste no tema escuro
    removeButtonColor: "#ff4d4d", // Cor do botão de remoção no tema escuro
    detailsButtonColor: "#339af0", // Cor do botão de detalhes no tema escuro
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
  onRemoveProduct: (id: string) => void; // Função de callback para remover o produto
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  onRemoveProduct,
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const colors = themeColors[colorScheme];
  const router = useRouter();

  const handleViewDetails = (route: string) => {
    router.push(route);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ThemedView
      style={[styles.productCard, { backgroundColor: colors.cardBackground }]}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <ThemedText style={styles.productName}>{item.name}</ThemedText>
      <ThemedText style={[styles.productPrice, { color: colors.priceColor }]}>
        {item.price}
      </ThemedText>
      <TouchableOpacity
        style={[
          styles.detailsButton,
          { backgroundColor: colors.detailsButtonColor },
        ]}
        onPress={() => handleViewDetails(`/product/${item.id}`)}
      >
        <ThemedText style={styles.detailsButtonText}>Ver detalhes</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.removeButton,
          { backgroundColor: colors.removeButtonColor },
        ]}
        onPress={() => onRemoveProduct(item.id)}
      >
        <ThemedText style={styles.removeButtonText}>Remover produto</ThemedText>
      </TouchableOpacity>
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
    height: 150,
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
  removeButton: {
    marginTop: 10,
    width: "100%",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  detailsButton: {
    marginTop: 10,
    width: "100%",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductList;

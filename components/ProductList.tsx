import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const numColumns = 2;
const columnWidth = width / numColumns;

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
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer} // Espaçamento no topo
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
  listContainer: {
    paddingVertical: 10, // Padding vertical ao conteúdo da lista
  },
  productCard: {
    width: columnWidth - 15,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
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
    color: "#888",
    marginTop: 5,
  },
});

export default ProductList;

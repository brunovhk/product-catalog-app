import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/home_banner.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <ThemedText style={styles.title}>
        Bem-vindo ao Catálogo de Produtos
      </ThemedText>
      <ThemedText style={styles.description}>
        Descubra nossos produtos incríveis e encontre tudo o que você precisa
        com facilidade.
      </ThemedText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigate("/products")}
      >
        <ThemedText style={styles.buttonText}>Ver Catálogo</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: width,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;

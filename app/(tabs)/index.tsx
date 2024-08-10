import React from "react";
import { StyleSheet, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <ThemedView>
      <Image
        source={require("@/assets/images/home_banner.png")}
        resizeMode="cover"
      />
      <ThemedText>Bem-vindo ao Catálogo de Produtos</ThemedText>
      <ThemedText>
        Descubra nossos produtos incríveis e encontre tudo o que você precisa
        com facilidade.
      </ThemedText>
      <TouchableOpacity onPress={() => handleNavigate("/products")}>
        <ThemedText>Ver Catálogo</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;

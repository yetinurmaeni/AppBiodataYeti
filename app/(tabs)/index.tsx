import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      {/* Judul */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Aplikasi React Native Saya</ThemedText>
      </ThemedView>

      {/* Identitas */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText>NAMA: YETI NUR MAENI</ThemedText>
        <ThemedText>NIM: 23050515</ThemedText>
        <ThemedText>KELAS: AM2305D MALAM</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  stepContainer: {
    alignItems: "center",
    marginTop: 20,
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

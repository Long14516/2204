import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export function Splash({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../../assets/6.png")} // ảnh nền
      style={styles.container}
      resizeMode="cover"
    >
      {/* Overlay làm tối ảnh */}
      <View style={styles.overlay} />

      {/* Nội dung */}
      <View style={styles.content}>
       <Text style={styles.title}>
  Fall in Love with{"\n"}
  Coffee in Blissful{"\n"}
  Delight!
</Text>
<Text style={styles.subtitle}>
  Welcome to our cozy coffee corner,{"\n"}
  where every cup is a delightful experience.
</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
  },

  content: {
    padding: 25,
    marginBottom: 30,
  },
bannerImg: {
  width: 80,
  height: 130, // theo tỉ lệ gốc
  resizeMode: "contain",
},
 title: {
  color: "#fff",
  fontSize: 30,
  fontWeight: "bold",
  textAlign: "center",
  lineHeight: 40,
  marginBottom: 10,
},

subtitle: {
  color: "#ccc",
  fontSize: 14,
  textAlign: "center",
  lineHeight: 20,
  marginBottom: 25,
},

  button: {
    backgroundColor: "#c67c4e",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,

  },
});
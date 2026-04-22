import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetailScreen({ navigation, route }: any) {
  const [size, setSize] = useState("M");

  // ✅ nhận đúng data
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Detail</Text>

          <Ionicons name="heart-outline" size={22} />
        </View>

        {/* Image */}
        <Image source={product.img} style={styles.image} />

        {/* Info */}
        <View style={styles.info}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.subtitle}>{product.type}</Text>

          {/* Rating */}
          <View style={styles.row}>
            <Ionicons name="star" size={16} color="#fbbf24" />
            <Text style={styles.rating}>4.8</Text>
            <Text style={styles.count}>(230)</Text>
          </View>

          {/* Description */}
          <Text style={styles.section}>Description</Text>
          <Text style={styles.desc}>
            A cappuccino is approximately 150 ml beverage, with espresso coffee
            and fresh milk foam.
            <Text style={{ color: "#c67c4e" }}> Read More</Text>
          </Text>

          {/* Size */}
          <Text style={styles.section}>Size</Text>

          <View style={styles.sizeRow}>
            {["S", "M", "L"].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setSize(item)}
                style={[
                  styles.sizeBtn,
                  size === item && styles.sizeActive,
                ]}
              >
                <Text
                  style={[
                    styles.sizeText,
                    size === item && styles.sizeTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom */}
      <View style={styles.bottom}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>

        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff",
    marginTop: 30,
   },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    
  },

  headerTitle: { fontSize: 16, fontWeight: "bold" },

  image: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 15,
  },

  info: {
    padding: 20,
  },

  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#888", marginBottom: 10 },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  rating: { marginLeft: 5, fontWeight: "bold" },
  count: { color: "#888", marginLeft: 5 },

  section: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },

  desc: { color: "#666", lineHeight: 20 },

  sizeRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  sizeBtn: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },

  sizeActive: {
    borderColor: "#c67c4e",
    backgroundColor: "#fdf1ea",
  },

  sizeText: { color: "#333" },
  sizeTextActive: { color: "#c67c4e", fontWeight: "bold" },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
    marginBottom: 30,
  },

  priceLabel: { color: "#888" },
  price: { fontSize: 18, fontWeight: "bold", color: "#c67c4e" },

  buyBtn: {
    backgroundColor: "#c67c4e",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },

  buyText: { color: "#fff", fontWeight: "bold" },
});
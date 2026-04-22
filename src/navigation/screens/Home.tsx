import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { products } from "../../data";

const categories = ["All Coffee", "Machiato", "Latte", "Americano"];

const HomeScreen = ({ navigation }: any) => {
  const [selected, setSelected] = useState("All Coffee");

  // FILTER
  const filteredProducts =
    selected === "All Coffee"
      ? products
      : products.filter((p: any) => p.type === selected);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.location}>Bilzen, Tanjungbalai ▼</Text>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#aaa" />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#aaa"
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require("../../assets/Banner.png")}
            style={styles.bannerImg}
          />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelected(item)}
              style={[
                styles.category,
                selected === item && styles.categoryActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selected === item && styles.categoryTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products */}
        <View style={styles.grid}>
          {filteredProducts.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("Details", { product: item })
              }
            >
              <Image source={item.img} style={styles.cardImg} />
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.type}</Text>

              <View style={styles.priceRow}>
                <Text style={styles.price}>$ {item.price}</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Text style={{ color: "#fff", fontSize: 18 }}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    backgroundColor: "#111",
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  locationLabel: { color: "#aaa", fontSize: 12 },
  location: { color: "#fff", fontSize: 16, marginBottom: 15 },

  searchRow: { flexDirection: "row", alignItems: "center" },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  input: { marginLeft: 8, color: "#fff" },

  filterBtn: {
    marginLeft: 10,
    backgroundColor: "#c67c4e",
    padding: 12,
    borderRadius: 10,
  },

  banner: {
    marginTop: 20,
    borderRadius: 15,
    overflow: "hidden",
  },

  bannerImg: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },

  body: { padding: 15 },

  category: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 10,
  },

  categoryActive: { backgroundColor: "#c67c4e" },

  categoryText: { color: "#333" },
  categoryTextActive: { color: "#fff" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },

  cardImg: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    resizeMode: "cover",
  },

  title: { fontWeight: "bold", marginTop: 8 },
  subtitle: { color: "#888", fontSize: 12 },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  price: { fontWeight: "bold", fontSize: 16 },

  addBtn: {
    backgroundColor: "#c67c4e",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
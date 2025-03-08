import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import EditIconDark from "@/assets/svg/editIconDark";
import AddIcon from "@/assets/svg/AddIcon";
import SearchIcon from "@/assets/svg/searchIcon";
import AppBar from "@/components/AppBar";

type Product = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  imageUrl: string;
};

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Produto 1",
    quantity: 10,
    price: 20,
    description: "Descrição do Produto 1",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Produto 2",
    quantity: 5,
    price: 40,
    description: "Descrição do Produto 2",
    imageUrl: "",
  },
];

const Estoque: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <AppBar pageTitle="Estoque" userName="Usuário" />
      <ScrollView style={styles.container}>
        <View>
          {/* Campo de Pesquisar*/}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar produto"
              placeholderTextColor={"#767575"}
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            <SearchIcon style={styles.searchIconWrapper} />
          </View>
        </View>

        {/*Add Product btn */}
        <TouchableOpacity
          style={styles.addProductBtn}
          onPress={() => router.push("/addProduto")}
        >
          <AddIcon />
          <Text style={styles.addProductText}>Adicionar novo produto</Text>
        </TouchableOpacity>

        {/* Lista de produtos estoque */}
        <Text style={styles.sectionTitle}>Produtos</Text>
        <View style={styles.productList}>
          {filteredProducts.map((product) => (
            <View key={product.id} style={styles.productContainer}>
              <Image
                source={{ uri: product.imageUrl }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productQuantity}>
                  Qnt: {product.quantity}
                </Text>
                <Text style={styles.productPrice}>
                  R$ {product.price.toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity style={styles.editIcon}>
                <EditIconDark />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    height: 53,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 40,
    width: "100%",
    marginVertical: 15,
  },
  searchIconWrapper: {
    position: "absolute",
    right: 30,
    top: 25,
  },
  addProductBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addProductText: {
    marginLeft: 10,
    color: "#333",
    fontSize: 16,
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productContainer: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productQuantity: {
    fontSize: 14,
    color: "#555",
  },
  productPrice: {
    fontSize: 14,
    color: "#28a745",
  },
  editIcon: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    fontSize: 18,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Estoque;

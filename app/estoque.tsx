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
import CloseIcon from "@/assets/svg/closeIcon";
import SaveIcon from "@/assets/svg/saveIcon";
import TrashIcon from "@/assets/svg/trashIcon";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [quantityChange, setQuantityChange] = useState<number>(0);
  const [isAddingQuantity, setIsAddingQuantity] = useState<boolean>(true);

  const router = useRouter();
  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setQuantityChange(0);
    setIsModalVisible(true);
  };

  const handleSaveChanges = () => {
    if (currentProduct) {
      const updatedQuantity = isAddingQuantity
        ? currentProduct.quantity + quantityChange
        : Math.max(0, currentProduct.quantity - quantityChange);

      setProducts((prevProducts) =>
        prevProducts.map((prod) =>
          prod.id === currentProduct.id
            ? { ...currentProduct, quantity: updatedQuantity }
            : prod
        )
      );
    }
    setIsModalVisible(false);
  };

  const handleDeleteProduct = () => {
    if (currentProduct) {
      setProducts((prevProducts) =>
        prevProducts.filter((prod) => prod.id !== currentProduct.id)
      );
    }
    setIsModalVisible(false);
  };

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
                source={require("../assets/images/logo.png")}
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
              <TouchableOpacity
                onPress={() => handleEditProduct(product)}
                style={styles.editIcon}
              >
                <EditIconDark />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal de Edição */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={handleSaveChanges}>
                <SaveIcon />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Editar Produto</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </View>

            {currentProduct && (
              <View style={styles.modalBody}>
                <Image
                  source={require("../assets/images/logo.png")}
                  style={{
                    width: 110,
                    height: 110,
                    marginBottom: 20,
                    alignSelf: "center",
                  }}
                />
                <Text style={styles.modalLabel}>Nome do Produto</Text>
                <TextInput
                  style={styles.modalInput}
                  value={currentProduct.name}
                  onChangeText={(text) =>
                    setCurrentProduct({ ...currentProduct, name: text })
                  }
                />
                <Text style={styles.modalLabel}>Preço:</Text>
                <TextInput
                  style={styles.modalInput}
                  value={currentProduct.price.toString()}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    const newPrice = text === "" ? 0 : parseFloat(text);
                    setCurrentProduct({ ...currentProduct, price: newPrice });
                  }}
                />

                <Text style={styles.modalLabel}>Quantidade Atual</Text>
                <Text style={{color: "#F5F5F5"}}>{currentProduct.quantity}</Text>

                <Text style={styles.modalLabel}>Alterar Quantidade</Text>
                <View style={styles.quantityChangeContainer}>
                  <TouchableOpacity
                    onPress={() => setIsAddingQuantity(true)}
                    style={[
                      styles.quantityButton,
                      isAddingQuantity && styles.selectedButton,
                    ]}
                  >
                    <Text style={styles.buttonText}>Adicionar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsAddingQuantity(false)}
                    style={[
                      styles.quantityButton,
                      !isAddingQuantity && styles.selectedButton,
                    ]}
                  >
                    <Text style={styles.buttonText}>Remover</Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.modalInput}
                  keyboardType="numeric"
                  placeholder="Digite a quantidade"
                  value={quantityChange.toString()}
                  onChangeText={(text) => setQuantityChange(Number(text) || 0)}
                />
                <Text style={styles.modalPreview}>
                  {isAddingQuantity
                    ? `Quantidade final: ${
                        currentProduct.quantity + quantityChange
                      }`
                    : `Quantidade final: ${
                        currentProduct.quantity - quantityChange
                      }`}
                </Text>

                <Text style={styles.modalLabel}>Descrição</Text>
                <TextInput
                  style={styles.modalInput}
                  value={currentProduct.description}
                  onChangeText={(text) =>
                    setCurrentProduct({
                      ...currentProduct,
                      description: text,
                    })
                  }
                />

                <TouchableOpacity
                  onPress={handleDeleteProduct}
                  style={styles.deleteButton}
                >
                    <TrashIcon></TrashIcon>
                  <Text style={styles.deleteButtonText}>
                    Deletar permanentemente
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    backgroundColor: "#eee",
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: "bold",
  },
  productQuantity: {
    color: "#777",
  },
  productPrice: {
    color: "#333",
  },
  editIcon: {
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#2C3E50",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F5F5F5",
  },
  modalBody: {
    marginTop: 20,
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#F5F5F5",
  },
  modalInput: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  quantityChangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    
  },
  quantityButton: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#ddd",
    alignItems: "center",
    
  },
  selectedButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: 16,
    
  },
  modalPreview: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F5F5F5",
  },
  deleteButton: {
    marginTop: 20,
    backgroundColor: "#E74C3C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Estoque;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import AddIcon from "@/assets/svg/AddIcon";
import AppBar from "@/components/AppBar"; 

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleAddProduct = () => {
    router.push("/addProduto");
  };


  const closeMenu = () => {
    setMenuVisible(false);
  };

  const totalItems: number = 120;
  const totalValueInStock: string = "R$ 25,000.00";
  const totalValueOut: string = "R$ 7,500.00";

  const product = {
    name: "Notebook Dell Inspiron 15",
    quantity: 30,
    price: "R$ 3,000.00",
    description: "Notebook Dell com Intel Core i7, 16GB de RAM, 512GB SSD.",
  };

  const lowStockProducts = [
    { name: "Mouse Logitech", quantity: 5, price: "R$ 100.00" },
    { name: "Teclado Mecânico Corsair", quantity: 4, price: "R$ 350.00" },
    { name: "Fone de ouvido JBL", quantity: 3, price: "R$ 150.00" },
    { name: "Mouse Gamer Razer Viper", quantity: 7, price: "R$ 399.00" },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* AppBar*/}
      <AppBar pageTitle="Dashboard" userName="Usuário"/>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handleAddProduct} style={styles.addProductBtn}>
          <AddIcon />
          <Text style={styles.addProductText}>Adicionar novo produto</Text>
        </TouchableOpacity> 

        <Text style={styles.sectionTitle}>Resumo do Estoque</Text>
        <View style={styles.stockSummary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Total de itens no estoque:</Text>
            <Text style={styles.summaryNumber}>{totalItems}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Valor total em estoque:</Text>
            <Text style={styles.summaryNumber}>{totalValueInStock}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Valor total de saídas:</Text>
            <Text style={styles.summaryNumber}>{totalValueOut}</Text>
          </View>
          <View style={styles.divider} />
        </View>

        <Text style={styles.sectionTitle}>Produto em maior quantidade</Text>
        <ScrollView contentContainerStyle={styles.productContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.productImage}
          />
          <Text style={styles.productName}>{product.name}</Text>

          <View style={styles.productRow}>
            <Text style={styles.productLabel}>Quantidade:</Text>
            <Text style={styles.productValue}>{product.quantity}</Text>
          </View>

          <View style={styles.productRow}>
            <Text style={styles.productLabel}>Valor Unitário:</Text>
            <Text style={styles.productValue}>{product.price}</Text>
          </View>

          <Text style={styles.productDescription}>{product.description}</Text>
        </ScrollView>

        <Text style={styles.sectionTitle}>Produtos em baixa quantidade</Text>
        <View style={styles.lowStockContainer}>
          {lowStockProducts.map((item, index) => (
            <View key={index} style={styles.lowStockItem}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.productRow}>
                <Text style={styles.productLabel}>Quantidade:</Text>
                <Text style={styles.productValue}>{item.quantity}</Text>
              </View>

              <View style={styles.productRow}>
                <Text style={styles.productLabel}>Valor Unitário:</Text>
                <Text style={styles.productValue}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addProductText: {
    alignSelf: "center",
    color: "#333333",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  addProductBtn: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  stockSummary: {
    padding: 15,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
  },
  summaryNumber: {
    fontSize: 16,
    color: "#333",
    textAlign: "right",
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 5,
  },
  productContainer: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
  },
  productLabel: {
    fontSize: 16,
    color: "#333",
  },
  productValue: {
    fontSize: 16,
    color: "#333",
    textAlign: "right",
  },
  productName: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },
  lowStockContainer: {
    padding: 15,
  },
  lowStockItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
});

export default Dashboard;

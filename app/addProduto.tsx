// app/adicionar-produto.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { useRouter } from "expo-router";
import CloseIcon from "@/assets/svg/closeIcon";
import ImportIcon from "@/assets/svg/importIcon";

const AddProductScreen = () => {
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState<string | null>(null);

  const handleImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log("A seleção de imagem foi cancelada");
        } else if (response.errorCode) {
          console.log("Erro ao selecionar imagem: ", response.errorMessage);
        } else {
          setProductImage(response.assets?.[0].uri ?? null);
        }
      }
    );
  };

  const handleSaveProduct = () => {
    //save product
    console.log("Produto salvo:", {
      productName,
      productQuantity,
      productPrice,
      productDescription,
      productImage,
    });
    //volta
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Adicionar Produto</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.closeButton}
        >
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.summaryText}>Nome</Text>
        <TextInput
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
        />
        <Text style={styles.summaryText}>Quantidade em Estoque</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={productQuantity}
          onChangeText={setProductQuantity}
        />
        <Text style={styles.summaryText}>Valor do Produto</Text>
        <TextInput
          style={styles.input}
          placeholder="R$"
          keyboardType="decimal-pad"
          value={productPrice}
          onChangeText={setProductPrice}
        />
        <Text style={styles.summaryText}>Descrição</Text>
        <TextInput
          style={styles.input}
          multiline
          value={productDescription}
          onChangeText={setProductDescription}
        />

        <TouchableOpacity
          onPress={handleImagePicker}
          style={styles.imageImportBtn}
        >
          <Text style={styles.imageImportText}>Importar Imagem</Text>
          <ImportIcon></ImportIcon>
        </TouchableOpacity>

        {productImage && (
          <Image source={{ uri: productImage }} style={styles.imagePreview} />
        )}

        <TouchableOpacity style={styles.saveBtn} onPress={handleSaveProduct}>
          <Text style={styles.saveBtnTxt}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    padding: 5,
  },
  form: {
    flex: 1,
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#2C3E50",
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  imageImportBtn: {
    backgroundColor: "#D9D9D9",
    display: "flex",
    padding: 20,
    marginTop: 50,
    borderRadius: 5,
    marginBottom: 10,
    position: "relative",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    marginRight: 10,
    alignItems: "flex-end",
  },
  imageImportText: {
    color: "#333",
    fontSize: 18,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
    resizeMode: "contain",
  },
  saveBtn: {
    backgroundColor: "#2C3E50",
    width: 150,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf:"center",
  },
  saveBtnTxt: {
    color: "#D9D9D9",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize:16,
  },
});

export default AddProductScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import EmailIcon from "@/assets/svg/emailIcon";
import EyeOpen from "@/assets/svg/EyeOpen";
//import { cadastro } from "@/services/authService";
import EyeClosed from "@/assets/svg/EyeClosed";
import NameIcon from "@/assets/svg/NameIcon";

const CadastroScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleCadastro = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }
    if(!password || !confirmPassword || !name || !email){
        Alert.alert("Erro", "Por favor preencha todos os campos");
        return;
    }

    router.push("/dashboard");
  };

  const ativarVisibilidadeSenha = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 150, height: 150, marginBottom: 20 }}
          />
          {/*Nome*/}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Nome"
              placeholderTextColor={"#3333338e"}
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <NameIcon style={styles.icons} />
          </View>
          {/*Email*/}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={"#3333338e"}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <EmailIcon style={styles.icons} />
          </View>

          {/*Senha */}
          <View style={styles.senhaWrapper}>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Senha"
                placeholderTextColor={"#3333338e"}
                value={password}
                onChangeText={setPassword}
                multiline={false}
                numberOfLines={1}
                secureTextEntry={!isPasswordVisible}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={ativarVisibilidadeSenha}
                style={styles.icons}
              >
                {isPasswordVisible ? <EyeOpen /> : <EyeClosed />}
              </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Confirmar Senha"
                placeholderTextColor={"#3333338e"}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                multiline={false}
                numberOfLines={1}
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
          {/*Cadastro */}
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Link entrar */}
          <TouchableOpacity onPress={() => router.back()} style={styles.texto}>
            <Text style={styles.cadastroText}>Já possui uma conta?</Text>
            <Text style={styles.cadText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      {/* Decoracao */}
      <View style={styles.circleTopRight} />
      <View style={styles.circleBottomLeft} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  inputWrapper: {
    width: "90%",
    marginVertical: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "100%",
    paddingRight: 40,
    paddingLeft: 20,
    height: 50,
    padding: 5,
    backgroundColor: "#F4F4F4F4",
    borderRadius: 11,
  },
  senhaWrapper: {
    marginTop: 20,
    margin: 0,
  },
  button: {
    backgroundColor: "#F39C12",
    padding: 15,
    width: "90%",
    alignItems: "center",
    borderRadius: 11,
    marginVertical: 25,
  },
  buttonText: {
    color: "#F4F4F4",
    fontSize: 16,
    fontWeight: "bold",
  },
  texto: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  cadastroText: {
    color: "#F4F4F4",
    fontSize: 15,
  },
  cadText: {
    color: "#F39C12",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  icons: {
    position: "absolute",
    right: 10,
  },
  iconContainer: {
    paddingRight: 10,
  },
  circleBottomLeft: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 343,
    height: 52,
    borderRadius: 51,
    borderBottomRightRadius: 0,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    backgroundColor: "#f4f4f4",
  },
  circleTopRight: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 343,
    height: 52,
    borderRadius: 51,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopStartRadius: 0,
    backgroundColor: "#f4f4f4",
  },
});

export default CadastroScreen;

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
import { login } from "@/services/authService";
import EyeClosed from "@/assets/svg/EyeClosed";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {

    //esperar backend !
    try {
        //authService
        const userData = await login(email, password);
        
        //if userData
        if(userData){
            console.log("Login bem-sucedido:", userData);
            router.push("/dashboard");
        }
        return null;
      } catch (error) {
        Alert.alert("Erro", "Email ou senha incorretos.");
      }
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

          {/*Esqueci minha senha - criar a page esqueci senha*/}
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha.</Text>
          </TouchableOpacity>

          {/*Login */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Link cadastrar */}
          <TouchableOpacity
            onPress={() => router.push("/register")}
            style={styles.texto}
          >
            <Text style={styles.loginText}>Não possui uma conta?</Text>
            <Text style={styles.cadText}>Cadastre-se</Text>
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
    marginVertical: 15,
    backgroundColor: "#F4F4F4F4",
    borderRadius: 11,
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
  loginText: {
    color: "#F4F4F4",
    fontSize: 15,
  },
  cadText: {
    color: "#F39C12",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  forgotPasswordText: {
    color: "#F4F4F4",
    marginTop: 0,
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

export default LoginScreen;

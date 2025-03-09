import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import ImportIcon from "@/assets/svg/importIcon";
import AppBar from "@/components/AppBar";

const UserInfoScreen = () => {
  const router = useRouter();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentName, setCurrentName] = useState("Nome de Usuario");
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("usuario@email.com");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveChanges = () => {
    if (isEditingName) {
      setCurrentName(newName || currentName);
      setNewName("");
    }
    if (isEditingEmail) {
      setEmail(newEmail || email);
      setNewEmail("");
    }
    if (isEditingPassword) {
      if (newPassword === confirmPassword) {
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert("As senhas não coincidem");
        return;
      }
    }
    setIsEditingName(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
  };

  const renderNameEdit = () => (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nome atual</Text>
      <TextInput
        value={currentName}
        style={{ fontSize: 18, borderBottomWidth: 1, marginBottom: 10 }}
        editable={false}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Novo nome</Text>
      <TextInput
        value={newName}
        onChangeText={setNewName}
        style={{ fontSize: 18, borderBottomWidth: 1, marginBottom: 20 }}
        placeholder="Digite o novo nome"
      />
    </View>
  );

  const renderEmailEdit = () => (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>E-mail atual</Text>
      <TextInput
        value={email}
        style={{ fontSize: 18, borderBottomWidth: 1, marginBottom: 10 }}
        editable={false}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Novo e-mail</Text>
      <TextInput
        value={newEmail}
        onChangeText={setNewEmail}
        style={{ fontSize: 18, borderBottomWidth: 1, marginBottom: 20 }}
        placeholder="Digite o novo e-mail"
      />
    </View>
  );

  const renderPasswordEdit = () => (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nova senha</Text>
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        style={{ fontSize: 18, borderBottomWidth: 1, marginBottom: 10 }}
        placeholder="Digite a nova senha"
        secureTextEntry
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Confirmar senha</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={{ fontSize: 18, borderBottomWidth: 1, marginBottom: 20 }}
        placeholder="Confirme a nova senha"
        secureTextEntry
      />
    </View>
  );

  return (
    <View style={{flex:1}}>
    <AppBar pageTitle="Informações do Usuário" userName="Usuário"/>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Alterar Nome de Usuario
          </Text>
          <TouchableOpacity
            style={styles.altBtn}
            onPress={() => {
              setIsEditingName(true);
              setIsEditingEmail(false);
              setIsEditingPassword(false);
            }}
          >
            <Text style={{ fontSize: 18, marginVertical: 8 }}>
              {currentName}
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Alterar E-mail
          </Text>
          <TouchableOpacity
            style={styles.altBtn}
            onPress={() => {
              setIsEditingEmail(true);
              setIsEditingName(false);
              setIsEditingPassword(false);
            }}
          >
            <Text style={{ fontSize: 18, marginVertical: 8 }}>{email}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.altSenhaBtn}
            onPress={() => {
              setIsEditingPassword(true);
              setIsEditingName(false);
              setIsEditingEmail(false);
            }}
          >
            <Text style={{ color: "#333", fontWeight: "bold", fontSize: 16 }}>
              Alterar Senha
            </Text>
            <ImportIcon></ImportIcon>
          </TouchableOpacity>

          {(isEditingName || isEditingEmail || isEditingPassword) && (
            <View style={{ marginTop: 30 }}>
              {isEditingName && renderNameEdit()}
              {isEditingEmail && renderEmailEdit()}
              {isEditingPassword && renderPasswordEdit()}

              <TouchableOpacity
                onPress={handleSaveChanges}
                style={styles.concluidoBtn}
              >
                <Text style={styles.concluidoBtnTxt}>Concluído</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  altBtn: {
    backgroundColor: "#D9D9D9",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 20,
  },
  altSenhaBtn: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  concluidoBtn: {
    backgroundColor: "#2C3E50",
    width: 150,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 50,
    alignSelf: "center",
  },
  concluidoBtnTxt: {
    color: "#D9D9D9",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserInfoScreen;

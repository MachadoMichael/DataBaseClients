import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  Button,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";
import { InputRegistration } from "../../components/InputRegistration";
import { useNavigation } from "@react-navigation/native";

export const RegisterForm = () => {
  const { container, form, button, buttonText } = styles;
  const { navigate } = useNavigation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={{
        uri: "https://st3.depositphotos.com/4478807/36255/i/600/depositphotos_362555846-stock-photo-network-structure-between-people-data.jpg",
      }}
      style={container}
    >
      <SafeAreaView style={form}>
        <InputRegistration label="Name" state={name} setState={setName} />
        <InputRegistration label="Phone" state={phone} setState={setPhone} />
        <InputRegistration label="Adress" state={adress} setState={setAdress} />
        <InputRegistration label="Email" state={email} setState={setEmail} />
        <InputRegistration label="User" state={user} setState={setUser} />
        <InputRegistration
          label="Password"
          state={password}
          setState={setPassword}
        />
      </SafeAreaView>

      <Pressable style={button} onPress={() => navigate("Login")}>
        <Text style={buttonText}>Register</Text>
      </Pressable>
    </ImageBackground>
  );
};

import React, { useState, useContext } from "react";
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
import { LoginContext } from "../../context/LoginContext";

export const RegisterForm = () => {
  const { container, form, button, buttonText } = styles;
  const { navigate } = useNavigation();
  const { status, setStatus, clientList, setClientList } =
    useContext(LoginContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");

  const resetValue = () => {
    setName("");
    setPhone("");
    setAdress("");
    setEmail("");
  };

  const createNewClient = () => {
    let newClientList = [...clientList];
    newClientList.push({
      name: name,
      phone: phone,
      adress: adress,
      email: email,
    });

    setClientList(newClientList);
    alert(`O cliente ${name} foi registrado com sucesso`);
    resetValue();
  };

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
      </SafeAreaView>

      <Pressable style={button} onPress={createNewClient}>
        <Text style={buttonText}>Register</Text>
      </Pressable>
    </ImageBackground>
  );
};

import React, { useState, useContext } from "react";
import { SafeAreaView, Text, Pressable, ImageBackground } from "react-native";
import { styles } from "./styles";
import { InputRegistration } from "../../components/InputRegistration";

import { LoginContext } from "../../context/LoginContext";
import { NoUserConnected } from "../../components/NoUserConnected/Index";

export const RegisterForm = () => {
  const { container, form, button, buttonText } = styles;

  const { status, clientList, setClientList } = useContext(LoginContext);

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
    if (
      name !== "" &&
      phone !== "" &&
      adress !== "" &&
      email.includes("@") &&
      email.includes(".com")
    ) {
      let newClientList = [...clientList];
      newClientList.push({
        name: name,
        phone: phone,
        adress: adress,
        email: email,
      });

      setClientList(newClientList);
      alert(`The client ${name} has been registred with success`);
      resetValue();
    } else {
      alert(`Review the fields`);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://st3.depositphotos.com/4478807/36255/i/600/depositphotos_362555846-stock-photo-network-structure-between-people-data.jpg",
      }}
      style={container}
    >
      {status === true ? (
        <>
          <SafeAreaView style={form}>
            <InputRegistration
              label="Name"
              state={name}
              setState={setName}
              placeHolder="Jane Doe"
            />
            <InputRegistration
              label="Phone"
              state={phone}
              setState={setPhone}
              placeHolder="11991953598"
            />
            <InputRegistration
              label="Adress"
              state={adress}
              setState={setAdress}
              placeHolder="Rua 99, numero X - SP"
            />
            <InputRegistration
              label="Email"
              state={email}
              setState={setEmail}
              placeHolder="contato@email.com"
            />
          </SafeAreaView>

          <Pressable style={button} onPress={createNewClient}>
            <Text style={buttonText}>Register</Text>
          </Pressable>
        </>
      ) : (
        <NoUserConnected />
      )}
    </ImageBackground>
  );
};

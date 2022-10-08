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
import { useNavigation } from "@react-navigation/native";
import { userList } from "../../data/userList";
import { InputRegistration } from "../../components/InputRegistration";
import { LoginContext } from "../../context/LoginContext";

export const Home = () => {
  const { container, button, buttonText, containerInputs } = styles;
  const { navigate } = useNavigation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { status, checkingRegister } = useContext(LoginContext);
  console.warn(checkingRegister);
  

  return (
    <ImageBackground
      source={{
        uri: "https://st3.depositphotos.com/4478807/36255/i/600/depositphotos_362555846-stock-photo-network-structure-between-people-data.jpg",
      }}
      style={container}
    >
      <SafeAreaView style={containerInputs}>
        <InputRegistration
          label={"User"}
          state={user}
          setState={setUser}
        ></InputRegistration>
        <InputRegistration
          label={"Password"}
          state={password}
          setState={setPassword}
        ></InputRegistration>
      </SafeAreaView>

      <Pressable style={button} onPress={() => alert("ada")}>
        <Text style={buttonText}>Enter</Text>
      </Pressable>
    </ImageBackground>
  );
};

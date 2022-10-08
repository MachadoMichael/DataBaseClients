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
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const { navigate } = useNavigation();
  const [logged, setLogged] = useState(false);
  const [operation, setOperation] = useState("initial");
  const [users, setUsers] = useState([]);
  const { container, button, buttonText, registration } = styles;

  return (
    <ImageBackground
      source={{
        uri: "https://st3.depositphotos.com/4478807/36255/i/600/depositphotos_362555846-stock-photo-network-structure-between-people-data.jpg",
      }}
      style={container}
    ></ImageBackground>
  );
};

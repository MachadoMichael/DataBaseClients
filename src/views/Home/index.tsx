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
  const [registredUsers, setRegistredUsers] = useState(userList);

  const { status, setStatus } = useContext(LoginContext);

  const checkingRegister = () => {
    registredUsers.map((register) => {
      if (user.toLowerCase() === register.user && password === register.password) {
        setStatus(true);
      } else {
        alert("User or Password is wrong");
      }
    });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://st3.depositphotos.com/4478807/36255/i/600/depositphotos_362555846-stock-photo-network-structure-between-people-data.jpg",
      }}
      style={container}
    >
      <SafeAreaView style={containerInputs}>
        {status === false ? (
          <>
            <InputRegistration
              label={"User"}
              state={user}
              setState={setUser}
              placeHolder="Type your user"
            ></InputRegistration>
            <InputRegistration
              label={"Password"}
              state={password}
              setState={setPassword}
              placeHolder="******"
            ></InputRegistration>
          </>
        ) : (
          <Text style={buttonText}>Welcome {user}</Text>
        )}
      </SafeAreaView>
      <Pressable
        style={button}
        onPress={() =>
          status === false ? checkingRegister() : setStatus(false)
        }
      >
        <Text style={buttonText}>
          {status === false ? "Connect" : "Disconect"}
        </Text>
      </Pressable>
    </ImageBackground>
  );
};

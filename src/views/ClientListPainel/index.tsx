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
import { LoginContext } from "../../context/LoginContext";
import { MaterialIcons } from "@expo/vector-icons";

export const ClientListPainel = () => {
  const {
    container,
    clientsContainer,
    clientContainer,
    controllers,
    button,
    clientName,
  } = styles;
  const { navigate } = useNavigation();
  const { status, setStatus, clientList, setClientList } =
    useContext(LoginContext);

  return (
    <SafeAreaView style={container}>
      {clientList.map((client) => {
        return (
          <>
            <View style={clientContainer}>
              <Text style={clientName}>{client.name}</Text>
              <View style={controllers}>
                <Pressable style={button}>
                  <MaterialIcons name="edit" size={30} />
                </Pressable>
                <Pressable style={button}>
                  <MaterialIcons name="delete" size={30} />
                </Pressable>
              </View>
            </View>
          </>
        );
      })}
    </SafeAreaView>
  );
};

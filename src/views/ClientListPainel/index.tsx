import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";
import { LoginContext } from "../../context/LoginContext";
import { MaterialIcons } from "@expo/vector-icons";
import { NoUserConnected } from "../../components/NoUserConnected/Index";

type ClientType = {
  name: string;
  phone: string;
  adress: string;
  email: string;
};

export const ClientListPainel = () => {
  const {
    container,
    clientContainer,
    clientContainerBigger,
    controllers,
    button,
    clientName,
    dataText,
    scrollArea
  } = styles;

  const { status, clientList, setClientList } = useContext(LoginContext);

  const [choiceClient, setChoiceClient] = useState<ClientType>(
    {} as ClientType
  );

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAdress, setNewAdress] = useState("");

  //                FUNCTIONS

  const deleteClient = (selectedClient: ClientType) => {
    const filter = clientList.filter((clients) => clients != selectedClient);
    setClientList(filter);
  };

  const editClientPainel = (selectedClient: ClientType) => {
    setNewName(selectedClient.name);
    setNewPhone(selectedClient.phone);
    setNewEmail(selectedClient.email);
    setNewAdress(selectedClient.adress);
    setChoiceClient(selectedClient);
  };

  const changeDataValueClient = () => {
    let newDataClient = [...clientList];
    newDataClient.map((client) => {
      if (client === choiceClient) {
        client.name = newName;
        client.phone = newPhone;
        client.email = newEmail;
        client.adress = newAdress;
      }
    });
    setClientList(newDataClient);
    setChoiceClient({} as ClientType);
  };

  //            STRUCTURE INPUTS

  const ChoiceClientStructure = clientList.map((client, i) => {
    if (client === choiceClient) {
      return (
        <View style={clientContainerBigger} key={i}>
          <View style={controllers}>
            <TextInput
              style={clientName}
              value={newName}
              onChangeText={(e) => setNewName(e)}
            ></TextInput>

            <View style={controllers}>
              <Pressable onPress={() => changeDataValueClient()} style={button}>
                <MaterialIcons name="check" size={30} color="white" />
              </Pressable>
              <Pressable
                onPress={() => setChoiceClient({} as ClientType)}
                style={button}
              >
                <MaterialIcons name="close" size={30} color="white" />
              </Pressable>
            </View>
          </View>

          <TextInput
            style={dataText}
            value={newPhone}
            onChangeText={(e) => setNewPhone(e)}
          ></TextInput>
          <TextInput
            style={dataText}
            value={newEmail}
            onChangeText={(e) => setNewEmail(e)}
          ></TextInput>
          <TextInput
            style={dataText}
            value={newAdress}
            onChangeText={(e) => setNewAdress(e)}
          ></TextInput>
        </View>
      );
    }
  });

  const OthersClientsStructure = clientList.map((client, i) => {
    if (client !== choiceClient) {
      return (
        <View style={clientContainer} key={i}>
          <Text style={clientName}>{client.name}</Text>
          <View style={controllers}>
            <Pressable onPress={() => editClientPainel(client)} style={button}>
              <MaterialIcons name="edit" size={30} color="white" />
            </Pressable>
            <Pressable onPress={() => deleteClient(client)} style={button}>
              <MaterialIcons name="delete" size={30} color="white" />
            </Pressable>
          </View>
        </View>
      );
    }
  });

  return (
    <ImageBackground
      source={{
        uri: "https://st3.depositphotos.com/4478807/36255/i/600/depositphotos_362555846-stock-photo-network-structure-between-people-data.jpg",
      }}
      style={container}
    >
      {status === true ? (
        <ScrollView style={scrollArea}>
          {[ChoiceClientStructure, OthersClientsStructure]}
        </ScrollView>
      ) : (
        <NoUserConnected />
      )}
    </ImageBackground>
  );
};

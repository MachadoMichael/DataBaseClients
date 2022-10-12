import { SafeAreaView, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const NoUserConnected = () => {
  const { container, msg, button, buttonText } = styles;
  const { navigate } = useNavigation();

  return (
    <>
      <SafeAreaView style={container}>
        <Text style={msg}>
          No user connected, please go to homepage for login.
        </Text>
      </SafeAreaView>
      <Pressable style={button} onPress={() => navigate("Homepage")}>
        <Text style={buttonText}>Homepage</Text>
      </Pressable>
    </>
  );
};

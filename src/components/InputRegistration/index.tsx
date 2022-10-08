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

type Props = {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export const InputRegistration = ({ label, state, setState }: Props) => {
  const { inputs, labelstyle, boxInput } = styles;
  return (
    <View style={boxInput}>
      <Text style={labelstyle}>{label}</Text>
      <TextInput
        style={inputs}
        value={state}
        onChangeText={(e) => setState(e)}
      ></TextInput>
    </View>
  );
};

import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeHolder?: string;
};

export const InputRegistration = ({
  label,
  state,
  setState,
  placeHolder,
}: Props) => {
  const { inputs, labelstyle, containerInput } = styles;
  return (
    <View style={containerInput}>
      <Text style={labelstyle}>{label}</Text>

      {label === "Password" ? (
        <TextInput
          placeholder={placeHolder}
          secureTextEntry={true}
          style={inputs}
          value={state}
          onChangeText={(e) => {
            setState(e.toLowerCase());
          }}
        ></TextInput>
      ) : (
        <TextInput
          placeholder={placeHolder}
          style={inputs}
          value={state}
          onChangeText={(e) => {
            setState(e);
          }}
        ></TextInput>
      )}
    </View>
  );
};

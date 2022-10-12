import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 380,
    height: 60,
    backgroundColor: "rgb(155,55,55)",
    borderRadius: 4,

    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  containerInputs: {
    width: 380,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(15,65,115)",
    borderRadius: 4,
    borderWidth: 1,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  clientsContainer: {
    width: 380,
    backgroundColor: "rgb(15,65,115)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    padding: 30,
  },

  clientContainer: {
    width: 380,
    height: 50,
    backgroundColor: "rgb(155,55,55)",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 2,
  },

  controllers: {
    flexDirection: "row",
  },

  button: {
    marginRight: 5,
  },

  clientName: {
    fontSize: 20,
    marginLeft: 10,
  },
});

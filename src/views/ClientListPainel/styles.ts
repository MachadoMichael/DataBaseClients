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

  clientContainerBigger: {
    width: 380,
    height: 200,
    backgroundColor: "rgb(55,55,155)",
    justifyContent: "space-between",
    borderWidth: 4,
    borderColor: "black",
    marginBottom: 2,
    paddingTop: 10,
    paddingBottom: 10,
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
    justifyContent: "space-between",
  },

  button: {
    marginRight: 5,
  },

  clientName: {
    fontSize: 20,
    marginLeft: 10,
    color: "white",
  },

  dataText: {
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
});

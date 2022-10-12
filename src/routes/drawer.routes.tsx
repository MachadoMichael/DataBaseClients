import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "../views/Home";
import { RegisterForm } from "../views/RegisterForm";
import { ClientListPainel } from "../views/ClientListPainel";
import { color } from "react-native-reanimated";

const { Screen, Navigator } = createDrawerNavigator();
export const DrawerRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "rgb(15,65,115)",
        },
        drawerLabelStyle: {
          color: "white",
        },

        headerStyle: {
          backgroundColor: "rgb(15,65,115)",
        },
        headerTintColor: "white",
      }}
    >
      <Screen
        name="Homepage"
        component={Home}
        options={{
          drawerLabel: "Homepage",
          drawerIcon: () => (
            <MaterialIcons name="home" size={22} color="#FFF" />
          ),
        }}
      />

      <Screen
        name="Register Form"
        component={RegisterForm}
        options={{
          drawerLabel: "Registration",
          drawerIcon: () => (
            <MaterialIcons name="app-registration" size={22} color="#FFF" />
          ),
        }}
      />
      <Screen
        name="Client List"
        component={ClientListPainel}
        options={{
          drawerLabel: "Client List",
          drawerIcon: () => (
            <MaterialIcons name="people" size={22} color="#FFF" />
          ),
        }}
      />
    </Navigator>
  );
};

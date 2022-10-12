import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "../views/Home";
import { RegisterForm } from "../views/RegisterForm";
import { ClientListPainel } from "../views/ClientListPainel";

const { Screen, Navigator } = createDrawerNavigator();
export const DrawerRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Homepage"
        component={Home}
        options={{
          drawerLabel: "Homepage",
          drawerIcon: () => <MaterialIcons name="home" size={22} />,
        }}
      />

      <Screen
        name="Register Form"
        component={RegisterForm}
        options={{
          drawerLabel: "Registration",
          drawerIcon: () => <MaterialIcons name="app-registration" size={22} />,
        }}
      />
      <Screen
        name="Client List"
        component={ClientListPainel}
        options={{
          drawerLabel: "Client List",
          drawerIcon: () => <MaterialIcons name="people" size={22} />,
        }}
      />
    </Navigator>
  );
};

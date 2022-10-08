import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { RegisterForm } from "../views/RegisterForm";

const { Screen, Navigator } = createDrawerNavigator();
export const DrawerRoutes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Inicial",
          drawerIcon: () => <MaterialIcons name="home" size={22} />,
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          drawerLabel: "Login",
          drawerIcon: () => <MaterialIcons name="login" size={22} />,
        }}
      />
      <Screen
        name="RegisterForm"
        component={RegisterForm}
        options={{
          drawerLabel: "Registration",
          drawerIcon: () => <MaterialIcons name="app-registration" size={22} />,
        }}
      />
    </Navigator>
  );
};

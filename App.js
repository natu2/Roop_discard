//React & Other Libary Imports
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Styles, Icons, Illustrations

//Project File Imports
import NavBar from "./components/NavBar";
import { EmptyScreen } from "./screens/placeholders/EmptyScreen";
import { Login } from "./screens/Login";

const Bar = createBottomTabNavigator();

/**
 * So far, just an empty page with navigation to other empty pages.
 * For my own understanding: Both external libraries are helping with navigation
 * between several different screens so that I am not writing code that ineffectively
 * renders views one top of the other. In this case, we use the bottom-tabs component Bar to pass in a function that returns the element
 * that is actually the bar (we already created this component in NavBar.js). toBar accepts a function,
 * not a react element- hence the syntax.
 * @returns The main view for the app
 */
export default function App() {
  return (
    <NavigationContainer>
      <Bar.Navigator tabBar={(props) => <NavBar {...props} />}>
        <Bar.Screen name="Login" component={Login} />
        <Bar.Screen name="page 1" component={EmptyScreen} />
        <Bar.Screen name="page 2" component={EmptyScreen} />
        <Bar.Screen name="page 3" component={EmptyScreen} />
      </Bar.Navigator>
    </NavigationContainer>
  );
}

//default
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

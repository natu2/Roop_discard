//React & Other Libary Imports
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Styles, Icons, Illustrations
import styles from "../styles";

//Project File Imports

/**
 * Creates the bottom navigation bar for getting aroun the app.
 * @props: navigation should be a component from the bottom-tabs library passed
 *         By using the screen name, the library takes care of changing the page.
 * Loading a whole new view or repeatedly creating a view on top of the existing one
 * will slow the runtime of the app and eventually result in a crash.
 * Sources: https://reactnavigation.org/docs/bottom-tab-navigator/
 */

const NavBar = ({ navigation }) => {
  // Helper Functions- Action Event
  const handleNavigate = (screenName) => {
    return navigation.navigate(screenName);
  };

  // ACTUAL COMPONENT RETURNED
  /** ABOUT TouchableOpacity is simply a View component that dims when touched.
   * We are basically returning a view, with 4 views within in that each have an
   * action listener (onPress) attached to it */
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleNavigate("Login")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleNavigate("page 1")}
      >
        <Text>page 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleNavigate("page 2")}
      >
        <Text>page 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => handleNavigate("page 3")}
      >
        <Text>page 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

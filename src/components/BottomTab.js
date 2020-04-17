import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function BottomTab(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.btnWrapper1}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <MaterialCommunityIconsIcon
          name="home-variant"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnWrapper2}
        onPress={() => {
          props.navigation.navigate("Chat");
        }}
      >
        <MaterialCommunityIconsIcon
          name="message-processing"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Text}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnWrapper3}
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      >
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(33,182,139,100)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12,
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
    width: 24,
    height: 24,
  },
  btn1Text: {
    width: 45,
    height: 14,
    color: "#FFFFFF",
    alignSelf: "center",
    opacity: 0.8,
    textAlign: "center",
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12,
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
    width: 24,
    height: 24,
  },
  btn2Text: {
    width: 39,
    height: 14,
    color: "#FFFFFF",
    opacity: 0.8,
    textAlign: "center",
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12,
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
  },
  btn3Text: {
    color: "#FFFFFF",
    opacity: 0.8,
  },
});

export default BottomTab;

// import React, { Component } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import ProfileScreen from "../screens/ProfileScreen";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import HomeScreen from "../screens/HomeScreen";

// const Tab = createBottomTabNavigator();

// export default class BottomTab extends Component {
//   render() {
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color }) => {
//             let iconName;
//             if (route.name === "Home") {
//               color = focused ? "#ff5722" : "grey";
//               iconName = "home";
//             } else if (route.name === "Category") {
//               color = focused ? "#ff5722" : "grey";
//               iconName = "featured-play-list";
//             } else if (route.name === "Favorite") {
//               color = focused ? "#ff5722" : "grey";
//               iconName = "favorite";
//             } else if (route.name === "Profile") {
//               color = focused ? "#ff5722" : "grey";
//               iconName = "person";
//             }

//             // You can return any component that you like here!
//             return <Icon name={iconName} size={25} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "#ff5722",
//           inactiveTintColor: "grey",
//           showIcon: true,
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Category" />
//         <Tab.Screen name="Favorite" />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     );
//   }
// }

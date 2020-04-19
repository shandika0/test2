// import React, { Component } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import ProfileScreen from "../screens/ProfileScreen";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import HomeScreen from "../screens/HomeScreen";
// import ChatScreen from "./ChatScreen";

// const Tab = createBottomTabNavigator();

// export default class Tokokam extends Component {
//   render() {
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color }) => {
//             let iconName;
//             if (route.name === "Home") {
//               color = focused ? "#ff5722" : "grey";
//               iconName = "home";
//             } else if (route.name === "Chat") {
//               color = focused ? "#ff5722" : "grey";
//               iconName = "featured-play-list";
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
//         <Tab.Screen name="Chat" component={ChatScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     );
//   }
// }

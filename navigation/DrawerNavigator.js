import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../pages/Feed";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
<Drawer.Navigator
            initialRouteName="Feed"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#FB8DA0",
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#FFFFFF",
                },
                drawerStyle: {
                    backgroundColor: "#FFFFFF",
                    width: 260,
                },
                drawerActiveTintColor: "#FB6B90",
                drawerInactiveTintColor: "#6B7280",
                drawerLabelStyle: {
                    fontSize: 16,
                    marginLeft: -5,
                    fontWeight: "500",
                },
                drawerType: "slide",
                overlayColor: "#00000020",
            }}
        >
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="book" size={24} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../pages/Feed";
import Feedback from "../pages/Feedback";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: "#DA387C",
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#000",
            }}
        >
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Feedback"
                component={Feedback}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbubble-outline" size={24} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import DrawerNavigator from "./DrawerNavigator";
import Home from "../pages/Home";
import Feed from "../pages/Feed"; 

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
        </Stack.Navigator>
    );
}
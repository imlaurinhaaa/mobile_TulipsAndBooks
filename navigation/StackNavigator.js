import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }} 
            />

            <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ headerShown: false }} 
            />

            <Stack.Screen 
            name="Feed" 
            component={DrawerNavigator}
            options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}
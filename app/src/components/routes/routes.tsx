/**
 * @file routes.tsx
 * @description This file contains the routing configuration for the VIDA app.
 * It uses React Navigation to define the navigation structure and screens of the app.
 * * The app includes screens for Home, Nosotros (About Us), Productos (Products), Automatizacion (Automation),
 * Luces (Lights), and Seguridad (Security).
 * * Each screen is defined as a component and is registered in the stack navigator.
 * * The NavigationContainer wraps the stack navigator to manage the navigation state.
 * * The initial route is set to 'Home'.
 * * The header is hidden for all screens.
 */
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Automatizacion from '../../(tabs)/automatizacion';
import Luces from '../../(tabs)/luces';
import Seguridad from '../../(tabs)/seguridad';
import HomeScreen from '../../views/home';
import OurScreen from '../../views/nosotros';
import ProductsScreen from '../../views/productos';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'
                    screenOptions={{ headerTintColor: '#000', headerShown: false }}>
                    <Stack.Screen name='Home' component={HomeScreen}/>
                    <Stack.Screen name='Nosotros' component={OurScreen} />
                    <Stack.Screen name='Productos' component={ProductsScreen} />
                    <Stack.Screen name='Automatizacion' component={Automatizacion} />
                    <Stack.Screen name='Luces' component={Luces} />
                    <Stack.Screen name='Seguridad' component={Seguridad} />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}

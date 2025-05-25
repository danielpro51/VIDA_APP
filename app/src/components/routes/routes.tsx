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

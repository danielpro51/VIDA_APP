/**
 * @file This file contains the Productos component, which displays a list of products with descriptions and navigation options.
 * It uses React Navigation for navigation and Animated API for fade-in effect.
 * It includes a header, footer, and a scrollable view for better user experience.
 */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RootStackParams } from '@/app/types';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import Footer from '../../utils/footer';
import Header from '../../utils/header';
type Auto = NativeStackNavigationProp<RootStackParams, 'Automatizacion'>;
export default function Productos() {
    const { navigate } = useNavigation<Auto>();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{opacity: fadeAnim, backgroundColor: '#EEE6F3', flex:1}}>
            <ScrollView>
                <Header />
                {/* Descripción General */}
                <View style={styles.introContainer}>
                    <Text style={styles.sectionTitle}>Descubre Nuestros Productos</Text>
                    <Text style={styles.sectionContent}>
                        Nuestro catálogo está diseñado para mejorar la calidad de vida con tecnología avanzada y accesible.
                        Explora nuestras soluciones en iluminación, automatización y seguridad.
                    </Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.content}>
                        {/* Producto: Luces */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Luces</Text>
                            <Text style={styles.cardContent}>
                                Iluminación inteligente que se adapta a tus necesidades, optimizando confort y eficiencia.
                            </Text>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => {navigate('Luces')}}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                        
                        {/* Producto: Automatización */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Automatización</Text>
                            <Text style={styles.cardContent}>
                                Control total de tus espacios con tecnología avanzada, garantizando sincronización perfecta.
                            </Text>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => {navigate('Automatizacion')}}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Producto: Seguridad */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Seguridad</Text>
                            <Text style={styles.cardContent}>
                                Protección inteligente con monitoreo en tiempo real y respuestas automatizadas.
                            </Text>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => {navigate('Seguridad')}}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    card: {
        backgroundColor: 'rgb(111, 50, 177)',
        padding: 12,
        margin: 20,
        alignItems: 'center',
        borderRadius: 12,
        shadowColor: '#5e2b96',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 8,
        boxShadow: 'inset -25px 25px 50px #803acc',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardContent: {
        textAlign: 'justify',
        flexWrap: 'wrap',
        maxWidth: 170,
        padding: 12,
        fontSize: 14,
        color: 'rgb(255, 255, 255)',
    },
    cardBtn: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: 'rgb(146, 58, 240)',
        borderRadius: 8,
    },
    cardBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    introContainer: {
        padding: 20,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 12,
    },
    sectionContent: {
        textAlign: 'center',
        color: '#333',
        fontSize: 16,
        maxWidth: 300,
    },
});

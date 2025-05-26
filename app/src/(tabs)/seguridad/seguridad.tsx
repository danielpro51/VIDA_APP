/**
 * @file seguridad.tsx
 * @description This file contains the Seguridad (Security) screen for the VIDA app.
 * It showcases the VIDA Sentinel security solutions, including product descriptions and images.
 */
import { ViewColors } from '@/constants/Colors';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Card from '../../utils/card';
import Footer from '../../utils/footer';
import Header from '../../utils/header';

const ale = require("@/assets/images/alert.png");

export default function Seguridad(){
    return(
        <ScrollView style={{backgroundColor: '#EEE6F3'}}>
            <Header />
            <View style={styles.secuContainer}>
                <Text style={styles.title}>VIDA Sentinel</Text>
                <Image source={ale} style={styles.img}/>
                <Text style={styles.inf}>VIDA plantea soluciones de seguridad integral funcionales, confortables y confiables. Adaptándose a las necesidades tecnológicas del comprador. Así, nace VIDA Sentinel, sistemas de seguridad con estética minimalista integrados en paredes, techos y suelos, formando simbiosis con la casa.</Text>
                <Text style={styles.inf}>La tecnología ha trascendido lo funcional para convertirse en una extensión del bienestar. VIDA no es solo automatización: es sincronía perfecta entre usuario y entorno, donde cada sistema responde con precisión y elegancia a cada necesidad del hogar.</Text>
                <Text style={styles.title}>Productos</Text>
                <View style={styles.cardWrapper}>
                    <Card title="VIDA Sentinel Guard" content='Vigilancia activa con respuesta inmediata.' />
                    <Card title="VIDA Sentinel Aegis Control" content='Defensa integral para construcciones inteligentes.' />
                    <Card title="VIDA Sentinel Bastion Secure" content='Seguridad avanzada con detección de precisión.' />
                    <Card title="VIDA Sentinel Defensor Core" content='Seguridad proactiva con integración IoT.' />
                    <Card title="VIDA Safeguard Pulse" content='Respuesta instantánea ante situaciones de respuesta rápida.' />
                    <Card title="VIDA Sentinel Haven Lock" content='Protección de accesos con tecnología biométrica' />
                    <Card title="VIDA Sentinel Guardian Vision" content='Monitoreo con visión extendida y reconocimiento de objetos.' />
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    secuContainer:{
        alignItems: 'center',
    },
    img:{
        width: 480,
        height: 280,
        marginHorizontal: 80,
        borderRadius: 10,
        shadowColor: ViewColors.shadow,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: ViewColors.primary,
        marginVertical: 20,
    },
    inf:{
        maxWidth: 580,
        maxHeight: 'auto',
        fontSize: 14,
        flexWrap: 'wrap',
        borderLeftWidth: 2,
        borderLeftColor: ViewColors.primary,
        padding: 8,
        marginVertical: 8,
        textAlign: 'justify',
        color: ViewColors.contrast,
    },
    cardWrapper:{
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 12,
    },

});
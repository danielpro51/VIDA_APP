/**
 * @file automatizacion.tsx
 * @description This file contains the Automatizacion (Automation) screen for the VIDA app.
 * It showcases the VIDA Flux automation solutions, including product descriptions and images.
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

const ale = require("@/assets/images/ai.png");

export default function Automatizacion(){
    return(
        <ScrollView style={{backgroundColor: '#EEE6F3'}}>
            <Header />
            <View style={styles.secuContainer}>
                <Text style={styles.title}>VIDA Flux</Text>
                <Image source={ale} style={styles.img}/>
                <Text style={styles.inf}>VIDA Lux revoluciona la conectividad inteligente, diseñando sistemas de automatización que se sincronizan con tu entorno. Con un enfoque elegante y funcional, nace VIDA Flux, donde cada tecnología fluye sin esfuerzo para optimizar tu día a día.</Text>
                <Text style={styles.inf}>La automatización no es solo comodidad, es la perfecta integración entre el usuario y la tecnología. VIDA Flux responde de manera intuitiva, adaptándose a tus necesidades y creando una experiencia fluida y conectada.</Text>
                <Text style={styles.title}>Productos</Text>
                <View style={styles.cardWrapper}>
                    <Card title="VIDA Flux Core" content='Cerebro cental autómata, gestor de dispositivos y procesos inteligentes precisos y eficientes.' />
                    <Card title="VIDA Flux Pulse" content='Monitoreo de sistemas en tiempo real con respuesta adaptativa.' />
                    <Card title="VIDA Flux Nexus" content='Conexión sin interrupciones entre IoT y el hogar, asegurando un ecosistema automatizado.' />
                    <Card title="VIDA Flux Surge" content='Optimización del consumo energético, proporcionando energía justo cuando se necesita.' />
                    <Card title="VIDA Flux Orbit" content='Gestión a escala, control total sobre espacios dinámicos.' />
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
        flexWrap: 'wrap',
        width: 580,
        height: 480,
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

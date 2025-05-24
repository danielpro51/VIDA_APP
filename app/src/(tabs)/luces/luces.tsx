import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Card from '../../utils/card';
import Footer from '../../utils/footer';
import Header from '../../utils/header';

const relax1 = require("../../../../assets/images/momentrelax.png");
const relax2 = require("../../../../assets/images/relaxing.png");

export default function Luces() {
    return (
        <ScrollView style={{backgroundColor:'#EEE6F3'}}>
            <Header />

            {/* Sección de Introducción */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>VIDA Lux</Text>
                <View style={styles.infoContainerC}>
                    <Text style={styles.infoText}>Bienvenidos a una era donde el avance tecnológico es masivo. La tecnología se hace presente en cada uno de nuestros aspectos diarios: ahora llega a los hogares. Nuestra serie VIDA Lux conecta bienestrar y cuidado.</Text>
                    <Image source={relax1} style={styles.img}/>
                </View>
                <View style={styles.infoContainerC}>
                    <Image source={relax2} style={styles.img} />
                    <Text style={styles.infoText}> Desde el descubrimiento de la electricidad, la humanidad soñó con iluminar la noche. En 1879, Thomas Edison presentó su bombilla incandescente, revolucionando la forma en que vivimos. Lo que antes eran lámparas de gas y velas, se convirtió en un sistema confiable y accesible. Hoy, la luz ha evolucionado más allá de un simple interruptor: con la domótica, las luces inteligentes se adaptan a nuestras rutinas, responden a comandos de voz y optimizan el consumo de energía. VIDA Lux no solo ilumina espacios, sino que transforma ambientes, haciendo cada hogar más eficiente, confortable y conectado.</Text>

                </View>
            </View>
                <Text style={[styles.infoTitle,{alignSelf:'center'}]}>Productos</Text>
            {/* Tarjetas de Productos */}
            <View style={styles.cardWrapper}>
                {/* Modelos Existentes */}
                <Card title='VIDA Lux 75X' content='Iluminación con control por voz y regulación automática.' />
                <Card title='VIDA Lux Neo 95T' content='Bombilla inteligente con temperatura ajustable.' />
                <Card title='VIDA Lux Stellar X7' content='Iluminación modular con control remoto.' />
                <Card title='VIDA Lux Prisma 22B' content='Sistema RGB con efectos dinámicos personalizados.' />
                <Card title='VIDA Lux Nova 78A' content='Focos exteriores resistentes a condiciones climáticas.' />
                <Card title='VIDA Lux Eclipse 50X' content='Iluminación ambiental con efecto halo.' />
                <Card title='VIDA Lux Quantum 88T' content='Luces modulares con ajuste de temperatura.' />
                <Card title='VIDA Lux Spectrum 99B' content='Iluminación RGB con integración IoT.' />
                <Card title='VIDA Lux HyperBeam 21Z' content='Focos LED de alta potencia para exteriores.' />
            </View>
            <Footer />
        </ScrollView>
    );
}
const colors = {
    backgroundMain: '#F5FCFF',
    primary: '#4B0082',
    secondary: '#E396FF',
    contrast: '#2C2C2C',
    softBackground: '#EEE6F3',
    shadow: 'rgba(75, 0, 130, 0.2)',
    modalBackground: 'rgba(68, 83, 91, 0.5)',
    modalBorder: '#5C5C5C',
    modalButton: '#811F1F',
};

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 16,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: colors.softBackground,
    },
    infoTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.primary,
        marginVertical: 20,
    },
    infoContainerC:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText:{
        maxWidth: 400,
        maxHeight: 'auto',
        fontSize: 14,
        flexWrap: 'wrap',
        borderLeftWidth: 2,
        borderLeftColor: colors.primary,
        padding: 8,
        textAlign: 'justify',
        color: colors.contrast,
    },
    img:{
        width: 280,
        height: 280,
        marginHorizontal: 80,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    cardWrapper: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 12,
    },
});
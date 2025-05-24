import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Card from '../../utils/card';
import Footer from '../../utils/footer';
import Header from '../../utils/header';



export default function Luces() {
    return (
        <ScrollView>
            <Header />

            {/* Sección de Introducción */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>VIDA Lux</Text>
                <View style={styles.infoContainerC}>
                    <Text>Bienvenidos a una era donde el avance tecnológico es masivo. La tecnología se hace presente en cada uno de nuestros aspectos diarios: ahora llega a los hogares. Nuestra serie VIDA Lux conecta bienestrar y cuidado.</Text>
                    <Image />
                </View>
                <View style={styles.infoContainerC}>
                    <Text> Desde el descubrimiento de la electricidad, la humanidad soñó con iluminar la noche. En 1879, Thomas Edison presentó su bombilla incandescente, revolucionando la forma en que vivimos. Lo que antes eran lámparas de gas y velas, se convirtió en un sistema confiable y accesible. Hoy, la luz ha evolucionado más allá de un simple interruptor: con la domótica, las luces inteligentes se adaptan a nuestras rutinas, responden a comandos de voz y optimizan el consumo de energía. VIDA Lux no solo ilumina espacios, sino que transforma ambientes, haciendo cada hogar más eficiente, confortable y conectado.</Text>

                </View>
            </View>
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

// Estilos
const styles = StyleSheet.create({
    infoContainer: {
        padding: 16,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 16,
        marginHorizontal: 15,
    },
    infoTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 6,
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

import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const items = [
    { title: "VIDA Flux Core", text: "El centro neurálgico de la automatización.", img: require('@/assets/images/alert.png') },
    { title: "VIDA Flux Pulse", text: "Respuesta intuitiva en tiempo real.", img: require('@/assets/images/alert.png') },
    { title: "VIDA Flux Nexus", text: "Conectividad fluida entre dispositivos.", img: require('@/assets/images/alert.png') },
];

const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
    </View>
);

export default function Carrusel() {
    return (
        <Carousel
            data={items}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width * 0.8}
            loop={true}
            autoplay={true}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        color: '#2C2C2C',
        textAlign: 'center',
        maxWidth: 250,
    },
});

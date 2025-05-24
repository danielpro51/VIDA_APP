import React, { useRef } from 'react';
import { Animated, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type props = {
    title: string,
    content: string,
};

const whatsappNumber = "3138862862";
const message = "Hola, estoy aquí en compra del kit ";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function Card({title, content}: props) {
    // Crear animaciones individuales para cada tarjeta
    const buttonOpacity1 = useRef(new Animated.Value(0)).current;
    const buttonTranslateY1 = useRef(new Animated.Value(30)).current;

    const handleHover = (hover, opacity, translateY) => {
        Animated.timing(opacity, {
            toValue: hover ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(translateY, {
            toValue: hover ? 0 : 30,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <View style={styles.cardWrapper}>
                <View
                    style={styles.cardContainer}
                    onMouseEnter={() => handleHover(true, buttonOpacity1, buttonTranslateY1)}
                    onMouseLeave={() => handleHover(false, buttonOpacity1, buttonTranslateY1)}
                >
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardContent}>{content}</Text>
                    <Animated.View style={[styles.cardBtn, { opacity: buttonOpacity1, transform: [{ translateY: buttonTranslateY1 }] }]}>
                        <TouchableOpacity onPress={() => {Linking.openURL(`${whatsappLink}?text=${encodeURIComponent(message)}${title}`)}}>
                            <Text style={styles.cardBtnText}>Comprar</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    cardContainer: {
        width: 200,
        height: 260,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        boxShadow: 'inset 2px 2px 7px rgb(73, 66, 78)',
        elevation: 8,
        position: 'relative',
        padding: 12,
        margin: 12,
        borderWidth: 2,
        borderColor: '#c3c6ce',
        alignItems: 'center',
        transition: 'all 0.3s ease-in-out',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333',
    },
    cardContent: {
        color: 'rgb(134,134,134)',
        textAlign: 'center',
        maxWidth: 180,
        fontSize: 14,
        marginVertical: 6,
    },
    cardBtn: {
        width: '60%',
        backgroundColor: '#008bf8',
        color: '#fff',
        fontSize: 14,
        padding: 8,
        position: 'absolute',
        left: '50%',
        bottom: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    cardBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

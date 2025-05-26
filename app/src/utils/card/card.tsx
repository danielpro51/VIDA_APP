/**
 * @file card.tsx
 * @description This file contains the Card component for displaying product information in the VIDA app.
 * It includes a title, content, and a button that opens a WhatsApp link to inquire about the product price.
 * It uses React Native's Animated API for hover effects and styles the card with a modern design.
 * The card is designed to be responsive and visually appealing, with a focus on user interaction.
 * * The card includes a hover effect that animates the button's opacity and position when the user hovers over it.
 * * The button opens a WhatsApp link with a pre-filled message to inquire about the product price.
 * * The card is styled with a modern design, including shadows, rounded corners, and a responsive layout.
 * * The component is reusable and can be used to display different products by passing different props.
 * @version 1.0.0
 */
import React, { useRef } from 'react';
import { Animated, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type props = {
    title: string,
    content: string,
};

const whatsappNumber = "3138862862";
const message = "Hola, estoy aquí para consultar el precio del kit ";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function Card({title, content}: props) {
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
            <View
                style={styles.cardContainer}
                onMouseEnter={() => handleHover(true, buttonOpacity1, buttonTranslateY1)}
                onMouseLeave={() => handleHover(false, buttonOpacity1, buttonTranslateY1)}
            >
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardContent}>{content}</Text>
                <Animated.View style={[styles.cardBtn, { opacity: buttonOpacity1, transform: [{ translateY: buttonTranslateY1 }] }]}>
                    <TouchableOpacity onPress={() => {Linking.openURL(`${whatsappLink}?text=${encodeURIComponent(message)}${title}`)}}>
                        <Text style={styles.cardBtnText}>Facturar precio</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    cardContainer: {
        width: 200,
        height: 260,
        borderRadius: 20,
        backgroundColor: 'rgb(255, 255, 255)',
        shadowColor: 'rgb(211, 192, 225)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        boxShadow: 'inset 2px 2px 7px rgb(243, 227, 255)',
        position: 'relative',
        padding: 12,
        margin: 12,
        borderWidth: 1,
        borderColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardTitle: {
        color: 'rgb(159, 75, 219)',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardContent: {
        color: 'rgb(134, 134, 134)',
        textAlign: 'center',
        maxWidth: 180,
        fontSize: 14,
        marginVertical: 6,
    },
    cardBtn: {
        width: '60%',
        backgroundColor: 'rgb(172, 101, 226)',
        shadowColor: 'rgb(80, 0, 114)',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
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

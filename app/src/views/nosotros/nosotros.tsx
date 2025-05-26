/**
 * @file This file contains the Nosotros component, which is part of the VIDA app.
 * @description The component displays a series of slides that describe the VIDA philosophy and products.
 * It uses a carousel for navigation between slides and includes a fade-in animation effect.
 * It also includes a button to navigate back to the Home screen.
 */
import { RootStackParams } from '@/app/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Carousel from "pinar";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export { RootStackParams } from "@/app/types";
type HomeScreen = NativeStackNavigationProp<RootStackParams, 'Home'>;

export default function Nosotros(){
    const { navigate } = useNavigation<HomeScreen>();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <Carousel 
                loop={false}
                showsControls={false}
                showsDots={false}
                automaticallyAdjustContentInsets={true}
            >
                <View style={[styles.slide, styles.slide1]}>
                    <Text style={styles.text}>VIDA es más que automatización. Es la apertura a una revolución. La Revolución Automática.</Text>
                </View>
                <View style={[styles.slide, styles.slide2]}>
                    <Text style={styles.text}>En VIDA, creamos ecosistemas donde tecnología y estética se fusionan.</Text>
                </View>
                <View style={[styles.slide, styles.slide3]}>
                    <Text style={styles.text}>Cada espacio responde de manera adaptativa y dinámica según el ambiente.</Text>
                </View>
                <View style={[styles.slide, styles.slide4]}>
                    <Text style={styles.text}>VIDA redefine la automatización con precisión y diseño impecable.</Text>
                </View>
                <View style={[styles.slide, styles.slide5]}>
                    <Text style={styles.text}>Bienvenido a la sincronía perfecta entre usuario y entorno.</Text>
                    <TouchableOpacity onPress={() => {
                        navigate('Home');
                    }} style={styles.btn}>
                        <Text style={styles.text}>Inicio</Text>
                    </TouchableOpacity>
                </View>
            </Carousel>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  slide1: { backgroundColor: "rgb(7, 0, 15)" },
  slide2: { backgroundColor: "rgb(44, 16, 75)" },
  slide3: { backgroundColor: "rgb(69, 43, 95)" },
  slide4: { backgroundColor: "rgb(109, 74, 147)" },
  slide5: { backgroundColor: "rgb(144, 113, 177)" },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: 500,
    lineHeight: 30,
  },
  btn:{
    marginVertical: 20,
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(86, 68, 91, 0.5)',
  }
});

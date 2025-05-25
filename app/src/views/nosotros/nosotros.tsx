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

    // Animación de Fade-in
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200, // Duración en ms
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
  slide1: { backgroundColor: "#000000" },
  slide2: { backgroundColor: "#1A1A1A" },
  slide3: { backgroundColor: "#333333" },
  slide4: { backgroundColor: "#4B0082" },
  slide5: { backgroundColor: "rgb(194, 156, 235)" },
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

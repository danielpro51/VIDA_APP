import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import {
    Animated,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { ViewColors } from '@/constants/Colors';
import Footer from '../../utils/footer';
import Header from '../../utils/header';

const logo = require('@/assets/images/logo.jpg');
const factory = require('@/assets/images/factory.png');
const office = require('@/assets/images/office.png');
const home = require('@/assets/images/smartHome.png');

export default function Home() {
    const [modalIndustry, setModalIndustry] = useState(false);
    const [modalCompany, setModalCompany] = useState(false);
    const [modalHome, setModalHome] = useState(false);

    const fadeAnim = new Animated.Value(0);
    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    });

    function onPressFactoryModal(){
        setModalIndustry(!modalIndustry);
    };
    function onPressApartmentModal(){
        setModalCompany(!modalCompany);
    };
    function onPressHomeModal(){
        setModalHome(!modalHome);
    };
    return (
        <View style={styles.container}>
            {/* Modal industria */}
            <Modal visible={modalIndustry} animationType='fade' transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContainerView}>
                        <Image source={factory} style={styles.modalImg}/>
                        <Text style={styles.modalText}>En la industria moderna, VIDA ofrece integración IoT avanzada para optimizar procesos, mejorar la eficiencia y reducir costos operativos.  
                Desde sistemas de control automatizado hasta monitoreo en tiempo real, VIDA Lux redefine la producción con automatización intuitiva.</Text>
                        <TouchableOpacity style={styles.modalContainerClose} onPress={() => {
                            setModalIndustry(!modalIndustry)
                        }}><Text>X</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* Modal empresa */}
            <Modal visible={modalCompany} animationType='fade' transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContainerView}>
                        <Image source={office} style={styles.modalImg}/>
                        <Text style={styles.modalText}>VIDA revoluciona la gestión empresarial, permitiendo espacios inteligentes que optimizan seguridad, iluminación y comunicación interna.  
                Oficinas con automatización personalizada, control remoto y tecnología de adaptación crean entornos dinámicos y altamente productivos.</Text>
                        <TouchableOpacity style={styles.modalContainerClose} onPress={() => {
                            setModalCompany(!modalCompany)
                        }}><Text>X</Text></TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>
            {/* Modal hogar */}
            <Modal visible={modalHome} animationType='fade' transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContainerView}>
                        <Image source={home} style={styles.modalImg}/>
                        <Text style={styles.modalText}>En casa, la tecnología de VIDA transforma el hogar en un espacio inteligente y armonioso.  
                Control total de iluminación, seguridad avanzada, y asistentes automatizados que responden a la rutina diaria.  
                Con VIDA Lux, cada acción fluye con precisión y comodidad.</Text>
                        <TouchableOpacity style={styles.modalContainerClose} onPress={() => {
                            setModalHome(!modalHome)
                        }}><Text>X</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <Header />
                <Animated.View style={[styles.containerMain, {opacity: fadeAnim}]}>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>VIDA</Text>
                        <Text style={styles.subtitle}>En un mundo cada vez más acelerado, la verdadera innovación está en aquello que nos permite detenermos y vivir mejor.</Text>
                    </View>
                    <Image source={logo} style={styles.imgLogo} />
                </Animated.View>

                {/* Sección Características */}
                <Animated.View style={[styles.containerMid, {opacity: fadeAnim}]}>
                    <Text style={styles.sectionTitle}>Características</Text>
                    <View style={styles.characteristicsContainer}>
                        {[
                            { title: "Automatización", content: "Sistemas que responden intuitivamente a cada necesidad, adaptándose al usuario." },
                            { title: "Seguridad", content: "Protección avanzada con monitoreo inteligente y respuestas automáticas." },
                            { title: "Confort", content: "Experiencia fluida donde la tecnología mejora el bienestar sin esfuerzo." },
                            { title: "Eficiencia Energética", content: "Reducción del consumo sin afectar la comodidad del usuario." }
                        ].map((item, index) => (
                            <View key={index} style={styles.card}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <Text style={styles.cardContent}>{item.content}</Text>
                            </View>
                        ))}
                    </View>
                </Animated.View>
                {/* Sección Aplicaciones Reales */}
                <Animated.View style={[styles.containerMid, {opacity: fadeAnim}]}>
                    <Text style={styles.sectionTitle}>Aplicaciones Reales</Text>
                    <View style={styles.appContainer}>
                        <TouchableOpacity style={styles.containerApp} activeOpacity={0.7} onPress={onPressFactoryModal}>
                            <MaterialIcons name={"factory"} size={32} color="#6A0DAD"/>
                            <Text style={styles.cardTitle}>Industria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerApp} activeOpacity={0.7} onPress={onPressApartmentModal}>
                            <MaterialIcons name={"apartment"} size={32} color="#6A0DAD"/>
                            <Text style={styles.cardTitle}>Empresa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerApp} activeOpacity={0.7} onPress={onPressHomeModal}>
                            <MaterialIcons name={"home"} size={32} color="#6A0DAD"/>
                            <Text style={styles.cardTitle}>Hogar</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                {/* Sección Testimonios */}
                <Animated.View style={[styles.containerMid, {opacity: fadeAnim}]}>
                    <Text style={styles.sectionTitle}>Testimonios</Text>
                    <View style={styles.testimonialsContainer}>
                        {[
                            { user: "Juan Pérez", content: "VIDA transformó mi hogar en un espacio inteligente y adaptativo." },
                            { user: "María Rodríguez", content: "Gracias a VIDA, mi empresa es más eficiente y segura." },
                            { user: "Carlos Gómez", content: "Nunca imaginé que la automatización pudiera ser tan intuitiva." }
                        ].map((testimonio, index) => (
                            <View key={index} style={styles.testimonialCard}>
                                <Text style={styles.cardTitle}>{testimonio.user}</Text>
                                <Text style={styles.cardContent}>{testimonio.content}</Text>
                            </View>
                        ))}
                    </View>
                </Animated.View>

                {/* Footer */}
                <Footer />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE6F3',
    },
    containerMain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    textContainer: {
        alignItems: 'center',
        flex: 1,
    },
    imgLogo: {
        borderRadius: 18,
        width: 320,
        height: 320,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: ViewColors.primary,
        textAlign: 'center',
        marginVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 4,
    },
    containerMid: {
        alignItems: 'center',
        marginVertical: 20,
    },
    characteristicsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: 240,
        padding: 16,
        backgroundColor: ViewColors.secondary,
        borderRadius: 12,
        margin: 8,
        shadowColor: ViewColors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: ViewColors.primary,
        marginBottom: 6,
    },
    cardContent: {
        fontSize: 14,
        color: ViewColors.contrast,
        textAlign: 'justify',
    },
    appContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    containerApp: {
        width: 'auto',
        alignItems: 'center',
        padding: 12,
        backgroundColor: ViewColors.secondary,
        borderRadius: 12,
        margin: 8,
        shadowColor: ViewColors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    testimonialsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    testimonialCard: {
        width: 250,
        padding: 16,
        backgroundColor: ViewColors.secondary,
        borderRadius: 12,
        margin: 8,
        shadowColor: ViewColors.primary,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: ViewColors.primary,
        marginVertical: 12,
    },
    subtitle: {
        flexWrap: 'wrap',
        fontSize: 16,
        color: ViewColors.contrast,
        textAlign: 'justify',
        marginBottom: 16,
        maxWidth: 300,
        fontStyle: 'italic',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ViewColors.modalBackground,
    },
    modalContainerView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: ViewColors.modalBorder,
        shadowColor: ViewColors.shadow,
        shadowRadius: 6,
    },
    modalContainerClose: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 6,
        marginTop: 20,
        backgroundColor: ViewColors.modalButton,
    },
    modalText: {
        flexWrap: 'wrap',
        fontSize: 15,
        fontWeight: '100',
        maxWidth: 420,
        textAlign: 'justify',
    },
    modalImg: {
        width: 330,
        height: 320,
        resizeMode: 'contain',
    },
});

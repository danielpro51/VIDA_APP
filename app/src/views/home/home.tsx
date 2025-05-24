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
                        <Text style={styles.modalText}>Eu commodo laboris dolor commodo ut amet sunt. Dolor anim esse irure reprehenderit. Ad dolore elit occaecat incididunt ut esse tempor veniam ea ipsum. Do culpa aliqua eu fugiat enim pariatur minim.</Text>
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
                        <Text style={styles.modalText}>Do non duis excepteur sunt mollit eu tempor eu id velit laboris. Nisi commodo amet exercitation ullamco culpa veniam enim. Exercitation dolor dolore amet voluptate ea reprehenderit non. Ipsum velit amet in tempor sunt.</Text>
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
                        <Text style={styles.modalText}>Ut reprehenderit non elit in do et. Ea ex excepteur nisi nostrud id nostrud commodo sit ex voluptate veniam. Dolor nisi anim proident consectetur mollit amet consequat culpa sunt quis esse dolor. Voluptate esse id ullamco officia voluptate ullamco est qui magna. Deserunt pariatur sit cillum non et pariatur labore ex enim est duis dolore.</Text>
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
                        <Text style={styles.subtitle}>Laboris sunt aute mollit duis tempor sit pariatur ipsum nisi amet eu...</Text>
                    </View>
                    <Image source={logo} style={styles.imgLogo} />
                </Animated.View>

                {/* Sección Características */}
                <Animated.View style={[styles.containerMid, {opacity: fadeAnim}]}>
                    <Text style={styles.sectionTitle}>Características</Text>
                    <View style={styles.characteristicsContainer}>
                        {["Automatización", "Seguridad", "Confort", "Eficiencia Energética"].map((item, index) => (
                            <View key={index} style={styles.card}>
                                <Text style={styles.cardTitle}>{item}</Text>
                                <Text style={styles.cardContent}>Descripción breve de esta característica clave.</Text>
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
                        {["Juan Pérez", "María Rodríguez", "Carlos Gómez"].map((user, index) => (
                            <View key={index} style={styles.testimonialCard}>
                                <Text style={styles.cardTitle}>{user}</Text>
                                <Text style={styles.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
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
        backgroundColor: ViewColors.backgroundMain,
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

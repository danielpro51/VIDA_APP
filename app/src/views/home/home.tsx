import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Footer from '../../components/footer';
import Header from '../../components/header';

const logo = require('@/assets/images/logo.jpg');

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.containerMain}>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>VIDA</Text>
                        <Text style={styles.subtitle}>Laboris sunt aute mollit duis tempor sit pariatur ipsum nisi amet eu...</Text>
                    </View>
                        <Image source={logo} style={styles.imgLogo} />
                </View>
                {/* Sección Características */}
                <View style={styles.containerMid}>
                    <Text style={styles.sectionTitle}>Características</Text>
                    <View style={{        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',}}>
                        {["Automatización", "Seguridad", "Confort", "Eficiencia Energética"].map((item, index) => (
                            <View key={index} style={styles.card}>
                                <Text style={styles.cardTitle}>{item}</Text>
                                <Text style={styles.cardContent}>Descripción breve de esta característica clave.</Text>
                            </View>
                        ))}
                    </View>
                </View>
                {/* Sección Aplicaciones Reales */}
                <View style={[styles.containerMid]}>
                    <Text style={styles.sectionTitle}>Aplicaciones Reales</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.containerApp}>
                            <MaterialIcons name="factory" size={38} color="#ffa9ff"/>
                            <Text>Industrias</Text>
                        </View>
                        <View style={styles.containerApp}>
                            <MaterialIcons name="apartment" size={38} color="#ffa9ff"/>
                            <Text>Empresas</Text>
                        </View>
                        <View style={styles.containerApp}>
                            <MaterialIcons name="home" size={38} color="#ffa9ff"/>
                            <Text>Hogares</Text>
                        </View>

                    </View>
                </View>
                {/* Sección Testimonios */}
                <View style={styles.containerMid}>
                    <Text style={styles.sectionTitle}>Testimonios</Text>
                    <View style={styles.testimonialsContainer}>
                        {["Juan Pérez", "María Rodríguez", "Carlos Gómez"].map((user, index) => (
                            <View key={index} style={styles.testimonialCard}>
                                <Text style={styles.cardTitle}>{user}</Text>
                                <Text style={styles.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                        ))}
                    </View>
                </View>
                {/* Footer */}
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containerMain: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
        color: '#4B0082',
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
    card: {
        width: 240,
        padding: 16,
        backgroundColor: '#e396ff',
        borderRadius: 12,
        margin: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Sombra en Android
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 6,
    },
    cardContent: {
        fontSize: 14,
        color: '#2c2c2c',
        textAlign: 'justify',
    },
    testimonialsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    testimonialCard: {
        width: 250,
        padding: 16,
        backgroundColor: '#e396ff',
        borderRadius: 12,
        margin: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4B0082',
        marginVertical: 12,
    },
    subtitle:{
        flexWrap: 'wrap',
        fontSize: 16,
        color: '#2c2c2c',
        textAlign: 'justify',
        marginBottom: 16,
        maxWidth: 300,
        fontStyle: 'italic',
    },
    containerApp:{
        flexDirection: 'column',
        backgroundColor: '#ff0',

    },
});


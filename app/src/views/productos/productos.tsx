import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RootStackParams } from '@/app/types';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../utils/footer';
import Header from '../../utils/header';
type Auto = NativeStackNavigationProp<RootStackParams, 'Automatizacion'>;
export default function Productos() {
    const { navigate } = useNavigation<Auto>();
    return (
        <>
            <ScrollView>
                <Header />
                {/* Descripción General */}
                <View style={styles.introContainer}>
                    <Text style={styles.sectionTitle}>Descubre Nuestros Productos</Text>
                    <Text style={styles.sectionContent}>
                        Nuestro catálogo está diseñado para mejorar la calidad de vida con tecnología avanzada y accesible.
                        Explora nuestras soluciones en iluminación, automatización y seguridad.
                    </Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.content}>
                        {/* Producto: Luces */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Luces</Text>
                            <Text style={styles.cardContent}>Ex laborum sint proident sit ut pariatur.</Text>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => {navigate('Luces')}}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                        
                        {/* Producto: Automatización */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Automatización</Text>
                            <Text style={styles.cardContent}>Ex laborum sint proident sit ut pariatur.</Text>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => {navigate('Automatizacion')}}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Producto: Seguridad */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Seguridad</Text>
                            <Text style={styles.cardContent}>Ex laborum sint proident sit ut pariatur.</Text>
                            <TouchableOpacity style={styles.cardBtn} onPress={() => {navigate('Seguridad')}}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Lista de Beneficios */}
                <View style={styles.benefitsContainer}>
                    <Text style={styles.sectionTitle}>Beneficios de Nuestros Productos</Text>
                    <View style={styles.benefitList}>
                        {["Ahorro de energía", "Mayor confort", "Seguridad avanzada", "Integración inteligente"].map((benefit, index) => (
                            <Text key={index} style={styles.benefitItem}>✅ {benefit}</Text>
                        ))}
                    </View>
                </View>
                <Footer />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#4B0082',
        padding: 12,
        margin: 20,
        alignItems: 'center',
        borderRadius: 12,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardContent: {
        textAlign: 'justify',
        flexWrap: 'wrap',
        maxWidth: 170,
        padding: 12,
        fontSize: 14,
        color: '#d9d9d9',
    },
    cardBtn: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: '#6A0DAD',
        borderRadius: 8,
    },
    cardBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    introContainer: {
        padding: 20,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 12,
    },
    sectionContent: {
        textAlign: 'center',
        color: '#333',
        fontSize: 16,
        maxWidth: 300,
    },
    benefitsContainer: {
        padding: 20,
        alignItems: 'center',
    },
    benefitList: {
        marginTop: 10,
        alignItems: 'center',
    },
    benefitItem: {
        fontSize: 16,
        color: '#2c2c2c',
        marginVertical: 4,
    },
});

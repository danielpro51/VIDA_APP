import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Productos() {
    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Luces</Text>
                            <Text style={styles.cardContent}>Ex laborum sint proident sit ut pariatur.</Text>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Automatización</Text>
                            <Text style={styles.cardContent}>Ex laborum sint proident sit ut pariatur.</Text>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Seguridad</Text>
                            <Text style={styles.cardContent}>Ex laborum sint proident sit ut pariatur.</Text>
                            <TouchableOpacity style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Ver categoría</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    content:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    card:{
        backgroundColor: '#4B0082',
        padding: 12,
        margin: 20,
        alignItems: 'center',
        borderRadius: 12,
    },
    cardTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardContent:{
        textAlign: 'justify',
        flexWrap: 'wrap',
        maxWidth: 170,
        padding: 12,
        fontSize: 14,
        color: '#d9d9d9',
    },
    cardBtn:{
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: '#6A0DAD',
        borderRadius: 8,
    },
    cardBtnText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

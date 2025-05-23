import { RootStackParams } from '@/app/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export { RootStackParams } from "@/app/types";

const logo = require('@/assets/images/logo.jpg');

type HomeScreen = NativeStackNavigationProp<RootStackParams, 'Home'>;
type OurScreen = NativeStackNavigationProp<RootStackParams, 'Nosotros'>;
type ProductsScreen = NativeStackNavigationProp<RootStackParams, 'Productos'>;

export default function Header(){
    const { navigate } = useNavigation<HomeScreen>();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                {/* <Image
                    source={logo}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                /> */}
                <TouchableOpacity onPress={() => {
                    navigate('Home');
                }}>
                    <Text style={styles.title}>VIDA</Text>

                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => {
                navigate('Productos');
            }}>
                <Text style={styles.button}>Productos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
                navigate('Nosotros');
            }}>
                <Text style={styles.button}>Nosotros</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    containerLogo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4B0082',
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c2c2c',
    },
});
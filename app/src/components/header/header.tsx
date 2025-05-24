import { RootStackParams } from '@/app/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Gesture
} from 'react-native-gesture-handler';
import {
    Easing,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated';
export { RootStackParams } from "@/app/types";

const logo = require('@/assets/images/logo.jpg');

type HomeScreen = NativeStackNavigationProp<RootStackParams, 'Home'>;
type OurScreen = NativeStackNavigationProp<RootStackParams, 'Nosotros'>;
type ProductsScreen = NativeStackNavigationProp<RootStackParams, 'Productos'>;

const EASING = Easing.bezier(1, -1, 0, 0.3);

export default function Header(){
    const { navigate } = useNavigation<HomeScreen>();
    const translateX = useSharedValue(0);
    const hover = Gesture.Hover()
        .onStart((event) => {

        })
        .onUpdate((event) => {

        })
        .onEnd(() => {

        });
        const bottonAnimatedStyle = useAnimatedStyle(() => ({
            backgroundColor: interpolateColor(
                1,
                [0, 1],
                ["#000", "#fff"],
            )
        }));
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                
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
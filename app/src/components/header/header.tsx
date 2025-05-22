import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const logo = require('@/assets/images/logo.jpg');

export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                {/* <Image
                    source={logo}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                /> */}
                <Text style={styles.title}>VIDA</Text>
            </View>

            <TouchableOpacity>
                <Text style={styles.button}>Productos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
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
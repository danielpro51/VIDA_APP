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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    containerLogo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        fontSize: 16,
        color: '#007bff',
    },
});
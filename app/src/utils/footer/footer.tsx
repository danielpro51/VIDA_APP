import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Footer(){
    return (
        <View style={styles.containerFooter}>
            <Text style={styles.footerText}>© 2025 VIDA | Innovación que transforma espacios.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerFooter:{
    },
    footerText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#4B0082',
        marginVertical: 12,
    },
});
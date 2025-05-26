/**
 * @file footer.tsx
 * @description This file contains the Footer component for the VIDA app.
 * It displays a copyright notice and a brief description of the company.
 * * The footer is styled to be centered and uses a specific color scheme.
 */
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
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Footer from '../../utils/footer';
import Header from '../../utils/header';
import { ViewColors } from '@/constants/Colors';

export default function Nosotros() {
    return (
        <View>
            <Header />
            <Text>Nosotros</Text>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({

});
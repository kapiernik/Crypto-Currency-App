import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CryptoService from '../../services';

export default function CurrencyCard() {

    const cryptoService = new CryptoService();

    async function getIcon(){
        let icon;

        cryptoService.getCurrencyIcon('btc')
        .then(response => {
            icon = response;
        })

        return icon;
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainInfo}>
                <Image
                    style={styles.currencyIcon}
                    source={{
                        uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/4caf2b16a0174e26a3482cea69c34cba.png'
                    }} />
                <Text>Hello, World!</Text>
            </View>
            <View>
                <Text>20 000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    mainInfo:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    currencyIcon: {
        width: 50,
        height: 50
    }
})
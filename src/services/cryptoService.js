export default class CryptoService {

    async getAllIcons(){
        
        const url = `https://rest.coinapi.io/v1/assets/icons/30`;

        let icons = await fetch(url, {
            method: 'GET',
            headers: {'X-CoinAPI-Key': 'C35E340E-723D-4352-8BB8-4E26218A3982'}
        })
        .then(response => response.json())

        return icons;
    }

    async getCurrencyIcon(currency){
        let icons = await this.getAllIcons();
        console.log(icons);
        const upperCurrency = currency.toUpperCase();
        let iconUrl;

        for(let icon of icons){
            if(icon.asset_id === upperCurrency){
                iconUrl = icon.url;
                console.log(icon.asset_id === upperCurrency);
                break;
            }
        }

        debugger;

        return await iconUrl;
    }
}
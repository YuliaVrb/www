// Импорт библиотек
const WalletConnectProvider = window.WalletConnectProvider.default;
const Web3 = window.Web3;

// Инициализация провайдера WalletConnect
const provider = new WalletConnectProvider({
    infuraId: "YOUR_INFURA_PROJECT_ID" // Замените на ваш Infura Project ID
});

// Создание экземпляра Web3
const web3 = new Web3(provider);

// Подключение кошелька
const connectWallet = async () => {
    try {
        // Подключение провайдера
        await provider.enable();
        
        // Получение аккаунтов
        const accounts = await web3.eth.getAccounts();
        console.log('Подключен к кошельку:', accounts[0]);
        alert(`Подключен к кошельку: ${accounts[0]}`);
    } catch (error) {
        console.error('Ошибка подключения к кошельку', error);
        alert('Ошибка подключения к кошельку');
    }
};

// Обработчик нажатия кнопки подключения кошелька
document.getElementById('connect-wallet').addEventListener('click', connectWallet);

// Обработка отключения
provider.on("disconnect", (code, reason) => {
    console.log('Wallet disconnected', code, reason);
});

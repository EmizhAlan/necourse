import { useState, useEffect } from "react";
import './styles/ExchangeRate.css';

function ExchangeRate() {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Запрос к API ЦБ РФ
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => response.json())
        .then(data => {
            setRates(data.Valute);
            setLoading(false);
        })
        .catch(error => console.error('Ошибка: ', error));
    }, []);

    if (loading) return <div>Загрузка...</div>;

    if (!rates) return <div>Нет данных</div>;

    // Получаем нужные валюты
    const currencies = ['USD', 'EUR', 'GBR'];

    return (
        <div className="ExchangeRate">
            <h1>Курс валют</h1>
            <div className="rates-container">
                {currencies.map(key => {
                    const currency = rates[key];
                    if (!currency) return null;
                    
                    return (
                        <div key={key} className="rate-card">
                        <h3>{currency.Name} ({key})</h3>
                        <p>{currency.Value.toFixed(2)} р.</p>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ExchangeRate;
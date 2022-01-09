const base_currency = 'USD';

const from = document.getElementById('select_from');
const to = document.getElementById('select_to');

const fromValue = document.querySelector('input[name="from_value"]');
const toValue = document.querySelector('input[name="to_value"]');

const convert = document.querySelector('button');

const getData = async (base_currency = 'USD') => {
    const url = 'https://freecurrencyapi.net/api/v2/latest?apikey=cdbb45a0-7150-11ec-b3fc-2f6e8c4bad42&base_currency=' + base_currency
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorMessage =
          `status: ${response.status}` +
          `${response.statusText ? ', statusText:' + response.statusText : ''}`;
        throw new Error(errorMessage);
      }
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

const currencies = getData().then(data=>{
  let optionsHTML = `<option value="${base_currency}">${base_currency}</option>`;
  Object.keys(data.data).forEach(currency=>{
    optionsHTML += `<option value="${currency}">${currency}</option>`;
  })
  from.innerHTML = optionsHTML;
  to.innerHTML = optionsHTML;
  from.value = 'USD'
  to.value = 'RUB'
})



convert.addEventListener('click', (e)=>{
  const fromCurrency = from.value;
  const toCurrency = to.value;
  getData(fromCurrency).then(data=>{    
    const exchangeRate = data.data[toCurrency];
    toValue.value = +fromValue.value * +exchangeRate
  })
})




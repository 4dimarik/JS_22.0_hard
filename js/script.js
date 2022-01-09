//Обьявление Функциональных Выражений
	/* Стрелочная функция
		получает наименование типа переменной и набор переменных через Остаточные параметры
		на выходе отфильтрованный массив переменных соответствующего типа
	*/	
const filterByType = (type, ...values) => values.filter(value => typeof value === type), 

	/* Стрелочная функция
		Функция выполняет скрытие блоков с селектором div.dialog__response-block 
	*/
	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); // переменной responseBlocksArray присваивается массив полученный из NodeList 
		responseBlocksArray.forEach(block => block.style.display = 'none'); // скрытие HTML элементов через свойство display путем перебора массива этих элементов
	},
	/* Стрелочная функция
		Функция отображает полученный результат 
		получает селектор блока, текст сообщения, серектор эдемента Span.		
	*/
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		hideAllResponseBlocks(); // вызов функции hideAllResponseBlocks
		document.querySelector(blockSelector).style.display = 'block'; // отображение блока с селектором blockSelector
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText; // Если spanSelector передан, поместить тект msgText в HTML элемент с селекторм spanSelector
		}
	},

	/* Стрелочная функция
		Функция получает текст сообщения и выполняет функцию showResponseBlock	
	*/
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
	/* Стрелочная функция
		Функция получает текст сообщения и выполняет функцию showResponseBlock	
	*/
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	/* Стрелочная функция
		Функция получает текст сообщения и выполняет функцию showResponseBlock	
	*/
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
	/*
	 Стрелочная функция
	*/
	tryFilterByType = (type, values) => {
		try {
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", "); // переменной valuesArray присваевается результат функции filterByType вызванной через функцию eval. Предварительно результат функции filterByType (массив) объеденен в строку
			const alertMsg = (valuesArray.length) ? // переменной alertMsg присваивается значение в зависимости от длины строки valuesArray
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			showResults(alertMsg); // выполнение функции showResults
		} catch (e) { // если в теле блока try произошла ошибка выполняется блок catch
			showError(`Ошибка: ${e}`); // выполнение функции showError
		}
	};

const filterButton = document.querySelector('#filter-btn'); //присвоение переменной filterButton HTML элемента с селетором #filter-btn

filterButton.addEventListener('click', e => { // регистрация обработчика события click на элементе filterButton
	const typeInput = document.querySelector('#type'); //присвоение переменной typeInput HTML элемента с селетором #type
	const dataInput = document.querySelector('#data'); //присвоение переменной dataInput HTML элемента с селетором #data

	if (dataInput.value === '') { // если значение элемента dataInput пустая строка
		dataInput.setCustomValidity('Поле не должно быть пустым!'); // устанавливает специальное сообщение для элемента dataInput
		showNoResults(); // выполняется функция showNoResults
	} else { // иначе
		dataInput.setCustomValidity(''); // устанавливает специальное сообщение для элемента dataInput
		e.preventDefault(); // Отмена действия браузера по умолчанию
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); //выполняется функция tryFilterByType передаются значения полей typeInput,dataInput с предварительным  удалением пробельных символов с начала и конца строки.
	}
});


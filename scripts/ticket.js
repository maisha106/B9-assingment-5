let seatCount = 0;
let basePrice = 550;

function handleClickEvent(seatId) {
    seatCount++;
    if (seatCount <= 4) {
        //background color onclick
        setBackgroundColorById(seatId);
        //Updating availabe seat
        const currentSeat = getTextElementValueById('available-seat');
        const updatedSeat = currentSeat - 1;
        setTextElementValueById('available-seat', updatedSeat);
        //Updating selected seat
        const selectedSeat = getTextElementValueById('selected-seat');
        const updatedSelectedSeat = selectedSeat + 1;
        setTextElementValueById('selected-seat', updatedSelectedSeat);

        const tableBody = document.getElementById('tBody');

        //New row append in table
        const newRow = document.createElement('tr');

        // Creating elements
        const seatCell = document.createElement('td');
        const classCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const seatText = document.createTextNode(seatId);
        const classText = document.createTextNode('Economy');
        const priceText = document.createTextNode('550');

        // Append text nodes to cells
        seatCell.appendChild(seatText);
        classCell.appendChild(classText);
        priceCell.appendChild(priceText);

        // Append cells to the new row
        newRow.appendChild(seatCell);
        newRow.appendChild(classCell);
        newRow.appendChild(priceCell);
        // Append the new row to the table body
        tableBody.appendChild(newRow);

        //Price update
        let currentPrice = basePrice * seatCount;
        setTextElementValueById('total-price', currentPrice);
        setTextElementValueById('grand-price', currentPrice);

    }

}

function discount() {
    const input = document.getElementById('coupon')
    if (input.value === 'NEW15') {
        hideElementById('discount-field');
        const newPrice = basePrice * seatCount;
        const grandPrice = newPrice - (newPrice * 0.15);
        setTextElementValueById('grand-price', grandPrice);
    } else if (input.value === 'Couple 20') {
        hideElementById('discount-field');
        const newPrice2 = basePrice * seatCount;
        const grandPrice2 = newPrice2 - (newPrice2 * 0.20);
        setTextElementValueById('grand-price', grandPrice2);
    }
}

function thankYou() {
    hideElementById('body');
    showElementById('thanks');
}

function continueMore() {
    hideElementById('thanks');
    showElementById('body');
}
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const prices = document.querySelectorAll('.price');
    let total = 0;
    
    // Calculate the sum of prices
    prices.forEach(price => {
        total += parseInt(price.textContent);
    });

    // Create a new row for total
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');
    totalCell.style.textAlign = 'center';
    totalCell.textContent = `Total Price: Rs ${total}`;
    newRow.appendChild(totalCell);
    
    // Append the new row to the table
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

// from header section buy ticket btn to main ticket details section

document.addEventListener('DOMContentLoaded',function(){
    const buyTicketsButton = document.getElementById('buy-ticket-btn');
    buyTicketsButton.addEventListener('click',function(){
        const ticketDetailsSection = document.getElementById('ticket-details-section');
        ticketDetailsSection.scrollIntoView({behavior:"smooth"});
    })
})



// get seat
let count = 0;
const seatsContainer = document.getElementsByClassName('seat');
const seats = document.querySelectorAll('.seat');
for(const seat of seats){
    seat.addEventListener('click',function(e){
        
        e.target.style.backgroundColor = "#1DD100";
        
        count++;
        document.getElementById('seat-counter').innerText = count;

        

        const seatLeft = document.getElementById('seat-left').innerText;
        const convertedSeatLeft = parseInt(seatLeft);
        const remainingSeat = convertedSeatLeft - 1 ;
        document.getElementById('seat-left').innerText = parseInt(remainingSeat);

        //append seat num
        const elementText = e.target.innerText;
        const appendSeat = document.getElementById('append-seat');
        const div = document.createElement('div');
        div.classList.add('flex','justify-between','items-center');
        const p1 = document.createElement('p');
        p1.innerText = elementText;
        const p2 = document.createElement('p');
        p2.innerText = "Economy";
        const p3 = document.createElement('p');
        p3.innerText = 550;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        appendSeat.appendChild(div);
        
       
        // total Price
        const price = p3.innerText;
        const convertedPrice = parseInt(price);
        
        setCost('total-price',convertedPrice);
        

        setGrandTotalCost();
        
        
        
    })
    
}

function setCost(elementId,value){
    const totalPrice = document.getElementById(elementId).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    document.getElementById('total-price').innerText = parseInt(convertedTotalPrice) + parseInt(value);
}

function setGrandTotalCost(){
        const grandTotalPrice = document.getElementById('grandtotal-price').innerText;
        const convertedGrandTotalPrice = parseInt(grandTotalPrice);
        
        // get input field value
        if(count >= 4){
            const applyBtn = document.getElementById('apply-btn');
            applyBtn.removeAttribute('disabled');
            applyCouponCode();
            
        }
}


function applyCouponCode(){
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.addEventListener('click',function(coupon){
        const inputField = document.getElementById('input-field');
        const inputFieldText = inputField.value;
        const couponCode = inputFieldText;

        if(couponCode === 'NEW15'){
            
        }
        
        
        
    })
}




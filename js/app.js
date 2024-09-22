const selectSeat = document.getElementById('selected-seat')
const countSeat = document.getElementById('count-seat')
const totalBook = document.getElementById('total-book')
const totalPrice = document.getElementById('total-price')
const couponBtn = document.getElementById('coupon-btn')
const inputCoupon = document.getElementById('input-coupon')
const textRemove = document.getElementById('text-remove')
const discountMoney = document.getElementById('discount-money')
const btnNext= document.getElementById('btn-next')
const phnNmbr = document.getElementById('phn-nmbr')

let seatSelect = [];
let totalPrices =0;

function handleSeat(event){
  const value = event.innerText

  if(seatSelect.includes(value)){
    return alert('Seat already booked')
  }
  
  else if(seatSelect.length<4){

  seatSelect.push(event.innerText)

 event.classList.add('bg-button','text-white')
 countSeat.innerText = seatSelect.length




 const availableSeat = parseFloat(totalBook.innerText)
 const booked = availableSeat - 1
  totalBook.innerText = booked

  textRemove.classList.add('hidden')

  selectSeat.innerHTML +=`<li class="font-base text-xs flex justify-between">

 <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>

  </li>`
  totalPrices +=550

  totalPrice.innerText=totalPrices.toFixed(2)


  if(seatSelect.length>3){
    inputCoupon.removeAttribute('disabled')
    couponBtn.removeAttribute('disabled')
    }
  }

else{
  return alert('Limited')
}

}

document.getElementById('coupon-btn').addEventListener('click', function() {
  const couponValue =inputCoupon.value
  let saveMoney = 0;

if(couponValue !== 'NEW15' && couponValue !== 'Couple 20')
{
  return alert('wrong input')
}




if(couponValue === 'NEW15')
{
  saveMoney = totalPrices* .15
}
else if(couponValue === 'Couple 20'){
  saveMoney = totalPrices * .20
}

const hidePart = document.getElementById('hide-sec')
hidePart.innerHTML =`
  <p>Discount</p>
  <p>-BDT <span>${saveMoney.toFixed(2)}</span></p>

`


const grandMoney = totalPrices - saveMoney
discountMoney.innerText = grandMoney.toFixed(2)

})

phnNmbr.addEventListener('input', function(event){
  const phnValue = event.target.value

  if(phnValue.length>= 11){
    btnNext.removeAttribute('disabled')
  }
})

document.getElementById('close-btn').addEventListener('click', function(){
  Window.location.reload();
})
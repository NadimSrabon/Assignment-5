
// function getClick(){
//     const btn = document.querySelectorAll('h4')
//     console.log(btn)
//     btn.classList.add('bg-green-400');

// }

let arr = [];
function changeColor(buttonNumber) {
    // Reset background color for all buttons
    // for (let i = 1; i <= 10; i++) {
    //   const button = document.getElementById('button' + i);
    //   button.style.backgroundColor = '';
    // }
    if(arr.length >= 4){
        alert("Sorry You Can Not Pick More Than 4 seats");
        return
    }
    const clickedButton = document.getElementById('button' + buttonNumber);
    clickedButton.style.backgroundColor = 'green';
    arr.push(clickedButton);
    
 }

let seat = 40; 
let count = 1;
let total = 0;
let grandTotal = 0;
const random = document.querySelectorAll(".dus")

 for(let i = 0; i<random.length;i++){
    const btn = random[i];
    console.log(btn)


    btn.addEventListener("click", function(){

        const remainSeat = document.getElementById("seat-left");
        remainSeat.innerText=seat-1;
        seat--; 
        
        
        const seatIncrease = document.getElementById("seat-increase");
        seatIncrease.innerText=count;
        count++;


        const sit = document.getElementById("seat-name");
        // const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText=btn.innerText
        // li.appendChild(p)
        sit.appendChild(p)


        const cls = document.getElementById("seat-form");
        const p1 = document.createElement("p");
        p1.innerText='Economy';
        cls.appendChild(p1)


        const money = document.getElementById("seat-price");
        const p2 = document.createElement("p");
        p2.innerText="550";
        money.appendChild(p2)


        const totalPrice = document.getElementById("total-price");
        total = total+550;
        totalPrice.innerText=total;

        const grandTotalPrice = document.getElementById("grand-total");
        grandTotal = grandTotal+550;
        grandTotalPrice.innerText=grandTotal;
    })

 }


 const btnPressed = document.getElementById("apply-btn");
 btnPressed.addEventListener("click",function(){
    const couponElement = document.getElementById("input-field").value;
    // const couponCode = couponElement.split(' ').join("").toUppercase();
    const totalPrice = parseFloat(document.getElementById("total-price").innerText)
    const grandTotalPrice = parseFloat(document.getElementById("grand-total").innerText)
    if(totalPrice >=2200){
        if(couponElement === "NEW15"){

            const discountField = document.getElementById("grand-total");
            const totalDiscount = grandTotalPrice * 0.15;
            discountField.innerText=totalPrice-totalDiscount;
            document.getElementById("input-field").value = "";

        }else if(couponElement === "Couple 20"){

            const discountField = document.getElementById("grand-total");
            const totalDiscount = grandTotalPrice * 0.2;
            discountField.innerText=totalPrice-totalDiscount;
            document.getElementById("input-field").value = "";


        }else{
            alert("Invalid Coupon")
            return
            // document.getElementById("input-field").value = "";

    }

    }
 })






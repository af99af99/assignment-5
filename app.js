
// section for seat no change
const allbtn = document.getElementsByClassName("t-button");
 let count = 0;
 let totalprice = 0;
for(const btn of allbtn){
    btn.addEventListener("click", function(e){
       
        if (count === 4 ){
            alert("you can't buy more then  4 tickets ");
            return;
        }
        btn.setAttribute('disabled', true);
        btn.style.backgroundColor = "green"
        btn.style.color = "white"
       // console.log("paisi");
        count = count + 1 ;
        console.log(count);

 // for decrement seat nmbr
            const Leftseat = document.getElementById("left-seat");
            const currentSeat = Leftseat.innerText;
            const totalCurrent = parseInt(currentSeat)
            const afterBookLeftSeat = totalCurrent - 1 ;
            Leftseat.innerText = afterBookLeftSeat ;

    // seat er nam nibo
    const  ticketname  = e.target.innerText;
    console.log(ticketname)
    SetBackGroundColorById(ticketname) // function call korlam
    
    
    const selectContainer = document.getElementById("select-seat");
    //ticket er prc
   const ticketPrice = 550
//for only price to calculate
    console.log(ticketPrice);


   const price = e.target.parentNode.childNodes[4].innerText;
   const li = document.createElement("li");
   const p = document.createElement("p");
   const p2 = document.createElement("p2");

   p.innerText= ticketname + " " + "Economy" + " "+ ticketPrice ;
   li.appendChild(p)
   li.appendChild(p2)
   selectContainer.appendChild(li);

    setInnerText("seat-count" , count)   


    //calculate price
 totalprice += ticketPrice
// console.log(totalprice);
document.getElementById('total-cost').innerText = totalprice ;
document.getElementById('discountprice').innerText = totalprice ;

    })
}

function setInnerText( id ,value){
    document.getElementById(id).innerText = value ;
}

function bus(){
    showElementById('ph-sec');
}
 const ticketButton = document.getElementsByClassName('t-button')
 console.log(ticketButton)

// <----------seat key color--->
function SetBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    console.log(element)
    console.log(elementId)
    element.classList.add('bg-green-300');
}

//input-----------


 function  calculatediscount (){
    const inputfield = document.getElementById ("Coupon-field").value;
    console.log(inputfield);
 }

const appbtn = document.getElementById("apply-btn");
appbtn.addEventListener("click",function(){
//console.log("clicked");

// get input value
const coupondata = document.getElementById("input-field").value;
 console.log(coupondata);
 if(coupondata == "NEW15"){
    const totalcostelement = document.getElementById("total-cost")
    const discount = parseFloat(totalcostelement.innerText) *0.15;
    const grandtotal = parseFloat(totalcostelement.innerText) - discount;
    document.getElementById("discountprice").innerText=grandtotal;
    document.getElementById("input-field").value = " ";
    } else if (coupondata == "Couple 20"){
    const totalcostelement = document.getElementById("total-cost")
    const discount = parseFloat(totalcostelement.innerText) *0.20;
    const grandtotal = parseFloat(totalcostelement.innerText) - discount;
    document.getElementById("discountprice").innerText=grandtotal;

     document.getElementById("input-field").value = " ";
    } else{
    alert("invalid coupon code");
    return;
    }
})


document.getElementById("btn-continue").addEventListener('click', function () {
    window.location.reload();
});
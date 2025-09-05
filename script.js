// heart count section //
let count = 0;
let buttons = document.getElementsByClassName("emergency");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    count++;
    document.getElementById("increment").innerText = count;
  });
}


// call now button section //
const callHistory = [];
let coin = 100;
let coinButtons = document.getElementsByClassName("call");

for ( i = 0; i < coinButtons.length; i++){
  coinButtons[i].addEventListener("click",function(){
    if (coin >= 20 ){
    coin-=20;
    
    document.getElementById("decrement").innerText = coin;
   
    let card = this.closest(".card"); 
let serviceName = card.querySelector(".service_name").innerText;
let serviceNumber = card.querySelector(".service_number").innerText;
alert("Calling: " + serviceName + " " + serviceNumber);

// call history//
const data = {
  name:serviceName,
  number:serviceNumber,
  date: new Date().toLocaleTimeString()
}
callHistory.push(data)

  const callHistoryContainer = document.getElementById("call-history-container")
  callHistoryContainer.innerHTML="";

  for (const data of callHistory){
    const div = document.createElement("div")
    div.innerHTML =`
    <div  class="flex justify-between mb-4  py-4 md:w-[352px] h-[83px] bg-white rounded-lg shadow-md">
                    <div  class="px-2">
                        <h2 class="font-semibold px-2">${data.name}</h2>
                        <p  class="px-2">${data.number}</p>

                    </div>
                    <div  class="px-2">
                        <p>${data.date}</p>

                    </div>
                </div>
                `;
  
                callHistoryContainer.appendChild(div)
  }
}
  else{
    
      alert("Insufficient Balance");
    }

});
}

document.getElementById("clear_history").addEventListener("click",function(){
  callHistory.length = 0 ;
  document.getElementById("call-history-container").innerHTML = "";
  
})



// copy count section //
let copyCount = 0;
let copyButtons = document.getElementsByClassName("copy_button");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function() {
    let neddedNumber = this.closest(".card").querySelector(".service_number").innerText;
    navigator.clipboard.writeText(neddedNumber).then(()=>{
       copyCount++;
    document.getElementById("increase").innerText = copyCount;
    alert("Number copied:" + "" + neddedNumber)
    }).catch(err=>{})
   
  });
}
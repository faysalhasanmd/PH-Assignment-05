let transaction = [];
const historyParentContainer = document.getElementById("history-parent");
const allBtn = document.getElementsByClassName("btn-history");
const updateCopy = document.getElementById("navCopy");
const updateHeart = document.getElementById("heartIcon");

// all card name & id
function joinData() {
  for (const perData of transaction) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
            class="flex justify-between items-center p-2 bg-gray-100 rounded-[10px] mt-3"
          >
            <div class="w-[70%]">
              <h2 class="font-bold text-[15px]">${perData.name}</h2>
              <h4 class="text-[13px] text-gray-600">${perData.code}</h4>
            </div>
            <div class="w-[30%]"><h4 class="text-[14px] ">${perData.date}</h4></div>
          </div>
          `;
    historyParentContainer.appendChild(div);
  }
}

function allCard(name, code) {
  historyParentContainer.innerHTML = "";
  const data = {
    name: name,
    code: code,
    date: new Date().toLocaleTimeString(),
  };
  transaction.push(data);
  joinData();
}

document.getElementById("national-emp").addEventListener("click", function () {
  const totalCoin = document.getElementById("coinTotal");
  const validCoin = parseInt(totalCoin.innerText);

  if (validCoin >= 20) {
    const minusCoin = validCoin - 20;
    coinTotal.innerText = minusCoin;
    alert(`📞Calling National Emergency Service 999...`);
  } else if (validCoin < 20) {
    this.disabled = true;
    alert(`🪙Do Not Coin Available!`);
    return;
  }
  allCard("National Emergency Number", 999);
});

document
  .getElementById("police-helpline")
  .addEventListener("click", function () {
    const totalCoin = document.getElementById("coinTotal");
    const validCoin = parseInt(totalCoin.innerText);

    if (validCoin >= 20) {
      const minusCoin = validCoin - 20;
      coinTotal.innerText = minusCoin;
      alert(`📞Calling Police-HelpLine 999...`);
    } else if (validCoin < 20) {
      this.disabled = true;
      alert(`🪙Do Not Coin Available!`);
      return;
    }
    allCard("Police HelpLine", 999);
  });

document.getElementById("fire-service").addEventListener("click", function () {
  const totalCoin = document.getElementById("coinTotal");
  const validCoin = parseInt(totalCoin.innerText);

  if (validCoin >= 20) {
    const minusCoin = validCoin - 20;
    coinTotal.innerText = minusCoin;
    alert(`📞Calling Fire Service 999...`);
  } else if (validCoin < 20) {
    this.disabled = true;
    alert(`🪙Do Not Coin Available!`);
    return;
  }
  allCard("Fire Service", 999);
});
document
  .getElementById("Ambulance-Service")
  .addEventListener("click", function () {
    const totalCoin = document.getElementById("coinTotal");
    const validCoin = parseInt(totalCoin.innerText);
    if (validCoin >= 20) {
      const minusCoin = validCoin - 20;
      coinTotal.innerText = minusCoin;
      alert(`📞Calling Ambulance-Service 12345678910...`);
    } else if (validCoin < 20) {
      this.disabled = true;
      alert(`🪙Do Not Coin Available!`);
      return;
    }
    allCard("Ambulance Service", 12345678910);
  });
document
  .getElementById("Women-&-Child-HelpLine")
  .addEventListener("click", function () {
    const totalCoin = document.getElementById("coinTotal");
    const validCoin = parseInt(totalCoin.innerText);
    if (validCoin >= 20) {
      const minusCoin = validCoin - 20;
      coinTotal.innerText = minusCoin;
      alert(`📞Calling Women-&-Child-HelpLine 109...`);
    } else if (validCoin < 20) {
      this.disabled = true;
      alert(`🪙Do Not Coin Available!`);
      return;
    }
    allCard("Women & Child HelpLine", 109);
  });
document
  .getElementById("Anti-Corruption-Helpline")
  .addEventListener("click", function () {
    const totalCoin = document.getElementById("coinTotal");
    const validCoin = parseInt(totalCoin.innerText);
    if (validCoin >= 20) {
      const minusCoin = validCoin - 20;
      coinTotal.innerText = minusCoin;
      alert(`📞Calling Anti-Corruption-Helpline 163...`);
    } else if (validCoin < 20) {
      this.disabled = true;
      alert(`🪙Do Not Coin Available!`);
      return;
    }
    allCard("Anti Corruption Helpline", 163);
  });
document
  .getElementById("Electricity-Helpline")
  .addEventListener("click", function () {
    const totalCoin = document.getElementById("coinTotal");
    const validCoin = parseInt(totalCoin.innerText);
    if (validCoin >= 20) {
      const minusCoin = validCoin - 20;
      coinTotal.innerText = minusCoin;
      alert(`📞Calling Electricity-Helpline 16216...`);
    } else if (validCoin < 20) {
      this.disabled = true;
      alert(`🪙Do Not Coin Available!`);
      return;
    }
    allCard("Electricity Helpline", 106);
  });
document.getElementById("Brac-Helpline").addEventListener("click", function () {
  const totalCoin = document.getElementById("coinTotal");
  const validCoin = parseInt(totalCoin.innerText);
  if (validCoin >= 20) {
    const minusCoin = validCoin - 20;
    coinTotal.innerText = minusCoin;
    alert(`📞Calling Brac-Helpline 16445...`);
  } else if (validCoin < 20) {
    this.disabled = true;
    alert(`🪙Do Not Coin Available!`);
    return;
  }
  allCard("Brac Helpline", 16445);
});
document
  .getElementById("Bangladesh-Railway")
  .addEventListener("click", function () {
    const totalCoin = document.getElementById("coinTotal");
    const validCoin = parseInt(totalCoin.innerText);
    if (validCoin >= 20) {
      const minusCoin = validCoin - 20;
      coinTotal.innerText = minusCoin;
      alert(`📞Calling Bangladesh-Railway 163...`);
    } else if (validCoin < 20) {
      this.disabled = true;
      alert(`🪙Do Not Coin Available!`);
      return;
    }
    allCard("Bangladesh Railway", 163);
  });

//------------------------------------------------------------//
function copyFunction(e) {
  const copyValue = parseInt(updateCopy.innerText);
  const backCopy = copyValue + 1;
  updateCopy.innerText = backCopy;

  const button = e.currentTarget;

  const serviceNum =
    button.parentElement.parentElement.querySelector(".codeNum").innerText;
  // console.log(serviceNum);

  navigator.clipboard.writeText(serviceNum);
  alert(`📋The Number is Copy: ${serviceNum}`);
}

for (let i = 0; i <= 8; i++) {
  const btn = document.getElementById(`copyCount-${i}`);
  if (btn) {
    btn.addEventListener("click", copyFunction);
  }
}
//--------------------------------------------------------------//

function heartFunction() {
  const Heart = parseInt(updateHeart.innerText);
  const backCopy = Heart + 1;
  updateHeart.innerText = backCopy;
}

for (let i = 0; i <= 8; i++) {
  const heartBtn = document.getElementById(`heart-${i}`);
  if (heartBtn) {
    heartBtn.addEventListener("click", heartFunction);
  }
}

document.getElementById("clearBtn").addEventListener("click", function () {
  const clearData = document.getElementById("history-parent");
  clearData.innerText = "";
  transaction = [];
});

let count = Number(localStorage.getItem('idcount') || 0);

let costUp = Number(localStorage.getItem('costUp') || 50);
let costRab = Number(localStorage.getItem('uprab') || 100);

let upx = Number(localStorage.getItem('idupx') || 1);
let income = Number(localStorage.getItem('idinc') || 0);
let incomeSec = Number(localStorage.getItem('incomeSec') || 1);

let energy = Number(localStorage.getItem('energy') || 100);
let energyIncome = Number(localStorage.getItem('energyinc') || 5);
let energyMax = Number(localStorage.getItem('energyMax') || 100);
let energyMaxMinus = energyMax - 5;

let idnick = (localStorage.getItem('idnick') || "Steve2");
let imgclickid = (localStorage.getItem('imgclickid') || "Steve2");
let imgblur = (localStorage.getItem('imgblur') || "Steve2");

let buttonshop = document.querySelector('.buttonshop');
let hintshop = document.querySelector('.hintshop');


document.getElementById('imgclickid').src = 'https://mc-heads.net/avatar/'+ idnick + '/512';
document.getElementById('imgblur').src = 'https://mc-heads.net/avatar/'+ idnick + '/512';
document.getElementById('idcount').innerHTML = count;
document.getElementById('upgr').innerHTML = "Улучшить множитель за " + costUp;
document.getElementById('idupx').innerHTML = upx + "x";
document.getElementById('idinc').innerHTML = income;
document.getElementById('uprab').innerHTML = "Купить рабочего за " + costRab;
document.getElementById('energy').innerHTML = energy;


function onClickButton(el)   {
    if(energy > 0) {
        count = count + 1 * upx; 
        energy--;
        document.getElementById('idcount').innerHTML = count;
        localStorage.setItem('idcount', count);
        document.getElementById('energy').innerHTML = energy;
        localStorage.setItem('energy', energy);
    }
}

buttonshop.addEventListener('click', function(event) {
    hintshop.classList.toggle('show'); 
});

function upgrade(el) {
    if(count >= costUp) {
        upx++;
        count -= costUp;
        costUp = Math.trunc(costUp * 2.5);
        el.innerHTML = "Улучшить множитель за " + costUp;
        document.getElementById('idcount').innerHTML = count;
        document.getElementById('idupx').innerHTML = upx + "x";
        localStorage.setItem('idupx', upx);
        localStorage.setItem('costUp', costUp);
        localStorage.setItem('idcount', count);
    }   
}

function upgradeRab(el) {
    if(count >= costRab) {
        income = Math.trunc(income + incomeSec);
        count -= costRab;
        costRab = Math.trunc(costRab * 1.5)
        incomeSec = incomeSec * 1.2
        el.innerHTML = "Купить рабочего за " + costRab;
        document.getElementById('idcount').innerHTML = count;
        document.getElementById('idinc').innerHTML = income;
        localStorage.setItem('idinc', income);
        localStorage.setItem('uprab', costRab);
        localStorage.setItem('incomeSec', incomeSec);
        localStorage.setItem('idcount', count);
    }
}

function clickPerMinute() {
    count = count + 1 * income;
    document.getElementById('idcount').innerHTML = count;
    localStorage.setItem('idcount', count);
}

setInterval(clickPerMinute, 1000);

function energyPerMinute(el) {
    if(energy < energyMax) {
        if(energy >= energyMaxMinus) {
            energy += (energyMax - energy);
            document.getElementById('energy').innerHTML = energy;
            localStorage.setItem('energy', energy);
        } else {
            energy += energyIncome;
            document.getElementById('energy').innerHTML = energy;
            localStorage.setItem('energy', energy);
        }
    }
}

setInterval(energyPerMinute, 5000); 

function checkform(el) {
    idnick = el.idnick.value;
    document.getElementById('imgclickid').src = 'https://mc-heads.net/avatar/'+ idnick + '/512';
    document.getElementById('imgblur').src = 'https://mc-heads.net/avatar/'+ idnick + '/512';
    localStorage.setItem('idnick', idnick);
    localStorage.setItem('imgclickid', imgclickid);
    localStorage.setItem('imgblur', imgblur);
    return false
}
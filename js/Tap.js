let balance = document.querySelector('.tapBalance');
let currentLeague = document.querySelector('.currentLeagues');
let remains = document.querySelector('.remain');
let lengthOfremains = document.querySelector('.lenght');
let progressvalue = document.querySelector('.progvalue');

let obj = JSON.parse(localStorage.getItem('UtitbestTap'));
let utitbestTap = new UtitbestAKPAN( obj.Tap, obj.Balance, obj.Multitap, obj.EnergyLimit, obj.RechargingSpeed, obj.TapTapguru, obj.FullTank, obj.Task, obj.ReferalLink, obj.League, obj.Statistic);


var tapswapBtn = document.querySelector('.tab-btn');
    tapswapBtn.onclick = function(ev){
    let timer
    let x = ev.clientX;
    let y = ev.clientY;
    
    let newX = x - 437;
    let newY = y - 179;

    this.appendChild(generateNumber(obj.Tap, newX, newY))
    // utitbestTap.savecoinbalancE(obj.Tap);
    balance.innerHTML = utitbestTap.updateBalance()
    saveCoinBalance(obj.Tap)
    if(obj.GuruActive == false){
    progress(1);
    }
}


createelement = (e) =>{
    return document.createElement(e)
}

generateNumber = (d, x, y) =>{
    let ele = createelement('span');
        ele.className = 'tapPopout'
        ele.innerHTML = d;
        ele.style.left = x + 'px';
        ele.style.top = y + 'px';

        setTimeout(() =>{
            ele.remove();
        }, 2000)
        return ele;
}

function defaultProgress(){
    let tapObjects = JSON.parse(localStorage.getItem('UtitbestTap'));
    let slideVal = tapObjects.sliderPosition;
    let progressvalue = document.querySelector('.progvalue');
        progressvalue.style.width = slideVal + '%';
    let b;
    if(slideVal < 100){
        b = setInterval(1000,fillBack())
    }else{
        clearInterval(b)
    }
}

function progress(d){
    let remain1 = document.querySelector('.remain')
    let val = document.querySelector('.remain')
    let prog = document.querySelector('.progvalue');
    
    let wit = parseFloat(prog.style.width);
    if(wit >= 1){
        prog.style.width = (wit - d) + '%';
        remain1.innerHTML = (val.innerHTML - 5)

        let lmt = obj.EnergyLimit - obj.RechargingSpeed;
            obj.EnergyLimit = lmt;

        let sliderVal = obj.sliderPosition - d;
            obj.sliderPosition = sliderVal;
        localStorage.setItem('UtitbestTap', JSON.stringify(obj))
    }else{
        tapswapBtn.disabled = true;
        fillBack()
    }
}

function currentTap(d){
    localStorage.setItem('Tap', d)
}
// currentTap(1)
function returnTap(){
    return Number(obj.Tap)
}
function fillBack(){
    let remain = document.querySelector('.remain')
    let val = document.querySelector('.remain')
    let prog = document.querySelector('.progvalue');
    
    let t = setInterval(() =>{
        let wit = parseFloat(prog.style.width);

        let lmt = obj.EnergyLimit + obj.RechargingSpeed;
        let slidePos = obj.sliderPosition + 1;
        if(slidePos >= 100){
            lmt = obj.Energy;
            slidePos = 100;
        }
        if(wit <= 100){
            prog.style.width = slidePos + '%';
            remain.innerHTML = lmt;
            if(wit >= obj.Tap){
                tapswapBtn.disabled = false;
            }
            // let sliderVal = obj.sliderPosition + d;
            obj.sliderPosition = slidePos;
            obj.EnergyLimit = lmt
            localStorage.setItem('UtitbestTap', JSON.stringify(obj))
        }
        else{
            clearInterval(t)
        }
    }, 1000)
}
let tapTools = document.querySelectorAll('.tools');
for(let x = 0; x < tapTools.length; x++){
    tapTools[x].onclick = function(e){
        let wrapper = document.querySelector('.coverWrapper');
        if(this.getAttribute('datatype') == 'Boost'){
            if(wrapper !== null){
                wrapper.remove()
            }
            boost();
            generator('boost')
        }
        if(this.getAttribute('datatype') == 'tap'){
            if(wrapper !== null){
                wrapper.remove();
            }   
            
        }
        if(this.getAttribute('datatype') == 'task'){
            if(wrapper !== null){
                wrapper.remove();
            }
            generator('task')    
        }
    }
}
function boost(){
    let taps = document.querySelector('.__tab__');
    taps.appendChild(coverCurrent())
}
function coverCurrent(){
    let wrapper = createelement('div');
        wrapper.className = 'coverWrapper wrap';
        return wrapper;
}

function generator(type){
    let wrapper = document.querySelector('.coverWrapper');
    let tank = obj.FullTank;
    let guru = obj.Tapguru;
    let multitapping = obj.Multitap;
    let energylimitty = obj.Energy;
    let multilevel = obj.MultitapLevel;
    let energylimitaion = obj.EnergyLimitLevel
    if(type == 'boost'){
    let boostw = createelement('div');
        boostw.className = 'booster';
        let H4 = createelement('h4')
            H4.innerHTML = 'Your daily boosters:'
            boostw.append(H4);
            let bello = createelement('div');
                bello.className = 'secbooster';
                let boostparent1 = createelement('div');
                    boostparent1.className = 'boostparent1';
                    let boof = createelement('div')
                        boof.className = 'shower';
                    let boof1 = createelement('div');
                        boof1.className = 'forI_Tag';
                        let boof11 = createelement('span')
                            boof11.className = 'spanforItag';
                            let Itag = createelement('i')
                                Itag.className = 'fa fa-fire fa-2x bb';
                                boof11.append(Itag)
                        boof1.append(boof11)

                        let boof21 = createelement('span');
                            boof21.className = 'forBOstStus';
                            let H5 = createelement('h5')
                                H5.innerHTML = 'Taping Guru'
                                boof21.append(H5)
                            let P = createelement('p')
                                P.className = 'Pmaster'
                                P.innerHTML = guru + '/3';
                                boof21.append(P)
                            boof1.append(boof21)
                    boof.append(boof1)
                    boostparent1.append(boof)
                    
                    bello.append(boostparent1)
                let boostparent2 = createelement('div');
                    boostparent2.className = 'boostparent2';
                    let boofg = createelement('div')
                        boofg.className = 'shower';
                    let boof1f = createelement('div');
                        boof1f.className = 'forI_Tag';
                        let boof1v1 = createelement('span')
                            boof1v1.className = 'spanforItag';
                            let Itagd = createelement('i')
                                Itagd.className = 'fa fa-bolt fa-2x bb';
                                boof1v1.append(Itagd)
                        boof1f.append(boof1v1)

                        let boof21d = createelement('span');
                            boof21d.className = 'forBOstStus';
                            let H5d = createelement('h5')
                                H5d.innerHTML = 'Full Tank';
                                boof21d.append(H5d)
                            let Pd = createelement('p')
                                Pd.className = 'phdhdh'
                                Pd.innerHTML = tank +'/3';
                                boof21d.append(Pd)
                            boof1f.append(boof21d)
                    boofg.append(boof1f)
                    boostparent2.append(boofg)
                    bello.append(boostparent2)
                boostw.append(bello);

        let ANh4 = createelement('h4');
            ANh4.innerHTML = 'Boosters:'
            boostw.append(ANh4);

        let mmm = createelement('div')
            mmm.className = 'emmanuel';
            mmm.onclick = Multitaping;
            let mm1 = createelement('div')
                mm1.className = 'paring';
                let mm2 = createelement('div')
                    mm2.className = 'noneoftheo';
                    mm2.innerHTML = '<i class="fa fa-hands fa-2x bgb"></i>'
                mm1.append(mm2)

            let mm3 = createelement('div')
                mm3.className = 'hghggh';
               let gg1 = createelement('div');
                   gg1.className = 'rtr';
                   let eee = createelement('p')
                        eee.innerHTML = 'Multitap';
                    gg1.append(eee);
                    let eee1 = createelement('span');
                        eee1.className = 'h9s';
                    let imgr = createelement('i')
                        imgr.className = 'fa fa-coins disa';
                        eee1.append(imgr);
                    let eee2 = createelement('h5');
                        eee2.className = 'multimaster';
                        eee2.innerHTML = multitapping;
                        eee1.append(eee2);
                    let gh = createelement('h5');
                        gh.innerHTML = '|';
                        eee1.append(gh)
                    let eee3 = createelement('h5');
                        eee3.className = 'mullmsa'
                        eee3.innerHTML = multilevel + ' level';
                        eee1.append(eee3);
                        gg1.append(eee1)
                mm3.append(gg1)
            mm1.append(mm3)

            let mm4 = createelement('div')
                mm4.className = 'nbbm';
                let lucky = createelement('i');
                    lucky.className = 'fa fa-angle-right bcc';
                    mm4.append(lucky)
                mm1.append(mm4)


            mmm.append(mm1)

        boostw.append(mmm);


        let mmmq = createelement('div')
            mmmq.className = 'emmanuel';
            mmmq.onclick = Enertylimitation;
            mmmq.style.marginTop = '4%';
            let mm1q = createelement('div')
                mm1q.className = 'paring';
                let mm2w = createelement('div')
                    mm2w.className = 'noneoftheo';
                    mm2w.innerHTML = '<i class="fa fa-battery-quarter fa-2x bgb"></i>'
                mm1q.append(mm2w)

            let mm3m = createelement('div')
                mm3m.className = 'hghggh';
               let gg1m = createelement('div');
                   gg1m.className = 'rtr';
                   let eeem = createelement('p')
                        eeem.innerHTML = 'Energy Limit';
                    gg1m.append(eeem);
                    let eee1m = createelement('span');
                        eee1m.className = 'h9s';
                    let imgrm = createelement('i')
                        imgrm.className = 'fa fa-coins disa';
                        eee1m.append(imgrm);
                    let eee2m = createelement('h5')
                        eee2m.className = 'energyman'
                        eee2m.innerHTML = energylimitty;
                        eee1m.append(eee2m);
                    let ghm = createelement('h5');
                        ghm.innerHTML = '|';
                        eee1m.append(ghm)
                    let eee3m = createelement('h5');
                        eee3m.className = 'Energymasster'
                        eee3m.innerHTML = energylimitaion + ' level';
                        eee1m.append(eee3m);
                        gg1m.append(eee1m)
                mm3m.append(gg1m)
            mm1q.append(mm3m)

            let mm4n = createelement('div')
                mm4n.className = 'nbbm';
                let luckyn = createelement('i');
                    luckyn.className = 'fa fa-angle-right bcc';
                    mm4n.append(luckyn)
                mm1q.append(mm4n)


            mmmq.append(mm1q)

        boostw.append(mmmq);

         mmmq = createelement('div')
            mmmq.className = 'emmanuel';
            mmmq.style.marginTop = '4%';
             mm1q = createelement('div')
                mm1q.className = 'paring';
                 mm2w = createelement('div')
                    mm2w.className = 'noneoftheo';
                    mm2w.innerHTML = '<i class="fa fa-bolt fa-2x bgb"></i>'
                mm1q.append(mm2w)

             mm3m = createelement('div')
                mm3m.className = 'hghggh';
                gg1m = createelement('div');
                   gg1m.className = 'rtr';
                    eeem = createelement('p')
                        eeem.innerHTML = 'Recharging Speed';
                    gg1m.append(eeem);
                     eee1m = createelement('span');
                        eee1m.className = 'h9s';
        
                     eee3m = createelement('h5');
                        eee3m.innerHTML = '0 level';
                        eee1m.append(eee3m);
                        gg1m.append(eee1m)
                mm3m.append(gg1m)
            mm1q.append(mm3m)

            mmmq.append(mm1q)

        boostw.append(mmmq);
        
        wrapper.append(boostw)

        guruq();
        Fulltank();
    }

    if(type == 'task'){
        alert('Hello')
    }

    
}



function guruq(){
    let guruTab = document.querySelector('.boostparent1');
    
    guruTab.addEventListener('click', function(){

    let tapCoinPrice = document.querySelector('.tapCoinPrice')

        let updateGuru = document.getElementsByClassName('Pmaster')[0];
        
        let wrapper = document.querySelector('.coverWrapper');          
        let guruBtn = this;
        if(obj.Tapguru != 0){
            if(obj.GuruActive == true){
                return;
            }
            localStorage.setItem('returnTap', utitbestTap.tap());
            let dataSet = obj;
            let tap = utitbestTap.tap() * 5;
            let guru = obj.Tapguru -1;
                dataSet.Tap = tap;
                dataSet.GuruActive = true;
                dataSet.Tapguru = guru;

            localStorage.setItem('UtitbestTap', JSON.stringify(dataSet));
            let txt = `You have successfully activate Tap Guru ${guru}/3 remaining`;
            updateGuru.innerHTML = guru + '/3';
            tapCoinPrice.appendChild(tapNotify(txt));

            let timmer = setTimeout(() =>{
                let returnBack = Number(localStorage.getItem('returnTap'));
                    dataSet.Tap = returnBack;
                    dataSet.GuruActive = false;
                    localStorage.removeItem('returnTap')
                    localStorage.setItem('UtitbestTap', JSON.stringify(dataSet));
                    clearTimeout(timmer)
            }, 30000);
            wrapper.remove()
        }
    })
}

function tapNotify(d){
    let wrapper = createelement('div');
        wrapper.className = 'notificationWrap';
        let icon = createelement('span');
            icon.className = 'icon';
            icon.innerHTML = '<i class="fa fa-envelope fa-2x"></i>';
        wrapper.append(icon);
    let notify = createelement('h3');
        notify.className = 'noti-txt';
        notify.innerHTML = d;

        setTimeout(() =>{
            wrapper.style.opacity = 0;
        }, 3000);
        setTimeout(() =>{
            wrapper.remove();
        }, 4000);

        wrapper.appendChild(notify);
        return wrapper;
}


currentLeague.innerHTML = utitbestTap.league();
lengthOfremains.innerHTML = obj.Energy;
remains.innerHTML = utitbestTap.limit();


function saveCoinBalance(data){
    let bal = obj.CoinBalance + Number(data);
    obj.CoinBalance = bal;
    localStorage.setItem('UtitbestTap', JSON.stringify(obj));
}

function Fulltank(){
    let fulltankD = document.querySelector('.boostparent2')
        fulltankD.addEventListener('click', function(){
            let remains = document.querySelector('.remain');
            let lengthOfremains = document.querySelector('.lenght');
            let progressvalue = document.querySelector('.progvalue');
            let tapCoinPrice = document.querySelector('.tapCoinPrice')
            let Pmaster = document.querySelector('.phdhdh')
            if(obj.FullTank != 0){
            let tank = obj.FullTank -1;
                obj.FullTank = tank;
                obj.sliderPosition = 100;
                obj.EnergyLimit = obj.Energy;
                
            let txt = 'Full tank Activated, remaining' + tank + '/3';
            Pmaster.innerHTML = tank + '/3';
            remains.innerHTML = obj.EnergyLimit;
            progressvalue.style.width = obj.sliderPosition + '%';
            tapCoinPrice.appendChild(tapNotify(txt));   
            localStorage.setItem('UtitbestTap', JSON.stringify(obj))
            }
        });
}
function Enertylimitation(){
    if(obj.CoinBalance > obj.Energy){
        let energyman = document.querySelector('.energyman');
        let Energymasster = document.querySelector('.Energymasster')
        let tapCoinPrice = document.querySelector('.tapCoinPrice')
        let new_balance = obj.CoinBalance - obj.Energy;
        let level = ++obj.EnergyLimitLevel;
        let energy = obj.Energy * 2;
        let deducted = obj.Energy;
        let speed = obj.RechargingSpeed * 2;

    
            obj.CoinBalance = new_balance;
            obj.EnergyLimitLevel = level;
            obj.Energy = energy;
            obj.RechargingSpeed = speed;
            balance.innerHTML = new_balance;
            energyman.innerHTML = energy;
            Energymasster.innerHTML = level;
            lengthOfremains.innerHTML = energy;
            let txt = `EnergyLimit successully Boosted to level ${level}, ${deducted} has been deducted from your balance`
            localStorage.setItem('UtitbestTap', JSON.stringify(obj));
            tapCoinPrice.appendChild(tapNotify(txt));   
    }
}
function Multitaping(){
    if(obj.CoinBalance > obj.Multitap){
        let tapCoinPrice = document.querySelector('.tapCoinPrice')
        let multimaster = document.querySelector('.multimaster')
        let mullmsa = document.querySelector('.mullmsa')
        let new_balance = obj.CoinBalance - obj.Multitap;
        let level = ++obj.MultitapLevel;
        let multitap = obj.Multitap * 2;
        let deducted = obj.Multitap;


        obj.CoinBalance = new_balance;
        obj.MultitapLevel = level;
        obj.Multitap = multitap;
        obj.Tap = ++obj.Tap;
        
        balance.innerHTML = new_balance;
        multimaster.innerHTML = multitap;
        mullmsa.innerHTML = level;
        let txt = `Multitaplimit successully Boosted to level ${level}, ${deducted} has been deducted from your balance`;
        localStorage.setItem('UtitbestTap', JSON.stringify(obj));
        tapCoinPrice.appendChild(tapNotify(txt));   
    }
}
window.onload = () =>{
    defaultProgress();
    balance.innerHTML = utitbestTap.updateBalance()
}
// document.body.addEventListener('contextmenu', function(one){
//     one.preventDefault();
// })

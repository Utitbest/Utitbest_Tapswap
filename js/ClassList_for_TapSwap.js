class UtitbestAKPAN{
    constructor(t, bln, mtap, engyLmt, speed, guru, tank, task, ref, leg, stats){
        
        this.Tap = t;
        this.Balance = bln;
        this.Multitap = mtap;
        this.EnergyLimit = engyLmt;
        this.RechargingSpeed = speed;
        this.TapTapguru = guru;
        this.FullTank = tank;
        this.Task = task;
        this.ReferalLink = ref;
        this.League = leg;
        this.Statistic = stats;
    }

    tap(){
        return this.Tap;
    }

    league(){
        return this.League
    }
    balance(){
        return this.Balance
    }
    limit(){
        return this.EnergyLimit;
    }
    rechargingspeed(){
        return this.RechargingSpeed;
    }
    savecoinbalancE(b){
        let storeObj = JSON.parse(localStorage.getItem('UtitbestTap'));
        let bal = Number(storeObj.CoinBalance) + Number(b);
            storeObj.CoinBalance = bal;
        localStorage.setItem('UtitbestTap', JSON.stringify(storeObj))
    }
    updateBalance(){
        let data = JSON.parse(localStorage.getItem('UtitbestTap'))
        return data.CoinBalance;
    }
    updateSlider(d){
        let storeObj = JSON.parse(localStorage.getItem('UtitbestTap'));
        let value = storeObj.EnergyLimit - d;
        
    }
}

let tapObject = {
    Tap: 1,
    CoinBalance:5000,
    Multitap:500,
    EnergyLimit:500,
    Energy:500,
    RechargingSpeed:5,
    Tapguru:3,
    FullTank:3,
    EnergyLimitLevel:0,
    MultitapLevel:0,

    Task:{
        Cineama:[],
        Special:[],
        League:[],
        Refs:[],
    },
    Refs:{},

    Stats:{
        TotalShare:500,
        TotalTouches:null,
        TotalPlayers:1,
        DailyUsers:1,
        OnlinePlayers:null
    },

    League:'Wood',
    ReferalLink: 'uid-332988347934',
    GuruActive: false,
    sliderPosition:100

}
localStorage.setItem('UtitbestTap', JSON.stringify(tapObject))   
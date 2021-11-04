class Fechas{
    constructor(cumple){
        this.cumple = cumple;
        this.today=moment();
    }
    getDay(){
        return this.today.format("L")
    }
    getMyBirth(){
        return this.cumple;
    }
    diffYears(){
        return this.today.diff(this.cumple, 'years', true)
    }
    diffDays(){
        return this.today.diff(this.cumple, 'days', true)
    }
    detDifference(time)
}
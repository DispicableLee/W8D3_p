class Clock{
    constructor(){
            const currentDate = new Date()
            this.hour = currentDate.getHours()
            this.minutes = currentDate.getMinutes()
            this.seconds = currentDate.getSeconds()
            this.printTime()
            setInterval(this._tick.bind(this), 1000)
    }

    

    printTime(){
        console.log(`${this.hour}, ${this.minutes}, ${this.seconds}  `)
    }

    _tick(){
        this.seconds++
        if(this.seconds===60){
            this.seconds = 0
            this.minutes++

            if(this.minutes===60){
                this.minutes = 0
                this.hour++

                if(this.hours===24){
                    this.hour = 0
                }
            }
        }
        this.printTime()
    }
}

const clock = new Clock();
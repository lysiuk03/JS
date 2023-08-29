class ExtendedDate extends Date {
   
    toText() {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${this.getDate()} ${monthNames[this.getMonth()-1]}`;
    }

    isFuture() {
        let now = new Date();
        return this >= now;
    }

    isLeapYear() {
        let year = this.getFullYear();
        return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
    }

    getNextDay() {
        const nextDay = new ExtendedDate(this);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    }
}

let date = new ExtendedDate(2003, 7, 10);
console.log("Date: ", date.toText());
console.log("Future/Past: ", date.isFuture());
console.log("Is Leap: ", date.isLeapYear());
console.log("Next day: ",date.getNextDay().toText());

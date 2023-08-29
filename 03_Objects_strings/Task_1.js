let time = {
    hours: 23,
    minutes: 59,
    seconds: 59,

    show: function () {
        console.log(`Time: ${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`);
    },

    addSecond: function() {
        this.seconds++;
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours = (this.hours + 1) % 24;
          }
        }
      },

      subtractSecond: function() {
        this.seconds--;
        if (this.seconds < 0) {
          this.seconds = 59;
          this.minutes--;
          if (this.minutes < 0) {
            this.minutes = 59;
            this.hours = (this.hours - 1 + 24) % 24;
          }
        }
      },

      displayTimeOnPage: function() {
        document.write(`Time: ${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`);
      }
};

time.show();
time.addSecond();
time.show();
time.subtractSecond();
time.show();
time.displayTimeOnPage();


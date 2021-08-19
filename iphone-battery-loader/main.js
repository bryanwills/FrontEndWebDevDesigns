class iPhone {
  constructor(config, options) {
    this.plug = document.getElementById(config.plug);
    this.battery = document.getElementById(config.battery);
    this.charge = document.getElementById(config.charge);
    this.execTime = options.execTime;
    this.chargeSpeed = options.valueSpeed;
    this.chargeInterval = null;
  }

  animate() {
    this.plugIphone(() => {
      clearInterval(this.chargeInterval);
      this.unplugIphone(() => {
        clearInterval(this.chargeInterval);
        this.animate();
      });
    });
  }

  updateChargeValue(value) {
    this.charge.innerHTML = value + "%";
  }

  updateCharge(up) {
    var chargeValue = up ? 0 : 100;
    this.chargeInterval = setInterval(() => {
      if (up) {
        chargeValue += Math.round(
          (this.execTime / this.chargeSpeed / this.execTime) * 100
        );
      } else {
        chargeValue -= Math.round(
          (this.execTime / this.chargeSpeed / this.execTime) * 100
        );
      }
      this.updateChargeValue(chargeValue);
    }, this.execTime / this.chargeSpeed);
  }

  plugIphone(callback) {
    this.plug.classList.add("plug-active");
    setTimeout(() => {
      this.updateCharge(true);
      this.battery.classList.add("charge");
      setTimeout(() => {
        callback();
      }, this.execTime);
    }, this.execTime / 6);
  }

  unplugIphone(callback) {
    this.plug.classList.remove("plug-active");
    setTimeout(() => {
      this.updateCharge(false);
      this.battery.classList.add("decharge");
      setTimeout(() => {
        this.battery.classList.remove("charge");
        this.battery.classList.remove("decharge");
        callback();
      }, this.execTime);
    }, this.execTime / 3);
  }
}

var iphone = new iPhone(
  {
    plug: "plug",
    battery: "battery-div",
    charge: "chargeValue",
  },
  {
    execTime: 3000,
    valueSpeed: 25,
  }
);
iphone.animate();

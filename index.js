

const displayHourBox = () => {
    const hourly = document.getElementById("hourpay");
    hourly.hidden = false;
    const hourlyInput = document.getElementById("hourpay");
    hourlyInput.required = true;
};

const removeHourBox = () => {
    const hourly = document.getElementById("hourpay");
    hourly.hidden = true;

    const hourlyInput = document.getElementById("hourpay");
    hourlyInput.required = false;
};
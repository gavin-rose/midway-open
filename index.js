//declare element storage variables
var btnSubmit, boxHours, errorHours, okHours, boxMinutes, errorMinutes, okMinutes;
var hasHoursErrors, hasMinutesErrors;
var currentHours, currentMinutes;
var numsArray;

//initialize elements
function initialize() {
    btnSubmit = document.getElementById('convert-btn');
    boxHours = document.getElementById('box-hours');
    errorHours = document.getElementById('error-hours');
    okHours = document.getElementById('ok-hours');
    boxMinutes = document.getElementById('box-minutes');
    errorMinutes = document.getElementById('error-minutes');
    okMinutes = document.getElementById('ok-minutes');
    hasHoursErrors = true;
    hasMinutesErrors = false;
    currentMinutes = 0;
    currentHours = 0;
    numsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine'];
}

//validate hours input
/* hours must not be blank, larger than 12, or less than 1 */
function validateHours(hours) {
    if (hours.value == null || hours.value > 12 || hours.value <= 0) {
        //console.log('invalid value detected...');
        window.alert('There is an error with your value for Hours. Please be sure your value is no smaller than 1 and no larger than 12.');
        boxHours.className = 'error pad';
        errorHours.classList.remove('invisible');
        okHours.classList.add('invisible');
        hasHoursErrors = true;
    } else {
        //console.log('valid value detected...');
        boxHours.className = 'ok pad';
        okHours.classList.remove('invisible');
        errorHours.classList.add('invisible');
        hasHoursErrors = false;
    }
    currentHours = hours.value;
    readyToConvert();
}

//validate minutes input
/* minutes must not be blank, larger than 59, or less than 0 */
function validateMinutes(minutes) {
    if (minutes.value == null || minutes.value > 59 || minutes.value < 0) {
        //console.log('invalid value detected...');
        window.alert('There is an error with your value for Minutes. Please be sure your value is no smaller than 0 and no larger than 59.');
        boxMinutes.className = 'error pad';
        errorMinutes.classList.remove('invisible');
        okMinutes.classList.add('invisible');
        hasMinutesErrors = true;
    } else {
        //console.log('valid value detected...');
        boxMinutes.className = 'ok pad';
        okMinutes.classList.remove('invisible');
        errorMinutes.classList.add('invisible');
        hasMinutesErrors = false;
    }
    currentMinutes = minutes.value;
    readyToConvert();
}

//confirm validation
function readyToConvert() {
    if (!hasHoursErrors && !hasMinutesErrors) {
        btnSubmit.disabled = false;
    } else btnSubmit.disabled = true;
}

//convert time to words
function convert() {
    var display, hour;
    currentMinutes = parseInt(currentMinutes);
    currentHours = parseInt(currentHours);
    //convert hour to word
    hour = numsArray[currentHours - 1];
    //construction of cases
    switch (currentMinutes) {
        case 0:
            display = `${hour} o\' clock`;
            break;
        case 15:
            display = `quarter past ${hour}`;
            break;
        case 30:
            display = `half past ${hour}`;
            break;
        case 45:
            if (currentHours == 12) {
                hour = 'one';
            } else hour = numsArray[currentHours];
            display = `quarter to ${hour}`;
            break;
        default:
            if (currentMinutes > 30) {
                if (currentHours == 12) {
                    hour = 'one';
                } else hour = numsArray[currentHours];
                var minutesLeft = 60 - currentMinutes;
                var grabWord = numsArray[minutesLeft - 1];
                var minuteText = 'minutes';
                if (grabWord == 'one') {
                    minuteText = 'minute'
                }
                display = `${grabWord} ${minuteText} to ${hour}`;
            } else if (currentMinutes < 30) {
                var grabWord = numsArray[currentMinutes - 1];
                var minuteText = 'minutes';
                if (grabWord == 'one') {
                    minuteText = 'minute'
                }
                display = `${grabWord} ${minuteText} past ${hour}`;
            }
            break;
    }
    //console.log(display);
    document.getElementById('output').innerText = `You entered... ${display}`;
}
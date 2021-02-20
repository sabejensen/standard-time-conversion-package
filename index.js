const standardTimeConversion = (time) => {
    if(typeof time == 'object') {
        const times = time.toString().split(' ')[4].split(':')
        times[0] = parseInt(times[0])
        let timestamp = 'AM'
        if(24 > times[0] && times[0] > 11 ) {
            timestamp = 'PM'
        }
        if(times[0] > 12) {
            if(timex[0] == 24) {
                times[0] = times[0] - 24
            } else {
                times[0] = times[0] - 12
            }
        }
        times[0].toString()
        console.log(times[0] + ':' + times[1] + timestamp)
        return(times[0] + ':' + times[1] + timestamp)
    } else {
        console.log('Invalid input - Please pass a date object')
    }
}

const militaryTimeConversion = (time) => {
    if(typeof time == 'object') {
        const times = time.toString().split(' ')[4].split(':')
        console.log(times[0] + ':' + times[1])
    } else {
        console.log('Invalid input - Please pass a date object')
    }
}

const timeZoneGet = (time) => {
    if(typeof time == 'object') {
        const timezone = time.toString().split(' ')[5]
        console.log(timezone)
    } else {
        console.log('Invalid input - Please pass a date object')
    }
}

const timeStampGet = (time) => {
    if(typeof time == 'object') {
        const currentTime = parseInt(time.toString().split(' ')[4].split(':')[0])
        let timestamp = 'AM'
        if(24 > currentTime && currentTime > 11 ) {
            timestamp = 'PM'
        }
        console.log(timestamp)
        return(timestamp)
    } else {
        console.log('Invalid input - Please pass a date object')
    }
}

const stringTimeSwitch = (time) => {
    if(typeof time == 'string' && time.length > 3 && time.length < 8) {
        let newTime
        if(time.length > 5) {
            let timestamp = time[time.length-2] + time[time.length-1]
            time = time.slice(0, -2)
            time = time.split(':')
            newTime = parseInt(time[0])
            if(newTime == 12) {
                if(timestamp.toUpperCase() == 'AM') {
                    newTime = '00'
                }
            } else {
                if(timestamp.toUpperCase() == 'PM') {
                    newTime = newTime + 12
                    newTime = newTime.toString()
                }
            }
            newTime = newTime.toString()
            if(newTime.length < 2) { 
                newTime = '0' + newTime
            }
            newTime = newTime + ':' + time[1]
            console.log(newTime)
        } else {
            newTime = time
        }
    } else {
        console.log('Invalid input - Please pass a time string in either standard ("11:00PM") or military ("17:00") format.')
    }
}




module.exports = { standardTimeConversion, militaryTimeConversion, timeZoneGet, timeStampGet, stringTimeSwitch}
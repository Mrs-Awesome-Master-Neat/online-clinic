
function howLongAgo(time_string) {
    let time = time_string.split(/[-T:.Z]/)
    time[1] = parseInt(time[1]) - 1
    time[3] = parseInt(time[3]) + 3
    time.pop()

    time = time.map(t => parseInt(t))
    let date = new Date()
    let time_diff = new Date(time[0], time[1], time[2], time[3], time[4], time[5])
    const t = Math.floor((date - time_diff) / (60 * 1000))
    if(((date-time_diff)/(1000)<10)){
        return 'now'
    }
    else if (t < 1) {
        return " <1m"
    } else if (t < 60) {
        return `${t} m`
    } else if (t > 60 && t < (24 * 60)) {
        return `${Math.round(t / 60)} hr`
    } else if (t > (24 * 60) && t < (24 * 60 * 7)) {
        return `${Math.round(t / (60 * 24))}d`
    }
    else if (t > (24 * 60 * 7*4) && t < (24 * 60 *7* 12*4)) {
        return `${Math.round(t / (60 * 24 * 30))}mo`
    }
    else {
        return `${Math.round(t / (60 * 24 * 52 * 7))}yr`
    }
}

export { howLongAgo }
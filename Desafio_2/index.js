const year = 2022
const holidays = ['01/06', '04/01', '12/25'] 

function countHours(year, holidays) {
    return (
      holidays
        .map(holiday => new Date(holiday + "-" + year))
        .map(date => date.getDay())
        .filter(weekDay => weekDay > 0 && weekDay < 6).length * 2
    )
  }

  console.error(countHours(year, holidays))
//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
function getPercents (percent, number){
  let resalt;
  if (percent >= 0) {
    resalt = `${percent/100*number}`;
  }
  else {
    resalt = 'В качестве процента передано некорректное число';
  }
  return resalt;
}
module.exports = getPercents;
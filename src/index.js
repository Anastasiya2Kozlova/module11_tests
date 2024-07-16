//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
export function getPercents (percent, number){
  if (percent >= 0) {
    const resalt = percent/100*number;
    //console.log(resalt);
  }
  else {
    resalt = 'В качестве процента передано некорректное число';
  }
  return resalt;
}

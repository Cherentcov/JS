// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
  let arr = [false, false, false, true, false, false, false, true, false, false];
  let lives = 2;

  for (let i = 0; i < arr.length; i++) {
    if (roadMines[i] === true) {
      lives -= 1;
      if (lives === 1) {
        console.log('танк поврежден');
        console.log(`танк переместился на ${i + 1}`);
      } else if (lives === 0) {
        console.log(`танк переместился на ${i + 1}`);
        console.log('танк уничтожен');
        break;
      } else {
        console.log(`танк переместился на ${i + 1}`);
      }
    } else {
      console.log(`танк переместился на ${i + 1}`);
    }
  }
}

// вызов функции
moveTank([false, false, false, false, false, false, false, false, false, false]); // танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;

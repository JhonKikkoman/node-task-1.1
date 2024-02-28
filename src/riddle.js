#!/usr/bin/env node
/** @format */

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let gameCount = 1;
let getNum = Math.round(Math.random() * 10);

console.log(`Ответ: ${getNum}\n`);

const game = () => {
  if (gameCount <= 3) {
    rl.question('Загадано число в диапазоне от 0 до 100: ', (answer) => {
      const numAnswer = parseInt(answer);
      console.log(`----------------Попытка ${gameCount}------------------`);
      if (numAnswer === getNum) {
        console.log(`Угадали число! : ${answer} === ${getNum}`);
        rl.close();
      }
      if (numAnswer > getNum) {
        gameCount++;
        console.log(`Число ${numAnswer} больше\n`);
        game();
      }
      if (numAnswer < getNum) {
        gameCount++;
        console.log(`Число ${numAnswer} меньше\n`);
        game();
      }
    });
  } else {
    console.log('Проиграли');
    rl.close();
  }
};

game();

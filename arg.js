const args = process.argv.slice(2);
const colors = require('colors');
const title = require('./modles/title.js');
const fastBomber = require('./modles/sms.js');

const telefon = args[0];
const miktar = args[1];

if(!telefon || !miktar){
  console.log("Kullanım: node arg <telefon> <miktar>".blue)
  process.exit(1)
}

if (telefon.length != 10) {
  console.log("Telefon numarası 10 haneli olmalıdır.".red);
  process.exit(1)
}
if(isNaN(miktar) || miktar.length == 0){
  console.log("Lütfen geçerli bir sayı giriniz.".red)
  process.exit(1)
}

title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Gonderiliyor...'.rainbow);

fastBomber(telefon, miktar);

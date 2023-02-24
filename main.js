// switch case

// 1.1-7 gacha butun son berilgan kiritilgan songa mos ravishda hafta kunini so'zlarda ifodolovchi dastur tuzing

// let day = 2;
// switch (day) {
//   case 1:
//     console.log('du');
//     break;
//     case 2:
//     console.log('se');
//     break;
//     case 3:
//     console.log('cho');
//     break;
//     case 4:
//     console.log('pa');
//     break;
//     case 5:
//     console.log('ju');
//     break;
//     case 6:
//     console.log('sha');
//     break;
//     case 7:
//     console.log('yak');
//     break;
//     default:
//       console.log('not day');

// }

// 2.K butun son berilgan Baho natijalarini chiqaruvchi dastur tuzing. 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo

// let baho = 4;

// switch (baho) {
//   case 1:
//     console.log('yomon');
//     break;
//     case 2:
//     console.log('qoniqarsiz');
//     break;
//     case 3:
//     console.log('qoniqarli');
//     break;
//     case 4:
//     console.log('yaxshi');
//     break;
//     case 5:
//     console.log('alo');
//     break;
//     default:
//        console.log('bunday baho yoq');
// }

// 3.Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing. M - s 2 - qish

// let month = 9;

// switch (month) {
//   case 1:
//    console.log('qish');
//    break;
//    case 2:
//    console.log('qish');
//    break;
//    case 3:
//    console.log('bahor');
//    break;
//    case 4:
//    console.log('bahor');
//    break;
//    case 5:
//    console.log('bahor');
//    break;
//    case 6:
//    console.log('yoz');
//    break;
//    case 7:
//    console.log('yoz');
//    break;
//    case 8:
//    console.log('yoz');
//    break;
//    case 9:
//    console.log('kuz');
//    break;
//    case 10:
//    console.log('kuz');
//    break;
//    case 11:
//    console.log('kuz');
//    break;
//    case 12:
//     console.log('qish');
//     break;
//     default:
//       console.log('bunday oy yoq');
// }

// 4.Oy raqami berilgan shu oyda nechta kun borligin aniqlovchi dastur tuzing

// let month = 2;

// switch (month) {
//   case 1:
//     console.log("yanvar");
//     break;
//   case 2:
//     console.log("fevral");
//     break;
//   case 3:
//     console.log("mart");
//     break;
//   case 4:
//     console.log("aprel");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("iyun");
//     break;
//   case 7:
//     console.log("iyul");
//     break;
//   case 8:
//     console.log("avgust");
//     break;
//   case 9:
//     console.log("sentabr");
//     break;
//   case 10:
//     console.log("oktabr");
//     break;
//   case 11:
//     console.log("noyabr");
//     break;
//   case 12:
//     console.log("dekabr");
//     break;
//   default:
//     console.log("bunday oy yoq");
// }

// let days = month
// switch (days) {
//   case 1:
//     console.log(31);
//     break;
//     case 2:
//     console.log(28);
//     break;
//     case 3:
//     console.log(31);
//     break;
//     case 4:
//     console.log(30);
//     break;
//     case 5:
//     console.log(31);
//     break;
//     case 6:
//     console.log(30);
//     break;
//     case 7:
//     console.log(31);
//     break;
//     case 8:
//     console.log(31);
//     break;
//     case 9:
//     console.log(30);
//     break;
//     case 10:
//     console.log(31);
//     break;
//     case 11:
//     console.log(30);
//     break;
//     case 12:
//     console.log(31);
//     break;
//     default:
//       console.log('bunday oy yoq');
// }

// // 5.a, b sonlar berilgan c amal ham berilgan a va b sonlar ustida amal bajaruvchi dastur tuzing

// let a = 10;
// let b = 20;
function getInfo(a, b, arifAmal) {
  switch (getInfo) {
    case 1:
      if (arifAmal == "+") {
        console.log(son1 + son2);
      };
          break;
    case 2:
      if (arifAmal == "-") {
        console.log(son1 - son2);
      };
      break;
    case 3:
      if (arifAmal == "*") {
        console.log(son1 * son2);
      };
      break;
    case 4:
      if (arifAmal == "/") {
        console.log(son1 / son2);
      };
      break;
      default:
        console.log('bunday amal yoq');
        break;
  }
}
getInfo(21, 3, '+');

// function getInfo(son1, son2, arifAmal) {
//   if (arifAmal == "+") {
//     console.log(son1 + son2);
//   } else if (arifAmal == "-") {
//     console.log(son1 - son2);
//   } else if (arifAmal == "*") {
//     console.log(son1 * son2);
//   } else if (arifAmal == "/") {
//     console.log(son1 / son2);
//   }
// }

// getInfo(21, 3, "/");

// 6.Bahoga qarab stependiyani aniqlovchi dastur tuzing

// let baho = 4;

// switch (baho) {
//   case 1:
//     console.log("qaytadan topshirish stipendiya yoq");
//     break;
//   case 2:
//     console.log("qaytadan topshirish stipendiya yoq");
//     break;
//   case 3:
//     console.log("400.000 som");
//     break;
//   case 4:
//     console.log("500.000 som");
//     break;
//   case 5:
//     console.log("600.000 som");
//     break;
//     default:
//       console.log('bunday baho qoyilmaydi');
// }

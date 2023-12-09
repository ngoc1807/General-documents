/**
 * Giảm giá khi người dùng đặt trước 1 sản phẩm VINPAST
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

/**
 *    giá gốc < 200 , còn  > thì giảm tối đa 30
 * @param {*} originalPrice
 * @returns
 */
function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 *   backFriday promotion
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice) {
  return originalPrice * 0.4;
}
/**
 *
 * @param {*} originalPrice
 * @returns
 */
function dayPrice(originalPrice) {
  return originalPrice <= 300 ? originalPrice * 0.8 : originalPrice - 40;
}

/**
 * default
 * @param {*} originalPrice
 * @returns
 */
function defaultPrice(originalPrice) {
  return originalPrice;
}

// if else normal

// function getPrice(originalPrice, typePromotion = "default") {
//     // giảm giá khi người dùng đặt trước một sản phẩm VINFAST

//     if (typePromotion === "preOrder") {
//       return preOrderPrice(originalPrice);
//     }

//     // giá gốc < 200 , còn  > thì giảm tối đa 30

//     if (typePromotion === "promotion") {
//       return defaultPrice(originalPrice);
//     }

//     // backFriday promotion
//     if (typePromotion === "blackFriday") {
//       return x;
//     }

//     // 11 promotion
//     if (typePromotion === "11/11/2011") {
//       return promotionPrice(originalPrice);
//     }
//     if (typePromotion === "default") {
//       //  chua co marketing
//       return defaultPrice(originalPrice);
//     }
//   }

// if else Advanced
const getPriceStatus = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  day: dayPrice,
  default: defaultPrice,
};

// console.log(getPrice(160, "default"));
function getPrice(originalPrice, typePromotion) {
  return getPriceStatus[typePromotion](originalPrice);
}

const getPriceStatusMap = new Map([
  ["preOrder", preOrderPrice],
  ["promotion", promotionPrice],
  ["day", dayPrice],
  ["default", defaultPrice],
]);

function getPriceMap(originalPrice, typePromotion) {
  return getPriceStatusMap.get(typePromotion)(originalPrice);
}

console.log(getPriceMap(160, "preOrder"));

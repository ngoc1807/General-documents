function getPrice(originalPrice, typePromotion = "default") {
  // giảm giá khi người dùng đặt trước một sản phẩm VINFAST

  if (typePromotion === "preOrder") {
    return originalPrice * 0.8;
  }

  // giá gốc < 200 , còn  > thì giảm tối đa 30

  if (typePromotion === "promotion") {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
  }

  // backFriday promotion
  if (typePromotion === "blackFriday") {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
  }

  // 11 promotion
  if (typePromotion === "11/11/2011") {
    return originalPrice <= 300 ? originalPrice * 0.9 : originalPrice - 50;
  }
  if (typePromotion === "default") {
    //  chua co marketing
    return originalPrice;
  }
}

console.log(`----> Price:::`, getPrice(200, "preOrder"));

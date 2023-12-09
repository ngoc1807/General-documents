// gọi điện thoại lên hệ thống taxi
// ecommerce shipping cost calculation and its importance

// assumption we build a calculate money module for shoppe

//step 1 : Discount

// step 2: VAT

// step 3: shipping

class Discount {
  calc(value) {
    return value * 0.9;
  }
}
class Shipping {
  calc() {
    return 5;
  }
}

class Frees {
  calc(value) {
    return value * 1.05;
  }
}
class ShopeeFacadePattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.frees = new Frees();
  }

  calc(price) {
    price = this.discount.calc(price);
    console.log("Discount price :::", price);
    price = this.frees.calc(price);
    console.log("Frees price :::", price);

    price += this.shipping.calc();
    console.log("Shipping price :::", price);

    return price;
  }
}

function buy(price) {
  const shoppe = new ShopeeFacadePattern();
  console.log("Price::", shoppe.calc(price));
}
buy(120000);

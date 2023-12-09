// without simple factory pattern
// level 0

const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case "10":
      return {
        name: "10",
        doors: 6,
        price: "100.000 VND",
      };
    case "20":
      return {
        name: "20",
        doors: 16,
        price: "1.100.000 VND",
      };
  }
};
// console.log(serviceLogistics("10"));

// with simple factory pattern

class ServiceLogistics {
  constructor(doors = 6, price = "100.00 VND", name = "Truck 10") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistics(10, "100.000.000 VND", "Tuck 1000");
      case "20":
        return new ServiceLogistics(20, "100.000 VND", "Tuck 20");
    }
  };
}
console.log("Level xxx :", ServiceLogistics.getTransport("20"));

// Ưu điểm : cung cấp 1 cơ chế đặc biệt để tạo 1 đối tượng, tách biệt việc tạo đối tượng và sự dụng đối tượng
// -  chưa logic phán đoán khi cần thiết nó có thể quyết định thể hiện của 1 lớp

//**  Nhược điểm : - Vì tập trung vào tính logic để tạo ra các sản phẩm,   nếu 1 hàm có vấn đề thì một hàm của chúng ta đều không chạy được, khó có thể sử dụng rộng mở đc * /

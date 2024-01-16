# MVVM Architecture (Model - View - ViewModel)

## 1. Khái niệm

- Là một mô hình kiến ​​trúc được phát minh bởi kiến ​​trúc sư Ken Cooper và Ted Peters của Microsoft.

- Tách biệt rõ ràng `logic` nghiệp vụ của ứng dụng khỏi giao diện người dùng.

- Cấu trúc này đảm bảo rằng giao diện người dùng không tương tác trực tiếp với logic nghiệp vụ, nâng cao khả năng bảo trì và tổ chức ứng dụng.

## 2. Cấu trúc

- `Model`:

  - Chịu trách nhiệm quản lý dữ liệu của ứng dụng.

  - Là sự đóng gói dữ liệu và các quy tắc kinh doanh chi phối quyền truy cập và cập nhật dữ liệu này
  - `Model` thông báo cho `ViewModel` về bất kỳ thay đổi nào trong dữ liệu, từ đó cập nhật `ViewModel`
  - Nó không có ràng buộc với `View` hoặc `Controller` vì vậy có thể được xử dụng lại dễ dàng
  - `Model` không có bất kỳ kiến ​​thức nào về cách trình bày dữ liệu của Chế độ `View`.

- `View` :

  - `View` trong mẫu kiến ​​trúc MVVM thể hiện giao diện người dùng (user interface) và các thành phần của nó (components)
  - Nó hiển thị dữ liệu có trong Model tới người dùng
  - `View` nhận đầu vào của người dùng và chuyển chúng đến `ViewModel`
  - Nó cung cấp phản hồi trực quan cho người dùng dựa trên những thay đổi trong `ViewModel`.
  - `View` cũng chịu trách nhiệm đưa ra các sự kiện `PropertyChanged` trên `ViewModel` để cập nhật giao diện người dùng bất cứ khi nào dữ liệu thay đổi.

  - `View` không chứa bất kỳ logic nghiệp vụ hoặc mã dành riêng cho ứng dụng nào trách nhiệm duy nhất của nó là hiển thị dữ liệu từ `ViewModel`.

  - Liên kết các biến quan sát và hành động bởi `View Model`. Quan hệ giữa `View Model` và `View` là `1-n`, nghĩa là nhiều `View` có thể liên kết với 1 `ViewModel`

- `ViewModel` :
  - Chứa các `model` và chuẩn bị các dữ liệu quan sát cho `View`. Nó cung cấp các móc để truyền dữ liệu từ `View` sang `Model`. Một điều cần phải ghi nhớ là `ViewModel` sẽ không ràng buộc vào `View`

## Vai trò

- ViewModel, đóng vai trò là nền tảng mô hình, xử lý các tương tác của người dùng và cập nhật Mô hình
- Chế độ xem cung cấp giao diện người dùng, trình bày dữ liệu và nhận thông tin đầu vào của người dùng.

## kết hợp với Clean Architecture

- Khi nói đến các mẫu kiến ​​trúc, `Clean Architecture` giữ một vị trí quan trọng. Một trong những ưu điểm chính của Kiến trúc sạch là khả năng kiểm tra tăng lên mà nó mang lại. Nhờ cấu trúc của nó, mã trong kiến ​​trúc này dễ kiểm tra hơn so với chỉ sử dụng MVVM. Đây là một yếu tố quan trọng, đặc biệt là trong các dự án lớn hơn, nơi việc kiểm tra nghiêm ngặt là điều cần thiết. Hơn nữa, Clean Architecture thúc đẩy việc tách mã hơn nữa, đây là một lợi thế đáng kể vì nó tăng cường tính linh hoạt và khả năng thích ứng.

- Cấu trúc gói trong Clean Architecture có tính trực quan cao, giúp điều hướng dễ dàng ngay cả đối với các thành viên mới trong nhóm. Ưu điểm này thúc đẩy quá trình triển khai mượt mà hơn và quản lý mã hiệu quả. Ngoài ra, do tính chất có cấu trúc tốt nên việc duy trì một dự án dựa trên Kiến trúc sạch sẽ dễ dàng hơn đáng kể. Cuối cùng, nó cho phép các nhóm bổ sung các tính năng mới nhanh hơn, từ đó đẩy nhanh tốc độ phát triển và tạo điều kiện phát hành thị trường nhanh hơn.

**Disadvantages of Clean Architecture**

- Mặc dù có nhiều lợi ích nhưng cũng có những hạn chế nhất định liên quan đến Kiến trúc sạch. Một trong những thách thức là đường cong học tập dốc, có thể đặc biệt khó khăn đối với người mới bắt đầu. Việc hiểu và áp dụng hiệu quả mẫu kiến ​​trúc này đòi hỏi phải nắm vững các khái niệm và kỹ thuật phức tạp, điều này có thể tốn thời gian và đáng sợ đối với một số nhà phát triển.

- Một nhược điểm khác của Clean Architecture là sự phức tạp của nó. Cấu trúc phức tạp và các yếu tố khác nhau có liên quan có thể khiến việc triển khai khó khăn hơn so với các kiến ​​trúc đơn giản hơn, có khả năng làm chậm quá trình phát triển ban đầu. Cuối cùng, có thể có những trường hợp Kiến trúc sạch dẫn đến kỹ thuật quá mức. Đối với các dự án nhỏ hơn, đơn giản hơn, cấu trúc mở rộng và các biện pháp thực hành nghiêm ngặt của Kiến trúc Sạch có thể là quá mức cần thiết, dẫn đến những phức tạp không cần thiết và kém hiệu quả.

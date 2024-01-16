# MVP Architecture (Model-View-Presenter)

## 1. Khái niệm

- Interface Architectural Pattern (kiến trúc giao diện người dùng)
- Automated Unit Testing và Separation of Concerns\*\*
  - **Automated Unit Testing:**
    - Unit Testing là một quá trình phát triển phần mềm, trong đó có các phần nhỏ nhất có thể test, kiểm tra của ứng dụng gọi là Unit, được xem xét riêng rẽ, độc lập để hoạt động tốt.
    - Unit Testing có thể được thực hiện thủ công nhưng thường là tự động nên được gọi là Automated Unit Testing.
  - **Separation of Concerns:**
    - Là nguyên tắc để tách một chương trình phần mềm thành các thành phần riêng biệt, phần này thay đổi thì không phục thuộc vào phần kia và ngược lại.

## 2. Cấu trúc

- `Model:` Là một interface xác định dữ liệu được hiển thị, hoặc dữ liệu này được thực hiện trong giao diện người dùng (UI).
- `View:` Là một interface thụ động dùng để hiển thị dữ liệu (là Model) và định hướng các lệnh người dùng (events) tới Presenter để Presenter hành động dựa trên các dữ liệu đó.
- `Presenter:` Hành động theo Model và View. Presenter lấy dữ liệu từ repositories (Model), sau đó định dạng dữ liệu và hiển thị lên View.

## 3. Tại sao nên dùng MVP

- Với `MVP`, ứng dụng Android được tách thành 3 tầng là `model-view-presenter`, mỗi tầng được chia thành module nhỏ với vai trò riêng biệt, thỏa mãn `Simplicity`.
- Tầng `Presenter` là nơi tập trung xử lý logic, là cầu nối giữa model và view, thỏa mãn Focus on `Business Logic`.
- Tách thành 3 tầng giúp `MVP` dễ dàng Testing, gỡ bỏ tính năng không phù hợp và thêm tính năng mới, giúp maintain ứng dụng dễ dàng và chi phí thấp.

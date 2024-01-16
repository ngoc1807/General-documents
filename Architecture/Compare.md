# MVC - MVP

- MVC:

  - View có thể gọi đến Model
  - Unit Testing không tốt bằng MVP
  - Tất cả các View cùng chung một Controller

- MVP:

  - View có thể xem là không có liên kết gì với Model, Presenter có trách nhiệm liên kết Model tới View.
  - Dễ dàng sử dụng Unit Testing hơn vì tương tác với View thông qua interface.
  - Thường thì một View sẽ tương ứng với một Presenter. Những View phức tạp có thể có nhiều presenter cùng đảm nhiệm.

<!-- ================================= -->
<!-- ============MVP - MVVM============== -->
<!-- ================================= -->

# MVP - MVVM

### **MVP**

View : `n-n` : Presenter : `n-n` : Model

### **MVVM**

View : `1-n` : View Model : `n-n` : Model

#### Liên kết chặt

- Với mỗi Activity hoặc Fragment chúng ta cần một Presenter. Đây là một sự ràng buộc cứng nhắc. Presenter giữ tham chiếu của Activity và Activity giữ tham chiếu của presenter. Mối quan hệ 1:1 là vấn đề lớn nhất.

- Khi độ phức tạp của view tăng lên, tương tự với sự phức tạp của việc bảo trì và xử lý quan hệ này cũng tăng lên. Điều này dẫn đến những vấn đề giống như trước đó chúng ta đã gặp, nếu thay đổi thiết kế thì chúng ta sẽ phải chỉnh sửa cả quan hệ của chúng.

```
ViewModel là một lớp đơn giản tương tác với lớp logic/model và đưa trạng thái/dữ liệu ra bên ngoài, và thực sự không biết dữ liệu đó được sử dụng như thế nào và bởi thành phần nào. Chỉ có View giữ tham chiếu đến ViewModel, điều này giải quyết được vấn đề liên kết chặt. Một view có thể giữ tham chiếu của nhiều ViewModel.
```

#### Khả năng test

- Do presenter bị trói buộc chặt vào view, viết unit test trở nên khá khó khăn do nó phụ thuộc vào view.

- ViewModel dễ dàng hơn cho việc test vì chúng chỉ đưa trạng thái ra bên ngoài và có thể test độc lập mà không phụ thuộc vào cách dữ liệu được hiển thị, nghĩa là hoàn toàn không phụ thuộc vào view.

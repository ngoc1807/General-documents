// Push or Pull ngăn xếp công nghệ nào được FACEBOOK và INSTAGRAM lựa chọn phát triển NEWS FEED?
//  https://www.youtube.com/watch?v=qu3Lc2evkTw&list=PLw0w5s5b9NK7TSuHpxOMvVtRuaEgHQczQ&index=4&ab_channel=TipsJavascript

// push and pull distribution strategy

// open app and in into new feed
//  each has a different new feed
// quantity has  different new feed

// PULL

// Messi vào app thì nó gửi 1 request tới từng người trả về stastus mới trong 1 data rồi hiển chị
// Nhược điểm : N user follow  -> pull N request

// PUSH

/// Messi đăng nhập vào thì messi sẽ có sẵn ở home gửi request chứa data có sẵn
// Khi ronaldo, benzema đăng status mới thì nó sẽ tự PUSH  vào data news feed của những người follow (messi)
//  khi ronaldo đăng 3 status thì 3 status sẽ đưa vào 1tr bản ghi của  1 tr người follow

// Ưu điểm : Chỉ cần truy cập news feed của mình là có data
//  Nhanh gọn lẹ

// Nhược điểm :
//  tỷ lệ ghi db cao (lãng phí DB) , ví dụ CR7 có 1 triệu followers thì có 1 triệu bản ghi
// tốc độ nhận tin của người followers có thể  chậm hơn người khác

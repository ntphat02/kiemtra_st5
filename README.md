# 🛒 Dự Án Quản Lý Sản Phẩm (Node.js + MongoDB)
Nhóm thực hiện: Here We Go

Đây là dự án bài tập xây dựng ứng dụng web Fullstack đơn giản với các chức năng CRUD (Thêm, Xem, Sửa, Xóa) sản phẩm, sử dụng mô hình Client-Server.

## 🚀 Công nghệ sử dụng
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Version Control:** Git & GitHub

## 📋 Yêu cầu cài đặt (Prerequisites)
Để chạy được dự án này, máy tính của bạn cần cài sẵn:
1. **Node.js** (Phiên bản 14 trở lên).
2. **MongoDB** (Đã cài đặt và đang chạy ở cổng mặc định `27017`).
3. **Git** (Để clone dự án).

## 🛠 Hướng dẫn cài đặt & Chạy dự án

### Bước 1: Clone dự án về máy
Mở terminal/cmd và chạy lệnh:
```bash
git clone [https://github.com/DuyPhamMinh/Kiem_tra.git](https://github.com/DuyPhamMinh/Kiem_tra.git)
cd Kiem_tra
Bước 2: Cài đặt các thư viện (Dependencies)
Do thư mục node_modules không được đẩy lên Git, bạn cần tải lại các thư viện bằng lệnh:

Bash

npm install
Bước 3: Khởi động MongoDB
Hãy chắc chắn rằng MongoDB trên máy bạn đang chạy. Nếu dùng Windows service thì nó thường tự chạy, hoặc bạn có thể mở MongoDB Compass và kết nối vào mongodb://localhost:27017.

Bước 4: Chạy Server
Tại thư mục gốc của dự án, chạy lệnh:

Bash

node server.js
Nếu thành công, màn hình sẽ hiện:

Server running on port 5000 MongoDB Connected

Bước 5: Sử dụng
Mở trình duyệt web (Chrome, Edge, Cốc Cốc) và truy cập địa chỉ: 👉 http://localhost:5000

⚙️ Các chức năng chính
Hiển thị danh sách: Load dữ liệu từ MongoDB hiển thị lên giao diện.

Thêm mới: Nhập thông tin ID, Tên, Giá, Ảnh và lưu vào Database.

Xóa: Xóa sản phẩm khỏi Database.

Sửa: Cập nhật giá sản phẩm.

📝 Thông tin thêm
Dự án này cũng bao gồm bài tập thực hành quản lý source code với Git:

Thực hiện hơn 10 commits.

Giả lập quy trình Feature Branch Workflow (Main <- Dev <- Feature).

Tạo và xử lý 2 Conflicts thực tế.



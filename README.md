# ☕ Coffee App (React Native)

Ứng dụng mobile bán cà phê được xây dựng bằng **React Native + Expo**, hỗ trợ xem danh sách sản phẩm, lọc theo loại và xem chi tiết sản phẩm.

---

## 🚀 Tính năng

* 🏠 Trang Home hiển thị danh sách sản phẩm
* 🔍 Tìm kiếm sản phẩm
* 🧃 Lọc theo danh mục (Macchiato, Latte, Americano...)
* 📦 Xem chi tiết sản phẩm
* 📱 Giao diện hiện đại, responsive

---

## 📂 Cấu trúc thư mục

```
src/
 ├── assets/          # Hình ảnh
 ├── data/            # Dữ liệu sản phẩm
 │    └── index.js
 ├── navigation/      # Điều hướng
 │    └── Navigation.tsx
 ├── screens/         # Màn hình
 │    ├── Home.tsx
 │    ├── Details.tsx
 │    └── Splash.tsx
```

---

## 🛠️ Công nghệ sử dụng

* React Native
* Expo
* React Navigation
* Expo Vector Icons
* JavaScript / TypeScript

---

## ⚙️ Cài đặt

### 1. Clone project

```bash
git clone https://github.com/Long14516/111.git
cd coffee-app
```

### 2. Cài dependencies

```bash
npm install
```

### 3. Chạy app

```bash
npx expo start
```

---

## 🧠 Cách hoạt động

### 🔹 Filter sản phẩm

```js
const filteredProducts =
  selected === "All Coffee"
    ? products
    : products.filter(p => p.type === selected);
```

### 🔹 Điều hướng sang màn hình Detail

```js
navigation.navigate("Details", { product: item });
```

### 🔹 Nhận dữ liệu ở Detail

```js
const { product } = route.params;
```

---

## ❗ Lưu ý

* `type` trong data phải trùng với category
* Ảnh local phải dùng `require()`
* Không render trực tiếp array vào JSX (phải dùng `.map()`)

---

## 📌 Hướng phát triển

* 🛒 Thêm giỏ hàng
* ❤️ Favorite sản phẩm
* 🔐 Đăng nhập / đăng ký
* 💳 Thanh toán
* 🔍 Search nâng cao

---

## 🖼️ App UI Preview

![APP UI](.src/assets/test1.jpg)
![APP UI](.src/assets/test2.jpg)
![APP UI](.src/assets/test3.jpg)

---


## 👨‍💻 Thông tin

* Họ tên: Ngô Hoàng Long
* MSV: 23810310184
* Lớp: D18CNPM4

---

## 📄 License

MIT License

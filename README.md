[🌐 Language: **English**](#english) | [**Tiếng Việt**](#tiếng-việt)

---

<a name="english"></a>

# 🧑‍💻 Pham Nguyen Nhat Truong — Data Science Portfolio

**Personal portfolio website showcasing projects, blog, and professional profile.**

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Tailwind%20CSS%20%7C%20shadcn/ui-purple?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📖 About

A modern, multilingual (🇻🇳 🇬🇧 🇷🇺 🇨🇳 🇰🇷 🇯🇵) personal portfolio built with React & Tailwind CSS. Features animated sections, dark/light theme, project showcases, blog, resume, and a contact page.

## 🖥️ Live Demo

> 🔗 [View Live Site](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)

---

## 🚀 Complete Setup Guide (For Absolute Beginners)

> **Don't worry if your computer has nothing installed yet!** Follow every step below in order. Each step explains *what* you're installing and *why*.

### Step 0 — Open Your Terminal

| OS | How to open |
|---|---|
| **Windows** | Press `Win + R`, type `cmd`, press Enter. Or search "**PowerShell**" in the Start menu. |
| **macOS** | Press `Cmd + Space`, type `Terminal`, press Enter. |
| **Linux** | Press `Ctrl + Alt + T`. |

> 💡 The terminal (also called "command line") is where you'll type all commands below. Don't be afraid of it — just copy-paste each command!

---

### Step 1 — Install Node.js (The Engine)

Node.js is the runtime that lets your computer understand and run JavaScript/TypeScript code.

#### Option A: Direct Download (Easiest)

1. Go to 👉 [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the big green button)
3. Run the installer — click **Next → Next → Install → Finish**
4. **Restart your terminal** after installation

#### Option B: Using nvm (Recommended for Developers)

<details>
<summary>🔽 Click to expand nvm instructions</summary>

**macOS / Linux:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Close and reopen your terminal, then:
```bash
nvm install --lts
```

**Windows:**
1. Download nvm-windows from 👉 [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. Install it, then open a new terminal:
```bash
nvm install lts
nvm use lts
```

</details>

#### ✅ Verify Installation

```bash
node --version
npm --version
```
You should see version numbers like `v20.x.x` and `10.x.x`. If you see `command not found`, restart your terminal and try again.

---

### Step 2 — Install Git (Version Control)

Git lets you download ("clone") the project source code.

#### Option A: Direct Download

1. Go to 👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Download for your OS and install with default settings

#### Option B: Using Package Manager

<details>
<summary>🔽 Click to expand</summary>

**macOS** (with Homebrew):
```bash
brew install git
```

**Ubuntu / Debian Linux:**
```bash
sudo apt update && sudo apt install git -y
```

**Windows** (with winget):
```bash
winget install --id Git.Git -e --source winget
```

</details>

#### ✅ Verify Installation

```bash
git --version
```

---

### Step 3 — Install a Code Editor (Optional but Recommended)

We recommend **Visual Studio Code** — it's free, powerful, and beginner-friendly.

1. Go to 👉 [https://code.visualstudio.com](https://code.visualstudio.com)
2. Download and install for your OS
3. Open VS Code → click **Terminal** → **New Terminal** (now you can type commands inside VS Code!)

> 💡 **Useful VS Code Extensions** (optional):
> - `ES7+ React/Redux/React-Native snippets`
> - `Tailwind CSS IntelliSense`
> - `Prettier - Code formatter`

---

### Step 4 — Download the Project

```bash
# Navigate to where you want the project (e.g., Desktop)
cd ~/Desktop

# Clone (download) the project
git clone <YOUR_GIT_URL>

# Enter the project folder
cd <YOUR_PROJECT_NAME>
```

> 💡 Replace `<YOUR_GIT_URL>` with the actual Git URL of this repository (find it by clicking the green **Code** button on GitHub).

---

### Step 5 — Install Dependencies

Dependencies are pre-built code packages that this project needs to run.

```bash
npm install
```

> ⏳ This may take 1–3 minutes on the first run. You'll see a progress bar. Wait until it finishes.

---

### Step 6 — Start the Website! 🎉

```bash
npm run dev
```

You should see output like:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.x.x:8080/
```

**Open your browser** and go to 👉 **http://localhost:8080**

🎊 **Congratulations! The website is now running on your computer!**

> To stop the server, press `Ctrl + C` in the terminal.

---

## 🛠️ Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for style issues |
| `npm run test` | Run automated tests |

---

## 📁 Project Structure

```
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/          # Images (avatar, project screenshots)
│   ├── components/      # Reusable UI components
│   │   └── ui/          # shadcn/ui design system components
│   ├── contexts/        # React context providers (Theme, Language)
│   ├── data/            # Static data (projects, skills, translations)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (Home, Projects, Blog, etc.)
│   └── lib/             # Utility functions
├── index.html           # Entry point
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts       # Vite build configuration
└── package.json         # Dependencies and scripts
```

---

## 🎨 Features

- 🌍 **6 Languages** — Vietnamese, English, Russian, Chinese, Korean, Japanese
- 🌗 **Dark / Light Theme** — Automatic detection + manual toggle
- ✨ **Smooth Animations** — Powered by Framer Motion
- 📱 **Fully Responsive** — Mobile-first design
- 📄 **Resume Page** — Professional profile with downloadable CV
- 📬 **Contact Form** — Get in touch easily
- 🧩 **Component Library** — Built on shadcn/ui + Radix UI

---

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 18, TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Animations** | Framer Motion |
| **Routing** | React Router v6 |
| **State** | React Context API, TanStack Query |
| **UI Primitives** | Radix UI |

---

## ❓ Troubleshooting

<details>
<summary><strong>"command not found: node"</strong></summary>

Node.js is not installed or your terminal doesn't know where to find it.
- Restart your terminal after installing Node.js
- On Windows: restart your computer
- Verify with `node --version`
</details>

<details>
<summary><strong>"npm install" shows errors</strong></summary>

- Make sure you're inside the project folder: `cd <YOUR_PROJECT_NAME>`
- Try deleting `node_modules` and reinstalling:
  ```bash
  rm -rf node_modules
  npm install
  ```
- On Mac/Linux, if you get permission errors: `sudo npm install`
</details>

<details>
<summary><strong>"Port 8080 is already in use"</strong></summary>

Another application is using port 8080. Either:
- Close that application, OR
- Start with a different port: `npx vite --port 3000`
</details>

<details>
<summary><strong>The page is blank or shows errors</strong></summary>

- Open browser DevTools (press `F12`) → check the **Console** tab for errors
- Make sure `npm install` completed successfully
- Try `npm run build` to check for compilation errors
</details>

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "Add amazing feature"`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<br>

<a name="tiếng-việt"></a>

# 🧑‍💻 Phạm Nguyễn Nhật Trường — Portfolio Data Science

**Website portfolio cá nhân trưng bày các dự án, blog và hồ sơ nghề nghiệp.**

![Trạng thái](https://img.shields.io/badge/Trạng_thái-Đang_hoạt_động-success?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite-blue?style=flat-square)
![Giao diện](https://img.shields.io/badge/Giao_diện-Tailwind%20CSS%20%7C%20shadcn/ui-purple?style=flat-square)

## 📖 Giới thiệu

Website portfolio cá nhân đa ngôn ngữ (🇻🇳 🇬🇧 🇷🇺 🇨🇳 🇰🇷 🇯🇵), được xây dựng bằng React & Tailwind CSS. Bao gồm hiệu ứng động, chế độ sáng/tối, trưng bày dự án, blog, hồ sơ nghề nghiệp và trang liên hệ.

---

## 🚀 Hướng Dẫn Cài Đặt Chi Tiết (Dành Cho Người Mới Hoàn Toàn)

> **Đừng lo nếu máy bạn chưa cài gì cả!** Hãy làm theo từng bước bên dưới theo đúng thứ tự. Mỗi bước đều giải thích bạn đang cài *cái gì* và *tại sao*.

### Bước 0 — Mở Terminal (Cửa sổ Dòng lệnh)

| Hệ điều hành | Cách mở |
|---|---|
| **Windows** | Nhấn `Win + R`, gõ `cmd`, nhấn Enter. Hoặc tìm "**PowerShell**" trong menu Start. |
| **macOS** | Nhấn `Cmd + Space`, gõ `Terminal`, nhấn Enter. |
| **Linux** | Nhấn `Ctrl + Alt + T`. |

> 💡 Terminal (hay còn gọi là "dòng lệnh") là nơi bạn sẽ gõ tất cả các lệnh bên dưới. Đừng ngại — chỉ cần copy-paste từng lệnh là được!

---

### Bước 1 — Cài Node.js (Bộ máy chạy code)

Node.js là chương trình giúp máy tính bạn hiểu và chạy được code JavaScript/TypeScript.

#### Cách A: Tải trực tiếp (Dễ nhất)

1. Truy cập 👉 [https://nodejs.org](https://nodejs.org)
2. Tải phiên bản **LTS** (nút xanh lớn)
3. Chạy trình cài đặt — nhấn **Next → Next → Install → Finish**
4. **Khởi động lại terminal** sau khi cài xong

#### Cách B: Dùng nvm (Khuyên dùng cho Developer)

<details>
<summary>🔽 Nhấn để xem hướng dẫn nvm</summary>

**macOS / Linux:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Đóng và mở lại terminal, sau đó:
```bash
nvm install --lts
```

**Windows:**
1. Tải nvm-windows tại 👉 [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. Cài đặt, sau đó mở terminal mới:
```bash
nvm install lts
nvm use lts
```

</details>

#### ✅ Kiểm tra cài đặt

```bash
node --version
npm --version
```
Bạn sẽ thấy số phiên bản như `v20.x.x` và `10.x.x`. Nếu thấy `command not found`, hãy khởi động lại terminal.

---

### Bước 2 — Cài Git (Quản lý mã nguồn)

Git giúp bạn tải ("clone") mã nguồn dự án về máy.

#### Cách A: Tải trực tiếp

1. Truy cập 👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Tải cho hệ điều hành của bạn và cài đặt với cài đặt mặc định

#### Cách B: Dùng trình quản lý gói

<details>
<summary>🔽 Nhấn để xem</summary>

**macOS** (với Homebrew):
```bash
brew install git
```

**Ubuntu / Debian Linux:**
```bash
sudo apt update && sudo apt install git -y
```

**Windows** (với winget):
```bash
winget install --id Git.Git -e --source winget
```

</details>

#### ✅ Kiểm tra cài đặt

```bash
git --version
```

---

### Bước 3 — Cài Visual Studio Code (Tuỳ chọn nhưng Khuyên dùng)

**Visual Studio Code** (VS Code) là trình soạn thảo code miễn phí, mạnh mẽ và thân thiện với người mới.

1. Truy cập 👉 [https://code.visualstudio.com](https://code.visualstudio.com)
2. Tải và cài đặt cho hệ điều hành của bạn
3. Mở VS Code → nhấn **Terminal** → **New Terminal** (giờ bạn có thể gõ lệnh ngay trong VS Code!)

> 💡 **Extension hữu ích** (tuỳ chọn):
> - `ES7+ React/Redux/React-Native snippets`
> - `Tailwind CSS IntelliSense`
> - `Prettier - Code formatter`

---

### Bước 4 — Tải Mã Nguồn Về Máy

```bash
# Di chuyển đến nơi bạn muốn lưu dự án (ví dụ: Desktop)
cd ~/Desktop

# Clone (tải) dự án về
git clone <YOUR_GIT_URL>

# Vào thư mục dự án
cd <YOUR_PROJECT_NAME>
```

> 💡 Thay `<YOUR_GIT_URL>` bằng đường link Git thực tế của repository (tìm bằng cách nhấn nút **Code** màu xanh trên GitHub).

---

### Bước 5 — Cài Đặt Thư Viện

Thư viện (dependencies) là các gói code có sẵn mà dự án cần để chạy.

```bash
npm install
```

> ⏳ Lần đầu có thể mất 1–3 phút. Bạn sẽ thấy thanh tiến trình. Hãy đợi cho đến khi hoàn tất.

---

### Bước 6 — Khởi Chạy Website! 🎉

```bash
npm run dev
```

Bạn sẽ thấy kết quả như sau:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.x.x:8080/
```

**Mở trình duyệt** và truy cập 👉 **http://localhost:8080**

🎊 **Chúc mừng! Website đã chạy trên máy tính của bạn!**

> Để dừng server, nhấn `Ctrl + C` trong terminal.

---

## 🛠️ Các Lệnh Có Sẵn

| Lệnh | Mô tả |
|---|---|
| `npm run dev` | Khởi chạy server phát triển với hot-reload |
| `npm run build` | Build bản sản xuất tối ưu |
| `npm run preview` | Xem trước bản build sản xuất |
| `npm run lint` | Kiểm tra lỗi code |
| `npm run test` | Chạy test tự động |

---

## 📁 Cấu Trúc Dự Án

```
├── public/              # Tài nguyên tĩnh (favicon, robots.txt)
├── src/
│   ├── assets/          # Hình ảnh (avatar, screenshot dự án)
│   ├── components/      # Component UI tái sử dụng
│   │   └── ui/          # Component shadcn/ui
│   ├── contexts/        # React Context (Theme, Ngôn ngữ)
│   ├── data/            # Dữ liệu tĩnh (dự án, kỹ năng, bản dịch)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Component trang (Home, Projects, Blog, v.v.)
│   └── lib/             # Hàm tiện ích
├── index.html           # Điểm khởi đầu
├── tailwind.config.ts   # Cấu hình Tailwind CSS
├── vite.config.ts       # Cấu hình Vite
└── package.json         # Dependencies và scripts
```

---

## 🎨 Tính Năng

- 🌍 **6 Ngôn ngữ** — Tiếng Việt, Anh, Nga, Trung, Hàn, Nhật
- 🌗 **Giao diện Sáng / Tối** — Tự động nhận diện + chuyển đổi thủ công
- ✨ **Hiệu ứng Mượt mà** — Sử dụng Framer Motion
- 📱 **Responsive Hoàn toàn** — Thiết kế ưu tiên di động
- 📄 **Trang Hồ sơ** — Hồ sơ nghề nghiệp với CV tải được
- 📬 **Form Liên hệ** — Gửi tin nhắn dễ dàng
- 🧩 **Thư viện Component** — Xây dựng trên shadcn/ui + Radix UI

---

## 🧰 Công Nghệ Sử Dụng

| Danh mục | Công nghệ |
|---|---|
| **Framework** | React 18, TypeScript |
| **Build Tool** | Vite 5 |
| **Giao diện** | Tailwind CSS, shadcn/ui |
| **Hiệu ứng** | Framer Motion |
| **Routing** | React Router v6 |
| **State** | React Context API, TanStack Query |
| **UI** | Radix UI |

---

## ❓ Xử Lý Sự Cố

<details>
<summary><strong>"command not found: node"</strong></summary>

Node.js chưa được cài hoặc terminal không tìm thấy nó.
- Khởi động lại terminal sau khi cài Node.js
- Trên Windows: khởi động lại máy tính
- Kiểm tra lại bằng `node --version`
</details>

<details>
<summary><strong>"npm install" báo lỗi</strong></summary>

- Đảm bảo bạn đang ở trong thư mục dự án: `cd <YOUR_PROJECT_NAME>`
- Thử xoá `node_modules` và cài lại:
  ```bash
  rm -rf node_modules
  npm install
  ```
- Trên Mac/Linux, nếu gặp lỗi quyền: `sudo npm install`
</details>

<details>
<summary><strong>"Port 8080 đang được sử dụng"</strong></summary>

Một ứng dụng khác đang dùng port 8080. Bạn có thể:
- Đóng ứng dụng đó, HOẶC
- Chạy với port khác: `npx vite --port 3000`
</details>

<details>
<summary><strong>Trang trắng hoặc hiển thị lỗi</strong></summary>

- Mở DevTools trình duyệt (nhấn `F12`) → kiểm tra tab **Console**
- Đảm bảo `npm install` đã chạy thành công
- Thử `npm run build` để kiểm tra lỗi biên dịch
</details>

---

## 📜 Giấy Phép

Dự án này là mã nguồn mở theo [Giấy phép MIT](LICENSE).


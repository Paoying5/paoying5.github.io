export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: "news" | "experience";
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "data-leakage-timeseries",
    title: "Cách tôi xử lý data leakage trong time-series",
    date: "2025-01-15",
    category: "experience",
    tags: ["Time-Series", "Data Leakage", "Best Practice"],
    excerpt: "Lần đầu train LSTM mà kết quả đẹp như mơ... hóa ra là vì leak data từ tương lai 😅",
    content: `## Câu chuyện

Khi mới bắt đầu project Air Quality Forecasting, tôi scale toàn bộ data trước khi split train/test. Kết quả? RMSE thấp đáng ngờ.

### Vấn đề
MinMaxScaler fit trên toàn bộ dataset = thông tin từ test set "rò rỉ" vào training. Đây là **data leakage** kinh điển.

### Giải pháp
\`\`\`python
# ❌ Sai
scaler.fit(all_data)

# ✅ Đúng
scaler.fit(train_data)
test_scaled = scaler.transform(test_data)
\`\`\`

### Bài học
- Luôn split trước, scale sau
- Dùng Pipeline của sklearn để tránh leak
- Với time-series: dùng expanding window, không random split`,
  },
  {
    id: "first-overfitting",
    title: "Lần đầu train model bị overfitting",
    date: "2025-02-10",
    category: "experience",
    tags: ["Overfitting", "Deep Learning", "Debugging"],
    excerpt: "Training accuracy 99%, test accuracy 45%. Tôi nghĩ mình là thiên tài... cho đến khi nhìn validation curve 📉",
    content: `## Dấu hiệu

Model LSTM 5 layers, 256 units mỗi layer. Training loss giảm đẹp. Validation loss tăng từ epoch 3.

### Root cause
- Model quá phức tạp cho dataset nhỏ
- Không dùng dropout
- Không early stopping

### Fix
1. Giảm xuống 3 layers, 64 units
2. Thêm Dropout(0.3)
3. Early stopping patience=10
4. Learning rate scheduling

### Kết quả
Test performance cải thiện 40%. Đôi khi ít hơn lại là nhiều hơn 🧘`,
  },
  {
    id: "map-object-detection",
    title: "Tìm hiểu mAP trong Object Detection",
    date: "2025-03-01",
    category: "experience",
    tags: ["Object Detection", "Metrics", "YOLOv8"],
    excerpt: "mAP@50, mAP@50:95, IoU... nghe như mật mã quân sự nhưng thực ra rất logic",
    content: `## mAP là gì?

**mean Average Precision** – trung bình của AP trên tất cả classes.

### Các bước tính
1. Với mỗi class, sắp xếp predictions theo confidence
2. Tính Precision-Recall curve
3. AP = diện tích dưới PR curve
4. mAP = trung bình AP tất cả classes

### IoU Threshold
- **mAP@50**: IoU ≥ 0.5 = correct detection
- **mAP@50:95**: trung bình mAP từ IoU=0.5 đến 0.95

### Trong project Traffic Signs
- mAP@50 = 73.5% → khá tốt cho 51 classes
- Một số class hiếm (biển báo ít gặp) kéo mAP xuống
- Augmentation giúp tăng ~8% mAP`,
  },
  {
    id: "sql-window-functions",
    title: "SQL Window Functions với dataset thực",
    date: "2025-01-20",
    category: "experience",
    tags: ["SQL", "Window Functions", "Analytics"],
    excerpt: "ROW_NUMBER, RANK, LAG, LEAD – từ chỗ sợ đến chỗ nghiện ⌨️",
    content: `## Tại sao Window Functions?

Trong project Retail Analytics, tôi cần:
- Ranking sản phẩm theo doanh thu mỗi tháng
- So sánh doanh thu tháng này vs tháng trước
- Running total & moving average

### Ví dụ thực tế
\`\`\`sql
SELECT 
  product_name,
  month,
  revenue,
  LAG(revenue) OVER (PARTITION BY product_id ORDER BY month) as prev_month,
  revenue - LAG(revenue) OVER (PARTITION BY product_id ORDER BY month) as growth,
  SUM(revenue) OVER (ORDER BY month ROWS UNBOUNDED PRECEDING) as running_total
FROM sales
\`\`\`

### Bài học
- Window Functions không GROUP BY → giữ nguyên rows
- PARTITION BY = "GROUP BY cho từng window"
- Frame clause (ROWS BETWEEN) rất powerful cho moving averages`,
  },
  {
    id: "cors-flask-deploy",
    title: "Lần đầu deploy Flask gặp lỗi CORS",
    date: "2024-12-05",
    category: "experience",
    tags: ["Flask", "CORS", "Deployment", "Debugging"],
    excerpt: "Frontend gọi API, browser block. Mất 3 tiếng để hiểu CORS. Bù lại bây giờ giải thích được cho mọi người 🎓",
    content: `## Tình huống

Deploy Flask API trên Render, frontend trên Vercel. Gọi API → bị block ngay.

### Lỗi
\`\`\`
Access to fetch at 'https://api.example.com' from origin 'https://frontend.vercel.app' 
has been blocked by CORS policy
\`\`\`

### CORS là gì?
Cross-Origin Resource Sharing – browser bảo vệ user bằng cách chặn requests cross-origin trừ khi server cho phép.

### Fix
\`\`\`python
from flask_cors import CORS
app = Flask(__name__)
CORS(app, origins=["https://frontend.vercel.app"])
\`\`\`

### Bài học
- CORS là feature bảo mật, không phải bug
- Chỉ allow specific origins, đừng dùng "*" ở production
- Preflight requests (OPTIONS) cần được handle`,
  },
  {
    id: "llm-agents-impact",
    title: "LLM Agents sẽ thay đổi Data Engineering?",
    date: "2025-02-20",
    category: "news",
    tags: ["LLM", "AI Agents", "Data Engineering"],
    excerpt: "Từ AutoGPT đến Devin – AI agents đang tiến vào pipeline. Data Engineers nên lo lắng hay hào hứng?",
    content: `## Tin tức

OpenAI và các công ty đang phát triển AI agents có khả năng tự viết code, debug, và deploy.

### Ảnh hưởng tới Data Professionals

**Data Engineers:**
- Agents có thể tự viết ETL pipelines đơn giản
- Nhưng: data quality, monitoring, edge cases vẫn cần human judgment
- Focus shift: từ viết code → thiết kế architecture & monitoring

**ML Engineers:**
- AutoML + agents = experiment tracking tự động
- Nhưng: domain knowledge, feature engineering sáng tạo không thể thay thế

**BI Analysts:**
- Natural language to SQL đã khá tốt
- Nhưng: storytelling, business context, stakeholder management = 100% human

### Kết luận
Adapt, don't panic. Learn to work WITH agents, not against them.`,
  },
];

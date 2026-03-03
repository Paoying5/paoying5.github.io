export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  tags: string[];
  problem: string;
  dataset: string;
  architecture: string;
  evaluation: string;
  impact: string;
  limitation: string;
  techStack: string[];
  role: string;
  metrics: { label: string; value: string }[];
  githubUrl: string;
  highlightResult: string;
  chartType: "line" | "bar" | "detection";
  chartData?: { name: string; value: number; value2?: number }[];
}

export const projects: Project[] = [
  {
    id: "traffic-signs",
    title: "Vietnamese Traffic Sign Detection",
    subtitle: "YOLOv8 Computer Vision",
    description: "Nhận diện 51 lớp biển báo giao thông Việt Nam bằng YOLOv8 Nano với transfer learning từ COCO. Inference chỉ 2-4ms trên Tesla T4.",
    color: "forest",
    tags: ["YOLOv8", "Computer Vision", "Transfer Learning", "PyTorch"],
    problem: "Nhận diện biển báo giao thông Việt Nam trong điều kiện thực tế phục vụ hỗ trợ lái xe tự động và an toàn giao thông.",
    dataset: "3,126 ảnh, 51 lớp biển báo giao thông Việt Nam. Augmentation: flip, rotation, brightness, mosaic.",
    architecture: "YOLOv8 Nano với transfer learning từ COCO pretrained weights. Fine-tuning trên custom Vietnamese dataset. NMS post-processing.",
    evaluation: "mAP@50 = 73.5%, Precision = 81.2%, Inference = 2–4ms trên Tesla T4. Confusion matrix phân tích per-class performance.",
    impact: "Proof-of-concept cho ADAS (Advanced Driver Assistance System) phù hợp điều kiện giao thông Việt Nam.",
    limitation: "Dataset còn nhỏ (3,126 ảnh). Một số lớp hiếm có recall thấp. Chưa test trên edge device thực tế.",
    techStack: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Roboflow", "Streamlit"],
    role: "Data collection & labeling, model training & tuning, evaluation, demo inference app.",
    metrics: [
      { label: "Images", value: "3,126" },
      { label: "Classes", value: "51" },
      { label: "mAP@50", value: "73.5%" },
      { label: "Inference", value: "2-4ms" },
    ],
    githubUrl: "https://github.com/Paoying5/Computer-vision-project",
    highlightResult: "mAP@50 đạt 73.5% với inference chỉ 2-4ms — sẵn sàng cho ứng dụng real-time ADAS",
    chartType: "detection",
  },
  {
    id: "air-quality",
    title: "Vietnam Air Quality Forecasting",
    subtitle: "LSTM Time-Series",
    description: "Dự báo chất lượng không khí từ 26,000 bản ghi time-series bằng Stacked LSTM 3 lớp, so sánh baseline ARIMA và Random Forest.",
    color: "sage",
    tags: ["LSTM", "Time-Series", "Flask", "API"],
    problem: "Dự báo chất lượng không khí tại Việt Nam để cảnh báo sớm ô nhiễm, hỗ trợ ra quyết định sức khỏe cộng đồng.",
    dataset: "26,000 bản ghi time-series từ OpenWeather API, bao gồm PM2.5, PM10, O3, NO2, SO2, CO với tần suất thu thập theo giờ.",
    architecture: "Sliding window = 60 → 3-layer Stacked LSTM → MinMax scaling sau split để tránh data leakage. ARIMA làm baseline. Random Forest cho AQI classification.",
    evaluation: "So sánh RMSE/MAE giữa LSTM và ARIMA baseline. Random Forest AQI classification đạt accuracy tốt trên test set.",
    impact: "Proof-of-concept cho hệ thống cảnh báo ô nhiễm real-time. Dashboard Flask cho phép visualize trend và prediction.",
    limitation: "Dữ liệu chỉ từ một nguồn API, chưa có ground-truth từ trạm quan trắc chính thức.",
    techStack: ["Python", "TensorFlow/Keras", "Flask", "Pandas", "OpenWeather API", "Matplotlib"],
    role: "End-to-end: thu thập dữ liệu, EDA, feature engineering, modeling, dashboard development.",
    metrics: [
      { label: "Records", value: "26,000" },
      { label: "Window", value: "60" },
      { label: "LSTM Layers", value: "3" },
      { label: "Models", value: "3" },
    ],
    githubUrl: "https://github.com/Paoying5/air_pollution_analyst",
    highlightResult: "LSTM outperform ARIMA baseline — hệ thống cảnh báo ô nhiễm real-time concept",
    chartType: "line",
    chartData: [
      { name: "Jan", value: 85, value2: 92 },
      { name: "Feb", value: 78, value2: 80 },
      { name: "Mar", value: 95, value2: 98 },
      { name: "Apr", value: 110, value2: 105 },
      { name: "May", value: 130, value2: 125 },
      { name: "Jun", value: 145, value2: 140 },
      { name: "Jul", value: 120, value2: 118 },
      { name: "Aug", value: 105, value2: 110 },
      { name: "Sep", value: 90, value2: 95 },
      { name: "Oct", value: 75, value2: 78 },
      { name: "Nov", value: 88, value2: 85 },
      { name: "Dec", value: 100, value2: 98 },
    ],
  },
  {
    id: "retail-analytics",
    title: "Retail Sales & Customer Analytics",
    subtitle: "SQL Server Analytics",
    description: "Phân tích doanh thu và hành vi khách hàng bằng SQL Server nâng cao: CTE, Stored Procedures, Indexing với dashboard Streamlit.",
    color: "dusk",
    tags: ["SQL Server", "Analytics", "CTE", "Stored Procedures"],
    problem: "Phân tích doanh thu, hành vi khách hàng và tối ưu hóa chiến lược bán lẻ dựa trên dữ liệu giao dịch.",
    dataset: "Relational database thiết kế chuẩn hóa với PK/FK constraints, data validation rules, và indexing strategy.",
    architecture: "SQL Server với CTE cho complex queries, Stored Procedures cho business logic, Transactions cho data integrity.",
    evaluation: "Revenue trend analysis, Average Order Value (AOV), customer segmentation, returning customer detection.",
    impact: "Dashboard analytics giúp business team đưa ra quyết định pricing và inventory.",
    limitation: "Chưa tích hợp real-time streaming. Chưa có predictive model cho churn prediction.",
    techStack: ["SQL Server", "T-SQL", "CTE", "Stored Procedures", "Indexing", "Streamlit"],
    role: "Database design, query optimization, analytics pipeline, dashboard development.",
    metrics: [
      { label: "DB Design", value: "Normalized" },
      { label: "Queries", value: "CTE + SP" },
      { label: "KPIs", value: "Revenue, AOV" },
      { label: "Viz", value: "Streamlit" },
    ],
    githubUrl: "https://github.com/Paoying5/retail-sales-sql-analytics",
    highlightResult: "Phát hiện pattern returning customers — tối ưu chiến lược pricing & inventory",
    chartType: "bar",
    chartData: [
      { name: "Jan", value: 4200 },
      { name: "Feb", value: 3800 },
      { name: "Mar", value: 5100 },
      { name: "Apr", value: 4700 },
      { name: "May", value: 5800 },
      { name: "Jun", value: 6200 },
      { name: "Jul", value: 5500 },
      { name: "Aug", value: 4900 },
      { name: "Sep", value: 5300 },
      { name: "Oct", value: 6100 },
      { name: "Nov", value: 7200 },
      { name: "Dec", value: 8500 },
    ],
  },
];

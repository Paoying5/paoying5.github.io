export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: "💻",
    skills: ["Python", "SQL", "R", "JavaScript", "Bash"],
  },
  {
    category: "Machine Learning / Deep Learning",
    icon: "🧠",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "LSTM", "YOLOv8"],
  },
  {
    category: "Data Engineering",
    icon: "🔧",
    skills: ["Pandas", "NumPy", "Apache Spark (basics)", "ETL Pipelines", "Data Cleaning"],
  },
  {
    category: "BI & Analytics",
    icon: "📊",
    skills: ["Power BI", "Tableau (basics)", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
  },
  {
    category: "Database & DBA",
    icon: "🗄️",
    skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB (basics)", "Indexing", "Query Optimization"],
  },
  {
    category: "MLOps / DevOps",
    icon: "🚀",
    skills: ["Git", "Docker (basics)", "Flask Deployment", "Render", "PythonAnywhere", "CI/CD basics"],
  },
  {
    category: "Big Data",
    icon: "📦",
    skills: ["Apache Spark (basics)", "Data Warehousing Concepts", "Distributed Computing (theory)"],
  },
  {
    category: "Data Governance & Data Product",
    icon: "🛡️",
    skills: ["Data Quality", "Documentation", "Metadata Management", "Reproducibility"],
  },
];

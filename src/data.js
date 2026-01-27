import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

export const personalInfo = {
    name: "Aruna Gudivada",
    role: "Senior Data Scientist",
    tagline: "Results-driven Data Scientist specializing in Supply Chain Analytics, ML, and Causal Inference",
    email: "arunak.gudivada@gmail.com",
    phone: "980-422-5926",
    location: "Austin, TX",
    linkedin: "https://www.linkedin.com/in/aruna-gudivada/",
    github: "https://github.com/arunagudivada", // Placeholder, keep if unknown
    summary: "Senior Data Scientist with over 10 years of experience designing and delivering scalable, high-impact data solutions, specializing in supply chain visibility, forecasting, anomaly detection, and operational experimentation that drive multi-million-dollar efficiency gains. Proven expertise in architecting end-to-end pipelines using Apache Airflow, PySpark, and Snowflake (driving 35% cost reduction). Hands-on leader in big data migrations and statistical modeling (regression, clustering, causal inference) to enable real-time operational decision-making."
};

export const skills = [
    {
        category: "Languages & Frameworks",
        items: ["Python", "SQL", "R", "Bash", "PySpark", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
        category: "Machine Learning",
        items: ["Regression", "Random Forest", "Clustering", "A/B Testing", "Causal Inference", "Ensemble Methods", "Hypothesis Testing"]
    },
    {
        category: "Big Data & Cloud",
        items: ["Snowflake", "Databricks", "Apache Spark", "AWS", "Azure ML", "Docker", "Apache Airflow"]
    },
    {
        category: "Visualization & BI",
        items: ["Tableau", "Matplotlib", "Seaborn", "ggplot2", "Excel"]
    },
    {
        category: "Tools",
        items: ["Git", "Jupyter", "VS Code", "PyCharm"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Supply Chain Optimization (Apple Inc.)",
        description: "Designed and productionized supply chain data models enabling real-time visibility. Re-engineered critical data pipelines reducing runtime by 78% (9 hours to < 2 hours) and improving reporting accuracy from <10% to 98%.",
        technologies: ["Snowflake", "PySpark", "Python", "Airflow"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Global Inventory & Forecasting ML",
        description: "Developed ML models for predictive demand forecasting and inventory optimization. Deployed a time-series forecasting model improving global refurbishment decisions accuracy by 25%.",
        technologies: ["Machine Learning", "Time-Series", "Python", "Snowflake"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Tax Revenue Dashboards",
        description: "Engineered advanced Tableau dashboards for Sales, Franchise, and Property Tax divisions at Texas Comptroller. Enabled drill-down capabilities and trend analysis for senior leadership.",
        technologies: ["Tableau", "SQL", "Data Analysis"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Digital Transformation (ICICI Bank)",
        description: "Drove migration strategy moving 42% of corporate trade clients to online portals. Built SQL-based operational dashboards and conducted customer segmentation analysis.",
        technologies: ["SQL", "Statistical Analysis", "Business Intelligence"],
        link: "#",
        github: "#"
    }
];

export const experience = [
    {
        id: 1,
        role: "Senior Data Scientist",
        company: "Tata Consultancy Services (Client: Apple Inc.)",
        period: "Nov 2021 - Present",
        description: "Leading data initiatives for Apple's supply chain. Designed real-time visibility models, built scalable SAP integrations reducing discrepancies by 98%, and developed ML frameworks for unit replacement matching."
    },
    {
        id: 2,
        role: "BI Developer / Systems Analyst IV",
        company: "Texas Comptroller of Public Accounts",
        period: "Jun 2018 - Oct 2020",
        description: "Developed interactive Tableau dashboards for key tax divisions. Performance-tuned intricate SQL procedures and performed in-depth ad-hoc analysis on large-scale tax datasets."
    },
    {
        id: 3,
        role: "Data Analyst – Assistant Manager (IT)",
        company: "ICICI Bank",
        period: "May 2011 - Dec 2014",
        description: "Led digital transformation strategies for trade finance. Conducted customer segmentation using statistical techniques and resolved critical data quality issues."
    }
];

export const education = [
    {
        id: 1,
        degree: "Master of Science in Analytics",
        school: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        year: "Dec 2024",
        logo: "/gatech.jpg",
        description: "Specialized in Machine Learning, Big Data Analytics, and Computational Data Analytics. Coursework included Data Visualization, Cloud Computing & ML.",
        coursework: ["Machine Learning", "Big Data Analytics for Business", "Computational Data Analytics", "Data Visualization", "Cloud Computing & ML"]
    },
    {
        id: 2,
        degree: "Bachelor of Engineering (Electronics & Communication)",
        school: "Gayatri Vidya Parishad College of Engineering",
        location: "India",
        year: "May 2009",
        logo: "/gayatri.jpg",
        description: "Foundation in engineering principles and analytical problem solving."
    }
];

export const recommendations = [
    {
        id: 1,
        name: "Divaahar Muthuswamy",
        role: "Techno Functional Leader | Data Architect",
        text: "I've had the opportunity to work with Aruna, and she is an exceptional professional with deep expertise in retail, logistics, SAP, and data... Her ability to simplify complex processes and provide clear, actionable solutions sets her apart. Aruna consistently brings strong analytical thinking... reliable, collaborative, and a go-to resource for critical system and process insights."
    },
    {
        id: 2,
        name: "Carol Goldberg",
        role: "DB2 DBA",
        text: "Aruna was very easy to collaborate and work with. Work was always planned out and followed up on. I would be excited to work with her anytime."
    }
];

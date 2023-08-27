import CertificateTypes from "../components/Certification/CertificateTypes";

const PROFILE_DATA = Object.freeze({
    profileName: "Md Afif Al Mamun",
    headline: "Machine Learning Engineer | Gold Medalist",
    bio: "Md Afif Al Mamun is a software engineer from Dhaka, Bangladesh. "
        + "He is currently working at [Infolytx Bangladesh Ltd.](infolytx.com) as a software engineer in machine learning. "
        + "Previously, he used to work at [ServicEngine Ltd.](sebpo.com) as a software engineer where his main role was to develop web scrapers as per clients' requirements and also developing modules in Java for the company framework. "
        + "Being an AI enthusiast, he is actively researching in the field of Deep Learning & Computer Vision and has published a few scholarly articles. "
        + "Afif obtained his bachelor degree from the Department of Computer Science and Engineering of [Daffodil International University](https://daffodilvarsity.edu.bd/). "
        + "He received the **50 Years Victory of Bangladesh Gold Medal** on the [9th convocation](https://convocation.daffodilvarsity.edu.bd/index.php/convocation/nineth-convocation) of the university held in 2022. "
        + "During his study in the university, he collaborated with instructors as a student prefect.",
    homepage: "https://afifaniks.github.io",
    email: "afifanik@gmail.com",
    socialLinks: {
        Github: "https://github.com/afifaniks",
        Instagram: "https://www.instagram.com/afifaniks/",
        Linkedin: "https://www.linkedin.com/in/afifaniks/",
        "Google Dev": "https://g.dev/afifaniks",
        "Google Scholar": "https://scholar.google.com/citations?user=XuauQRIAAAAJ&hl=en",
        ResearchGate: "https://www.researchgate.net/profile/Md-Afif-Al-Mamun",
    },
    experiences: [
        {
            companyName: "University of Calgary",
            companyWebsite: "https://www.ucalgary.ca/",
            history: [
                {
                    designation: "Graduate Research and Teaching Assistant",
                    from: "September 2023",
                    to: "Present",
                }
            ]
        },
        {
            companyName: "Infolytx Bangladesh Ltd.",
            companyWebsite: "https://infolytx.com",
            history: [
                {
                    designation: "Software Engineer II in AI/ML",
                    from: "January 2023",
                    to: "August 2023",
                    affliatedProjects: []
                },
                {
                    designation: "Software Engineer I in AI/ML",
                    from: "January 2022",
                    to: "December 2022",
                    affliatedProjects: []
                },
                {
                    designation: "Jr. Software Engineer in AI/ML",
                    from: "July 2021",
                    to: "December 2021",
                }
            ]
        },
        {
            companyName: "ServicEngine Ltd.",
            companyWebsite: "https://sebpo.com",
            history: [
                {
                    designation: "Software Engineer",
                    from: "July 2020",
                    to: "June 2021",
                }
            ]
        },
    ],
    educations: [
        {
            instituteName: "University of Calgary",
            instituteWebsite: "https://www.ucalgary.ca/",
            from: "September 2023",
            to: "Now",
            degreeType: "M.Sc in Electrical & Software Engineering",
        },
        {
            instituteName: "Daffodil International University",
            instituteWebsite: "https://daffodilvarsity.edu.bd/",
            from: "May 2016",
            to: "August 2020",
            degreeType: "B.Sc in Computer Science & Engineering",
            thesis: "[an-Eye: Safe Navigation in Footpath for Visually Impaired using Computer Vision Techniques](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=XuauQRIAAAAJ&citation_for_view=XuauQRIAAAAJ:u-x6o8ySG0sC)"
        },
        {
            instituteName: "Gurudayal Govt. College",
            instituteWebsite: "https://www.gdc.gov.bd/",
            from: "May 2012",
            to: "August 2014",
            degreeType: "HSC in Science",
        },
    ],
    achievements: [
        {
            title: "50 Years Victory of Bangladesh Gold Medal",
            time: "2022",
            awardedBy: "Daffodil International University",
            desc: "Recognition of academic accomplishment during the undergrad. The medal was given by the Hon'ble Minister of Education Dr. Dipu Moni on the 9th convocation of the university dated January 9, 2022."
        },
        {
            title: "Professor Dr.  M. Lutfar Rahman Scholarship",
            time: "2017",
            awardedBy: "Daffodil International University",
            desc: "Highest GPA (4.00) in the department in the 1st year"
        },
        {
            title: "Education Board Scholarship",
            time: "2012",
            awardedBy: "Dhaka Education Board",
        },
    ],
    publications: [
        {
            title: "TLNet:  A Deep CNN model for Prediction of Tomato Leaf Diseases",
            url: "https://ieeexplore.ieee.org/abstract/document/9392664",
            doi: "10.1109/ICCIT51783.2020.9392664",
            publisher: "ICCIT 2020 (IEEE)",
            year: 2020
        },
        {
            title: "an-Eye: Safe Navigation in Footpath for Visually Impaired using Computer Vision Techniques",
            url: "http://dspace.daffodilvarsity.edu.bd:8080/handle/123456789/5116",
            publisher: "Daffodil International University",
            year: 2020
        },
        {
            title: "Bangla Music Genre Classification Using Neural Network",
            url: "https://ieeexplore.ieee.org/document/9117400/",
            doi: "10.1109/SMART46866.2019.9117400",
            publisher: "SMART 2019 (IEEE)",
            year: 2019
        },
    ],
    projects: [
        {
            title: "anEye",
            url: "https://sites.google.com/view/a-Eye",
            stack: ["Tensorflow", "Keras", "OpenCV", "Python"]
        },
        {
            title: "Bangla Music Genre Classifier",
            url: "https://github.com/afifaniks/BanglaMusicGenreClassification",
            stack: ["Tensorflow", "Keras", "Python"]
        },
        {
            title: "React Weather App",
            url: "https://afifaniks.github.io/weather-app-react/",
            stack: ["React.js", "Bootstrap"]
        },
        {
            title: "Landscape BD Website",
            url: "https://landscapebd.com",
            stack: ["Wordpress"]
        },
        {
            title: "Educator Website",
            url: "https://educator-bd.com",
            stack: ["Django", "Bootstrap"]
        },
        {
            title: "Inventory Management System",
            url: "https://github.com/afifaniks/InventorySystem",
            stack: ["JavaFX", "MySQL"]
        },
        {
            title: "File Retriever",
            url: "https://github.com/afifaniks/FileRetriever",
            stack: ["Android", "Java", "Cross-platform"]
        },
        {
            title: "Floyd Warshall Algorithm Simulation",
            url: "https://github.com/afifaniks/FloydWarshallSimulation",
            stack: ["JavaFX"]
        },
        {
            title: "Java Swing Shopping Cart",
            url: "https://github.com/afifaniks/ShoppingCartinJava",
            stack: ["Java"]
        },
    ],
    certifications: [
        {
            title: "Developing CRUD Application using FastAPI, Python & MongoDB",
            url: "https://www.udemy.com/certificate/UC-28c7ec06-b1b7-47e0-bbeb-1b7e63099dcf/",
            author: "Udemy",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Amazon Elastic Compute Cloud (EC2) Certification",
            url: "https://www.udemy.com/certificate/UC-a0e908b8-7601-4607-9c09-a046bdfefd22/",
            author: "Udemy",
            type: CertificateTypes.CLOUD_SERVICE,
        },
        {
            title: "AWS S3 Basics",
            url: "https://www.coursera.org/account/accomplishments/verify/JF6L69QDJAJW",
            author: "Coursera",
            type: CertificateTypes.CLOUD_SERVICE,
        },
        {
            title: "Into to SQL",
            url: "https://www.kaggle.com/learn/certification/afifaniks/intro-to-sql",
            author: "Kaggle",
            type: CertificateTypes.DATABASE,

        },
        {
            title: "MongoDB Basics",
            url: "https://university.mongodb.com/course_completion/11fc3265-86c6-4344-9fcc-c9ac19093c86/printable?format=pdf",
            author: "MongoDB University",
            type: CertificateTypes.DATABASE,
        },
        {
            title: "Feature Engineering for NLP in Python",
            url: "https://www.datacamp.com/statement-of-accomplishment/course/5be12dd44ff881a4909c7e317a14761f750b4a24",
            author: "Datacamp",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Advanced NLP with spaCy",
            url: "https://www.datacamp.com/statement-of-accomplishment/course/f3a0a3f616e03df251b743cc97dd378ca69105ac",
            author: "Datacamp",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Building Recommendation Engines in Python",
            url: "https://www.datacamp.com/statement-of-accomplishment/course/c7ec306ceee18bbf95aff82b32d0f12fea635f2c",
            author: "Datacamp",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Sentiment Analysis in Python",
            url: "https://www.datacamp.com/statement-of-accomplishment/course/5f7d466a5ec764416c3b86a6d6773b859e942e88",
            author: "Datacamp",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Introduction to Natural Language Processing",
            url: "https://www.datacamp.com/statement-of-accomplishment/course/61ada754cb7d28baddc43a4524b5dd448070d745",
            author: "Datacamp",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Data Manipulation with pandas",
            url: "https://www.datacamp.com/statement-of-accomplishment/course/e6917edca2d5d1672bf2f72345ebd5acfa8902fd",
            author: "Datacamp",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Getting Started with AWS Machine Learning",
            url: "https://www.coursera.org/account/accomplishments/certificate/BJS5C8BBHD52",
            author: "Coursera",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
            url: "https://www.coursera.org/account/accomplishments/certificate/DJRZ9WY5ADQ9",
            author: "Coursera",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Neural Networks and Deep Learning",
            url: "https://www.coursera.org/account/accomplishments/certificate/U5YSEY4MDJV9",
            author: "Coursera",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Python for Data Science",
            url: "https://courses.edx.org/certificates/d1aa6651ed09421d8cc40265f91c66f3",
            author: "edX",
            type: CertificateTypes.AI_ML,
        },
        {
            title: "Automate the Boring Stuff with Python Programming",
            url: "https://www.udemy.com/certificate/UC-eda97c18-820c-4f83-a073-a8873d96b44e/",
            author: "Udemy",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Version Control with Git",
            url: "https://www.coursera.org/account/accomplishments/certificate/N5MK24H77QYY",
            author: "Coursera",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Java Certificate",
            url: "https://www.hackerrank.com/certificates/71404113df34",
            author: "HackerRank",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Python Certificate",
            url: "https://www.hackerrank.com/certificates/9a4611b7c3fc",
            author: "HackerRank",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Python Essentials",
            url: "https://www.credly.com/badges/92af45d0-2105-4318-8ebb-a1bcdec53847",
            author: "IBM",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Learn Javascript",
            url: "https://onemonth.com/certificates/kZdK4kiFsjEahyCiG3XN",
            author: "One Month",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Python & Django Framework Course: The Complete Guide",
            url: "https://www.udemy.com/certificate/UC-8ff543d8-a889-419b-a066-3f774c86652b/",
            author: "Udemy",
            type: CertificateTypes.WEB,
        },
        {
            title: "Front-End Web Development with React",
            url: "https://www.coursera.org/account/accomplishments/certificate/G3QTGCJKJYCC",
            author: "Coursera",
            type: CertificateTypes.WEB,
        },
        {
            title: "Java for Android",
            url: "https://www.coursera.org/account/accomplishments/certificate/BXCEC56ZM56S",
            author: "Coursera",
            type: CertificateTypes.SOFTWARE_ENGINEERING,
        },
        {
            title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            url: "https://www.coursera.org/account/accomplishments/certificate/DWU9YKJGD3RY",
            author: "Coursera",
            type: CertificateTypes.WEB,
        },
    ],
    specializations: [
        "Software Engineering",
        "Natural Language Processing",
        "Computer Vision",
        "System Design",
        "Amazon Web Services",
        "CI/CD"
    ],
    opinions: [
        {
            body: "Afif is a terrific, lively, and astute coder. He is also a fast learner. For a year, I was in charge of him. But the way he groomed himself was amazing! He was a fresh graduate when he joined my team. But take a peek at him right now! He drives his worth to a new level. Thanks to him for being a part of my team. I wish him all the very best.",
            provider: "Tanveer Noman, PMP (AVP, Software Development, ServicEngine Ltd.)"
        },
        {
            body: "It was a terrific experience working with Afif for about a year. He is a polyglot who enjoys learning new things and is never afraid to express his mind. Most significantly, he takes responsibility for the products he is working on, which relieves the project manager and team leader of some of their workload. Because of his wit, working with him was always enjoyable. I wish Afif the best of luck in life and have no doubt that he will succeed.",
            provider: "Mir Mohammad Jaber (Software Engineer, Cefalo)"
        },
        {
            body: "From the very first day of his work in my Team, Afif showed his pro-activeness and competency and as his Team In-charge I had the opportunity to witness that. Later in the journey he never failed to proof himself by portraying his strong skillset and knowledge. He encountered every challenge confidently that was passed at him, and left his marks of expertise and sincerity through his remarkable contributions. I wish Afif every success in his life, and I am sure he will go a long way.",
            provider: "Mustafa Tawheed, Team Lead (Software Development, ServicEngine Ltd.)"
        },
        {
            body: "I have known Mamun for more than three years as a student. I first encountered him when he was in my Artificial Intelligence Course. He was one of the most attentive students in that course. His problem-solving ability impressed me. After that, he did some tremendous research work on music genre analysis with machine learning which made him different from others.",
            provider: "Shahariar Rabby (Ph.D. student and Blazer Fellow, University of Alabama at Birmingham)"
        },
        {
            body: "Knowledgeable and competent! I know Afif since his early years at university, and his undergrad thesis was under my supervision. He has always been a self-learner, proactive, and needed very little guidance. I wish him the very best in his future endeavours.",
            provider: "Subroto Nag Pinku (Research Assistant, University of Saskatchewan)"
        },
    ]
});

export default PROFILE_DATA;

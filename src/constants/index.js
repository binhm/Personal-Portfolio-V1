// Written content of Porfolio
import React, {useState, Fragment} from 'react'


const introduction = {
    pre_header: "Hi, my name is", // small sub header above the header
    header: "Binh Mai",
    sub_header: "Fullstack Software Engineer",
    description: `A passionate developer who wants to solve real-life problems with technology`
}

const resume_link = "https://drive.google.com/file/d/1zHrulLSNmaVkryxgYkgBsG14kuew4FRb/view?usp=sharing";
const about = {
    description: <>Hi, again! My name is Binh Mai and I have a strong interest in web development (with a backend bias) 
                    and making a positive impact on my community through technology. I have around ~ 1 
                    year of work experience at an early-stage 
                    <a href="https://www.linkedin.com/company/hellowalnut/"> Fintech company</a>. 
                    I am seeking an engineering role where I can solve real-life problems that require well 
                    thought-out and test-driven solutions. Please don't hesitate to reach out!</>,
    skills: [ "Python", "Java", "C/C++", "MySQL", "JavaScript", "ReactJS", "TypeScript", "Spring Boot", "Spring MVC", "Hibernate", "OpenAPI", "EC2", "AWS API Gateway",
    "Bitbucket", "GitHub/Git", "AWS", "Linux", "Docker"],
    links: [
        {
            icon: "../assets/envelope-at-fill.svg",
            type: "email",
            link: "mailto:binhm@uci.edu",
            display_text: "binhm@uci.edu"
        },
        {
            icon: "../assets/linkedin.svg",
            type: "linkedin",
            link: "https://www.linkedin.com/in/binh-thuy-mai/",
            display_text: "linkedin.com/in/binh-thuy-mai"
        },
        {
            icon: "../assets/resume.svg",
            type: "resume",
            link: resume_link,
            display_text: "Resume"
        }
    ],
    
    picture: require("../assets/profile_pic.jpg"),
    
}

const projects = [
    {
        title: "Fablix Website",
        description: "A website that displays more than 100k of movies and can be queried through movie's titles, genres, actors/actress, and more.",
        tech: ["Java", "SQL", "Javascript", "BootStrap", "JQuery", "Load Balancer", "Connection Pooling", "RESTful API", "Android Development"],
        link: "https://gitfront.io/r/Binhm/a924da167e47775f340df714c94c70aa38384e66/122B/",
        work_items: [
            "Developed an interactive website using Java and MySQL for backend production and JavaScript, HTML, and CSS for platform design", 
            "Improved website’s response time and its performance by 70% by optimizing SQL queries,  JDBC Connection Pooling, MySQL Master-Slave Replication, and a load balancer",
            "Created responsive Android application to accomodate multiple devices, increasing user's experience and security by integrating cookies and Restful HTTPS requests"
        ]
    },
    {
        title: "LoLo: Locust Locator",
        description: "Lo-Lo is a one-stop-shop platform for rural East-African farmers to view, report, and discuss locust swarms in their area to tackle the threat of invasive species.",
        tech: ["React", "Fomantic-UI", "Semantic-UI React", "Flask", "SQL", "Microservices", "Docker", "Cloudflare", "Azure", "KeyCloak"],
        link: "https://gitfront.io/r/Binhm/a196bd10089a4eed3666da0902e49057b465d03f/Lolo/",
        work_items: [
            
        ]
    }, 
    {
        title: "Personal Portfolio",
        description: "A personal portfolio that showcases my skillsets and history as a developer.",
        tech: ["React JS", "SCSS", "React Bootstrap"],
        link: "https://github.com/binhm/Personal-Porfolio",
        work_items: []
    }

]

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Supermoney",
        link: "https://www.linkedin.com/company/supermoney/",
        icon: require("../assets/supermoney-logo.jpeg"),
        date: "Jul 2024 - present",
        description: "Supermoney is a tech startup that aims to relief people of their financial stress by offering tools such as a financial comparison platform and a budgeting app.",
        work_items: [
            "Designs a user-friendly authentication flow for passwordless & 2FA for mobile and web applications to reduce cybersecurity risks and combat users’ drop-off rate through  Auth.js and database schemas",
            "Creates a Role-Based Access Control (RBAC) system to authorize users and effectively provides internal management and external partners more control over application usage to minimize turnaround time on site",
            "Builds A/B tests with NextJS middleware to analyze drop-off & conversion rates, leading to an improvement in UI/UX design and a ~25k increase in monthly revenue for key products",
            "Reduces response time of key API endpoints with 100k+ entries  from 17s to less than 300 ms by refining business logic and SQL queries",
            "Improves up to ~15% of organic traffic and user’s retention rate by enhancing web vitals of crucial pages and creating NextJS sitemaps to index +1M pages for better SEO/SEM metrics",
            "Launches multiple projects as lead engineer by collaborating with PM and Product Designers to deliver accurate timeline to stakeholders, ensuring that requirements and proper testing are satisfied"
        ]
    },
    {
        title: "Software Engineer",
        company_name: "Arrow (formerly Walnut)",
        link: "https://www.linkedin.com/company/hellowalnut/",
        icon: require("../assets/hellowalnut_logo.jpeg"),
        date: "Jan 2022 - Mar 2023",
        description: "Walnut is a fintech startup that focused on providing affordable healthcare financial options to patients.",
        work_items: [
            "Evaluated spring frameworks (i.e. Spring MVC, Webflux) through technical analysis, thereby improving core system performance by 15-20% and increasing scalability with Redis caching",
            "Integrated multiple external APIs (i.e. payments, fraud & identity detection) and built REST APIs for internal and external usage to increase sales revenue by collaborating with stakeholders, PM, and engineers",
            "Improved code quality by 25-30% as measured by SonarQube by refactoring complex business logic, implementing proper design patterns (i.e Factory Patterns & DAO) to remove code redundancies, and enforcing best practices for unit testing",
            "Enhanced debugging processes by integrating monitoring tools and developed best practices to log crucial information, thus accelerating error recognition and decreasing potential security vulnerabilities",
            "Led multiple teams of 2+ engineers to deliver many pivotal products by focusing on cross-team communication to encourage visibility, organizing requirements into JIRA tickets and assigning tasks to engineers, and hosting daily standup" 
        ]
    },
    {
        title: "Software Engineer Intern",
        company_name: "InternHacks",
        link: "https://www.linkedin.com/company/internhacks/",
        icon: require("../assets/internhacks_logo.jpeg"),
        date: "Jun 2021 - Aug 2021",
        description: "InternHacks is a seven-week program that combines the best of a tech internship and a hackathon. Students receive mentorship from tech industry engineers, designers, and product managers, build community & network with their peers through project collaboration.",
        work_items: [
            <>Programmed a responsive web application <a href="https://gitfront.io/r/Binhm/a196bd10089a4eed3666da0902e49057b465d03f/Lolo/"> (github.com/project)</a> to support multiple devices and endorse environmental sustainability by allowing users to anonymously report and view sightings of locusts</>,
            "Designed the stack and database architecture to ensure application’s scalability and ease development process in aspects including testing and transition to production environment",
            "Decreased application response time by 15% - 25% using optimized MySQL procedures" 
        ]
    },
    {
        title: "Student Quality Assurance Tester",
        company_name: "Baffle",
        link: "https://www.linkedin.com/company/baffle-inc./",
        icon: require("../assets/baffle_inc_logo.jpeg"),
        date: "Mar 2020 - Jun 2020",
        description: "A collaboration between University of California, Irvine's Computer Science students and a security startup company, to further study the concept of making SQL queries on encrypted data without risking data breach.",
        work_items: [
            "Increased the efficiency of the product by simplifying the encryption process using BaffleTM to protect sensitive information in databases",
            "Collaborated with stakeholders to communicate possible developments and features to improve their design processes and identify potential issues"
        ]
    }, 
]

const education = {
    school: "University of California, Irvine",
    link: "https://uci.edu/",
    icon: require("../assets/university_of_california_irvine_logo.jpeg"),
    date: "Sep 2017 - Jun 2021",
    description: <>I graduated at the University of California, Irvine with a <strong>Bachelor of Science in Computer Science</strong>.</>,
    items: [
        <><strong>GPA</strong>: 3.5 / 4.0</>,
        <><strong>Relevant Coursework</strong>: System Design, Data & Web Design, Design and Analysis of Algorithm, Data Structures, Project in OS, Embedded and IoT Systems, Computer Vision, Intro to ML, Intro to AI</>
    ]
}

export {experiences, about, introduction, projects, education, resume_link}
// Compulsory Courses 
const compulsorySem1 = [
    { name: "Python Programming", code: "BCSE102E", sem: 1, credits: 4 },
    { name: "Calculus for Engineers", code: "BMAT101L", sem: 1, credits: 4 },
    { name: "Engineering Physics", code: "BPHY101L", sem: 1, credits: 3 },
    { name: "Technical English", code: "BENG101N", sem: 1, credits: 2 }
];

const compulsorySem2 = [
    { name: "Data Structures and Algorithms", code: "BCSE201L", sem: 2, credits: 4 },
    { name: "Digital Logic and Design", code: "BEEE201L", sem: 2, credits: 3 },
    { name: "Engineering Chemistry", code: "BCHM101L", sem: 2, credits: 3 }
];

const compulsorySem3 = [
    { name: "Web Development", code: "BCSE203E", sem: 3, credits: 3 },
    { name: "Database Management Systems", code: "BCSE205L", sem: 3, credits: 3 }
];

const compulsorySem4 = [
    { name: "Operating Systems", code: "BCSE301L", sem: 4, credits: 4 },
    { name: "Computer Networks", code: "BCSE302L", sem: 4, credits: 4 }
];

const mockUsers = [
    {
        registerNumber: "24BCE1305",
        password: "totallydifferentpassword",
        name: "Chhatrapati Kingshuk Sarkar",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 9.67,
        semesterGpa: [9.8, 9.4, 9.9, 9.67],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Internet of Things", code: "BCSE406E", sem: 4, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE5274",
        password: "password",
        name: "Arya Panwar",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 9.15,
        semesterGpa: [8.9, 9.2, 9.4, 9.15],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Blockchain Technologies", code: "BCSE405E", sem: 4, credits: 3 }
        ]
    },
    {
        registerNumber: "21BCE0001",
        password: "password123",
        name: "Ramanan Baskar",
        program: "B.Tech Computer Science",
        graduationYear: "2025",
        cgpa: 8.92,
        semesterGpa: [8.5, 8.6, 8.75, 8.7, 8.8, 8.85, 8.9, 8.92],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Software Engineering Principles", code: "BCSE303L", sem: 5, credits: 3 },
            { name: "Machine Learning Concepts", code: "BCSE401E", sem: 6, credits: 4 },
            { name: "Cloud Computing and Docker", code: "BCSE402E", sem: 6, credits: 3 },
            { name: "Information and Cyber Security", code: "BCSE403E", sem: 7, credits: 3 },
            { name: "Artificial Intelligence", code: "BCSE404E", sem: 7, credits: 4 },
            { name: "Capstone Project Phase I", code: "BCSE497L", sem: 8, credits: 4 },
            { name: "Capstone Project Phase II", code: "BCSE498L", sem: 8, credits: 8 }
        ]
    },
    {
        registerNumber: "24BCE1001",
        password: "password123",
        name: "Ramakrishna P H",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 8.85,
        semesterGpa: [8.5, 8.9, 9.1, 9.2, 9.0],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Theory of Computation", code: "BCSE304L", sem: 5, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE2001",
        password: "password123",
        name: "Priya Sharma",
        program: "B.Tech Electronics",
        graduationYear: "2028",
        cgpa: 9.10,
        semesterGpa: [9.0, 9.2, 9.1, 9.1, 9.1, 9.1],
        courses: [
            ...compulsorySem1, ...compulsorySem2,
            { name: "Electronic Circuits", code: "BEEE202L", sem: 3, credits: 3 },
            { name: "Signals and Systems", code: "BEEE301L", sem: 4, credits: 3 },
            { name: "Microprocessors", code: "BEEE302L", sem: 5, credits: 4 },
            { name: "Control Systems", code: "BEEE401L", sem: 6, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE1234",
        password: "password123",
        name: "Rahul Verma",
        program: "B.Tech Information Technology",
        graduationYear: "2028",
        cgpa: 7.85,
        semesterGpa: [7.5, 7.8, 8.1, 7.9, 7.7, 8.0, 8.2],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Information Technology Infrastructure", code: "BITE101L", sem: 5, credits: 3 },
            { name: "Network Security", code: "BITE201L", sem: 6, credits: 3 },
            { name: "Human Computer Interaction", code: "BITE301L", sem: 7, credits: 3 }
        ]
    }
];

function getUserByRegNo(regNo) {
    if (!regNo) return null;
    return mockUsers.find(u => u.registerNumber.toUpperCase() === regNo.toUpperCase());
}

const mockUsers = [
    {
        registerNumber: "24BCE1001",
        password: "password123",
        name: "Abhinav Singh",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 8.92,
        semesterGpa: [8.5, 8.6, 8.75, 8.7, 8.8, 8.85, 8.9, 8.92],
        courses: [
            { name: "Web Development Course", code: "BCSE203E", sem: 3, credits: 3 },
            { name: "Database Management Systems", code: "BCSE205L", sem: 3, credits: 3 },
            { name: "Python Programming", code: "BCSE102E", sem: 1, credits: 4 }
        ]
    },
    {
        registerNumber: "24BCE2001",
        password: "password123",
        name: "Priya Sharma",
        program: "B.Tech Electronics",
        graduationYear: "2028",
        cgpa: 9.10,
        semesterGpa: [9.0, 9.2, 9.1],
        courses: [
            { name: "Data Structures", code: "BCSE201L", sem: 2, credits: 4 },
            { name: "Digital Logic Design", code: "BEEE201L", sem: 2, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE1234",
        password: "password123",
        name: "Rahul Verma",
        program: "B.Tech Information Technology",
        graduationYear: "2028",
        cgpa: 7.85,
        semesterGpa: [7.5, 7.8, 8.1, 7.9],
        courses: [
            { name: "Operating Systems", code: "BCSE301L", sem: 4, credits: 4 },
            { name: "Computer Networks", code: "BCSE302L", sem: 4, credits: 4 }
        ]
    }
];

function getUserByRegNo(regNo) {
    if (!regNo) return null;
    return mockUsers.find(u => u.registerNumber.toUpperCase() === regNo.toUpperCase());
}

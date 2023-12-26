const students = [
    {
    name: "Mithun",
    marks: 95,
    },
    {
    name: "Prabir",
    marks: 75,
    },
    {
    name: "Alka",
    marks: 92,
    },
    {
    name: "Shivam",
    marks: 70,
    },
    {
    name: "Farman",
    marks: 99,
    },
    ];

    function result(name){

        for(let student of students){
            if(name===student.name){
                if(student.marks>90){
                    console.log(`Congratulations ${student.name}! You have cleared the exam.`)
                    return 0;
                }else
                {
                    console.log(`Sorry ${student.name}! You have not cleared the exam.`)
                    return 0;
                }
            }
        }
        console.log("Invalid Student")
    }

    result("Mithun");
    result("Prabir");
    result("Sanjay");
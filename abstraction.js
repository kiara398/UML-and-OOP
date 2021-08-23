
class Student{
         constructor(name, regNumber, testScore) {
        this.name = name;
        this.regNumber = regNumber;
        this.testScore= testScore;
        
        let testMark = 50;
        let percentage = 100;
    
        let countFinalMark = function() {
            let finalMark = testScore / testMark * percentage;
            console.log('Final Mark is : ' +finalMark + "%");
        }
    
        this.getstudDetails = function() {
            console.log('Name :'+this.name+' | Reg Number : '+this.regNumber);
            countFinalMark();
        };
    
    };
}


let student1 = new Student('Ian', 'U364', 30);
student1.getstudDetails();
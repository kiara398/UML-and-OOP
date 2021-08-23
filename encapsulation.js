class Phone{
    constructor(storageArg){
        //data
        this.name = 'Redmi'
        this.color = 'Black';
        this.storage = '128gb';
        this.operatingSystem = 'Android'
        }
    //function/method to combine the atrributes
     getPhone(){
        return this.color + " " + this.name
     }
     getDetails(){
         return this.storage + " " + this.operatingSystem
     }
    showPhone(){
       //store combined attributes
    let phoneBody = this.getPhone() + " " + this.getDetails()
    
    //output the name
    console.log(phoneBody);
    
    }
    
    }
    
    let phone = new Phone();
    phone.showPhone();
 
    
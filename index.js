
const chalk = require('chalk');
const yargs = require('yargs');
const studentUtils = require('./students');



yargs.command({
    command:"add",
    description:"Adding a student",
    builder:{
        name:{
            description:"takes in students fullname",
            demandOption: true,
            type:'string'
        },
        age:{
            description:"takes in students age",
            demandOption: true,
            type:'number'
    },
    class:{
        description:"takes in students class",
        demandOption: true,
        type:'number'
    },
    handler(argv){
        console.log("Adding student...")
        //console.log("Adding a student"+ argv.name, "age:" + argv.age, "Class:" + argv.class)
        studentUtils.addStudents(argv.name, argv.age, argv.class);
        console.log()
    }
}}
)

yargs.command({
    command:"read",
    description:"Reading a student",
    builder:{
        name:{
            description:"Reading a student",
            demandOption: true,
            type:'string'
        },
    handler(){
            console.log("Reading a student")  
            studentUtils.ReadStudents(argv.name)
        }
    }
})
//Listing all students

        yargs.command({
            command:"listing",
            description:"Listing aLL student",
            handler(){
                    console.log("Listing a student")  
                    studentUtils.listStudents()
                }
            })  

            yargs.command({
                command:"remove",
                description:"Removing a student",
                handler(){
                        console.log("Removing a student")  
                    }
                })          
//const command = process.argv[2];

//if (command == "add"){ 
 //   console.log("Adding a student")
//} else if(command == 'remove'){
//    console.log("Removing a student")
//}
//getStudents()

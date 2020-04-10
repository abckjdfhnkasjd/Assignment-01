//1) Exercise on Control statement
//Create a sample application in JavaScript to find out if a number is Prime or not
function primeNumberOrNot(number) {
    if (number % 2 === 0) {
        console.log(number + ' is prime number');
    }else{
        console.log(number + ' is not a prime number');
    }
}


//2) Exercise on Object 
//Create a sample application in JavaScript which prints True if the object contains the key = “status” and value = “complete” otherwise print False.
var project = {
    id: 101,
    name: 'GsmSpecs',
    description: 'A Java with React Project',
    status: 'Completed'
}

if(project.status === 'Completed') {
    console.log('Is Project Completed: '+ true);
} else{
    console.log('Is Project Completed: '+ false);
}


//3) Exercise on Array.
//Create a sample application in JavaScript to find out a project based on their id’s and print its name and description.
var projectList = {
    projects: [],
    displayProject: function() {
        console.log("Project List:");
        this.projects.forEach(project => {
            console.log("Project: ", project);
        });
    },
    addProject: function(id, name, description, status){
        //here we are using project id as array index to splify the logic. As project id can't be duplicate, I have used this approach
        this.projects[id] = {
            id: id,
            name: name,
            description: description,
            status:status
        };
        this.displayProject();
    },
    findProject: function(id) {
        console.log("Project: ", this.projects[id]);
    },
    updateProjectStatus: function(id, status) {
        this.projects[id].status=status;
        this.displayProject();
    },
    getAllCompletedProject: function() {
        console.log("Completed project list: ");
        this.projects.forEach(project => {
            if (project.status === 'Completed') {
               console.log("Project: ", project);
            }
        });
    },
    deleteProject: function(id) {
        this.projects.splice(id, 1);
        this.displayProject();
    }
}

//Run bello statement in console:

primeNumberOrNot(23);
primeNumberOrNot(12);

projectList.addProject(101, 'GSMSPECS', 'JAVA with REACT Application', 'Completed');
projectList.addProject(102, 'P2P', 'JAVA with Angular Application', 'In Progress');
projectList.findProject(101);
projectList.updateProjectStatus(102, 'Completed');
projectList.getAllCompletedProject();
projectList.deleteProject(101);
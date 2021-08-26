var lista = [];
var listb = [];
var listc = [];
var listd = [];
var liste = [];


var expbutton = document.getElementById("expbutton")
var expertlist = document.getElementById("expertlist")
var skill1 = document.getElementById("skill1")

var skillbutton = document.getElementById("skillbutton")
var skilllist = document.getElementById("skilllist")
var skill2 = document.getElementById("skill2")

var toolbutton = document.getElementById("toolbutton")
var toollist = document.getElementById("toolist")
var skill3 = document.getElementById("skill3")

var projbutton = document.getElementById("projbutton")
var projlist = document.getElementById("projlist")
var projtitle = document.getElementById("projtitle")
var projdesc = document.getElementById("projdesc")

var uname1 = document.registration.username1;
var uname2 = document.registration.username2;
var uemail = document.registration.email;
var ucountry = document.registration.country;
var ustate = document.registration.state;    
var usex = document.registration.sex;
var uabout = document.registration.desc;

var uboard1 = document.registration.board1;
var upercent1 = document.registration.percent1;
var uboard2 = document.registration.board2;
var upercent2 = document.registration.percent2;
var ucollege = document.registration.institution;
var udegree = document.registration.degree;
var udept = document.registration.dept;

var ulinkedin = document.getElementById("linkedin");

function addProject(){
    if (projtitle.value === ""){
        return
    }
    var len4 = projlist.childElementCount;
    if (len4>=2){
        alert("Maximum two projects added!");
    }else{
        var project = document.createElement('div');
        project.id = String(Math.random());
        project.classList.add("skillstyle");

        listd.push(projtitle.value);
        liste.push(projdesc.value);

        var projecttitle = document.createElement('div');
        projecttitle.appendChild(document.createTextNode(projtitle.value));

        var projectdesc = document.createElement('div');
        projectdesc.appendChild(document.createTextNode(projdesc.value));

        project.appendChild(projecttitle)
        project.appendChild(projectdesc)

        projlist.appendChild(project);
    }
    projtitle.value = "";
    projdesc.value = "";
}

function createExpert(){
    for(i=0;i<lista.length;i++){
        var a = document.createElement('li');
        a.appendChild(document.createTextNode(lista[i]))
        document.getElementById("101").appendChild(a)
    }
    
}

function createProg(){
    for(i=0;i<listb.length;i++){
        var b = document.createElement('li');
        b.appendChild(document.createTextNode(listb[i]))
        document.getElementById("102").appendChild(b)
    }
}

function createTool(){
    for(i=0;i<listc.length;i++){
        var c = document.createElement('li');
        c.appendChild(document.createTextNode(listc[i]))
        document.getElementById("103").appendChild(c)
    }
}

function createProject(){
    for(i=0;i<listd.length;i++){
        if(i===0){
            document.getElementById("104a").innerHTML = listd[i];
            document.getElementById("104b").innerHTML = liste[i];
        }else{
            document.getElementById("105a").innerHTML = listd[i];
            document.getElementById("105b").innerHTML = liste[i];
        }
    }
}



function addExpertise(){
    if (skill1.value === ""){
        return
    }
    
    var len1 = expertlist.childElementCount

    if (len1>=5){
        alert("Maximum five skills added!");
    }else{
        var expertskill = document.createElement('div');
        expertskill.id = String(Math.random());
        expertskill.classList.add("skillstyle");

        lista.push(skill1.value);

        expertskill.appendChild(document.createTextNode(skill1.value));
        expertlist.appendChild(expertskill);
    }
    skill1.value = "";
}

function addProgskill(){
    if (skill2.value === ""){
        return
    }
    var len2 = skilllist.childElementCount

    if (len2>=3){
        alert("Maximum three skills added!");
    }else{
        var progskill = document.createElement('div');
        progskill.id = String(Math.random());
        progskill.classList.add("skillstyle");

        listb.push(skill2.value);

        progskill.appendChild(document.createTextNode(skill2.value));
        skilllist.appendChild(progskill);
    }
    skill2.value = "";
}

function addTools(){
    if (skill3.value === ""){
        return
    }
    var len3 = toollist.childElementCount

    if (len3>=3){
        alert("Maximum three software/tools added!")
    }else{
        var tools = document.createElement('div');
        tools.id = String(Math.random());
        tools.classList.add("skillstyle");

        listc.push(skill3.value);

        tools.appendChild(document.createTextNode(skill3.value));
        toollist.appendChild(tools);
    }
    skill3.value = "";
}


function formValidation(){ 
     
    if(allLetter(uname1)){  
        if(allLetter(uname2)){
            if(ValidateEmail(uemail)){   
                if(countryselect(ucountry)){
                    if(Statename(ustate)){
                        if(validabout(uabout)){
                        } 
                    }   
                }  
            }   
        }  
    } 
    return false;
}  

function Statename(uname){   
    var letters = /^[A-Za-z]+$/;   //Regex
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('State Name must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  

function allLetter(uname){   
    var letters = /^[A-Za-z]+$/;   //Regex
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('Name must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  

function countryselect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');  
        ucountry.focus();  
        return false;  
    }  
    else{  
        return true;  
    }  
}  

function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    else{  
        alert("You have entered an invalid email address!");  
        uemail.focus();  
        return false;  
    }  
}

function validabout(uabout){
    if (uabout.value == ''){
        alert('Please provide something about you');
        uabout.focus();
        return false
    }else{
        alert('Form submitted Successfully! Click Preview to Display your resume')
        return true;
    }
}

function previewResume(){
    var name = uname1.value + " " + uname2.value;
    if (name !== ""){
        document.getElementById("viewname").innerHTML = name
    }

    document.getElementById("aboutme").innerHTML = uabout.value;

    document.getElementById("contactemail").innerHTML = uemail.value;
    document.getElementById("contactlinkedin").innerHTML = ulinkedin.value;

    document.getElementById("classx").innerHTML = "Class X"
    document.getElementById("boardx").innerHTML = uboard1.value;
    document.getElementById("xpercent").innerHTML = upercent1.value;
    document.getElementById("classxii").innerHTML = "Class XII"
    document.getElementById("boardxii").innerHTML = uboard2.value;
    document.getElementById("xiipercent").innerHTML = upercent2.value;
    document.getElementById("edudegree").innerHTML = udegree.value;
    document.getElementById("eduinsti").innerHTML = ucollege.value;
    document.getElementById("edudept").innerHTML = udept.value;

    createExpert();
    createProg();
    createTool();
    createProject();

    
}

expbutton.addEventListener("click", addExpertise);
skillbutton.addEventListener("click",addProgskill);
toolbutton.addEventListener("click", addTools)
projbutton.addEventListener("click",addProject)

submitbutton.addEventListener("click", formValidation)
previewbtn.addEventListener("click", previewResume)

// VALIDATION PART
// function registration()
// 	{

// 		var name= document.getElementById("name").value;
// 		var email= document.getElementById("email").value;
// 		var pass= document.getElementById("pass").value;
// 		var cpass= document.getElementById("cpass").value;			
// 		var phone= document.getElementById("phone").value;
//       if(name=='')
// 		{
// 			windows.alert('Please enter your name');
// 		}
// 		else if(!letters.test(name))
// 		{
// 			alert('Name field required only alphabet characters');
// 		}
// 		else if(email=='')
// 		{
// 			alert('Please enter your name email id');
// 		}
// 		else if (!filter.test(email))
// 		{
// 			alert('Invalid email');}
        
//         else if(pass=='')
// 		{
// 			alert('Please enter Password');
// 		}
// 		else if(cpass=='')
// 		{
// 			alert('Enter Confirm Password');
// 		}
// 		else if(!pass_expression.test(pass))
// 		{
// 			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
// 		}
// 		else if(pass != cpass)
// 		{
// 			alert ('Password not Matched');}
//     }

 
// CRUD SECTION

let id="no"
localStorage.clear ();

readData ();

function createData () {
    document.getElementById('msg').innerHTML="";
    let name= document.getElementById('name').value;
    if (name=='') {
        document.getElementById('msg').innerHTML= "*Required";
    }else{
        if (id=="no") {
            let arr=getCrudData();
            if (arr==null ) {
                let data =[name];
                setCrudData(data);
            }else{
                arr.push(name);
                setCrudData(arr);
            }
            document.getElementById('name').value="";
            document.getElementById('msg').innerHTML="Data Added";

        }else{
            let arr=getCrudData();
            arr[id]= name;
            setCrudData(arr);
            document.getElementById('msg').innerHTML="Data Updated";
        }
        document.getElementById('name').value="";
        readData ();
    }

}

function readData () {
    let arr=getCrudData();
    if (arr!=null) {
        let html="";
        let srno=1;
        for (let n in arr) {
            html= html+
            `<tr><td>${srno}</td><td>${arr[n]}</td>
            <td><a href="javascript:void(0)" onClick="editData(${n})"
             >Edit </a> &nbsp; 
             <a href="javascript:void(0)" onClick="deleteData(${n})"
             >Delete </a> </td></tr>`;
            srno++;
          }         
        document.getElementById('root').innerHTML=html;

    }   
}

function editData (rid) {
    id=rid;
    let arr=getCrudData();
    document.getElementById('name').value=arr[rid];
   
}

function deleteData (rid) {
    let arr=getCrudData();
    arr.splice (rid,1);
    setCrudData(arr);
    readData();    
}


// REDEFINING FUNCTIONS TO MAKE IT SHORT

function setCrudData(arr){
    localStorage.setItem('crud',JSON.stringify(arr));
    return arr;
}

function getCrudData(){
    let arr=JSON.parse(localStorage.getItem('crud'));
    return arr;
}


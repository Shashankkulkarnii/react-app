import './App.css';
import { userSchema } from './Validations/UserValidations';
import { userSchemaName } from './Validations/UserValidations';
import { userSchemaEmail } from './Validations/UserValidations';
import { userSchemaPassword } from './Validations/UserValidations';


function App() {
const userData = (event)=>{
  event.preventDefault();
 let formData={
  name: event.target[0].value ,
  email: event.target[1].value ,
  password: event.target[2].value 
  }
  console.log(formData);
  let isValid = userSchema.isValid(formData).then((fdata)=>{console.log(fdata);})
  console.log(`all ${isValid}`);
  if(isValid===true){
    alert("All Details Enterd Properly")
  }
  else{
    alert("Plz check Your Entered Details")
  }

  // let nameisValid = await userSchemaName.isValid(formData.name)
  // console.log(`name ${nameisValid}`);
  // // if(nameisValid===false){
  // //   alert("plz enter valid Name")
  // // }
  // let emailisValid = await userSchemaEmail.isValid(formData.email)
  // console.log(`email ${emailisValid}`);
  // // if(emailisValid===false){
  // //   alert("plz enter valid Email")
  // // }
  // let passwordisValid = await userSchemaPassword.isValid(formData.password)
  // console.log(`password ${passwordisValid}`);
  // if(passwordisValid===false){
  //   alert("plz enter valid Password")
  // }
  // console.log(isValid);

};
 
  return (
    <div className="App">
    <h1 className="heading" >Dummy Form</h1>
    <form  onSubmit={userData} >
    <ul className="list">
    <li className="li"><input type="text" placeholder="Enter Name" /></li>
    <li className="li"><input type="text" placeholder="Enter Email" /></li>
    <li className="li"><input type="Password" placeholder="Set Password" /></li>
    <input type="submit" />
    
    </ul>
    </form>
    </div>
  );
}

export default App;

function Validation(value){
   let error={};
   let error_pattern=/^[A-Za-z]*$/;
   let error_phone=/^[0-9\b]$/;
   if(value.email==="")
       error.email="email is required";
   else
       error.email="";
   if(value.name==="")
   {
       error.name="name is required"
   }
    else if(!error_pattern.test(value.name))
    {
       error.name="name is must be alphabet"
    }
   else{
       error.name="";
    }
  if(value.phone=="")
   {
       error.phone="phone number is required";
    }
   else if(!value.phone.length==10 && error_phone.test(error.phone))
   {
       error.phone="phone number is must be 10 and numbers only";
    }
    else{
        error.phone="";
    }
   return error
}
export default Validation
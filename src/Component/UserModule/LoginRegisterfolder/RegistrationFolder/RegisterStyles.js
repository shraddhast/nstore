import { makeStyles} from '@material-ui/core'

const RegisterStyles = makeStyles((theme) => ({

    paper:{
        width:"40%",
        height:"50%",
        marginLeft:"25%",
        marginTop:"5%",
        padding:"2%"
   },
   firstName:{
    marginTop:"2%"
   },
   lastName:{
    marginTop:"2%"
   },
   emailTextField:{
      marginTop:"2%"
    },
   passwordTextField:{
    marginTop:"2%"
   },
   cPasswordTextField:{
    marginTop:"2%"
   },
   phoneNumber:{
    marginTop:"2%"
   },
   radioButton:{
    margin:"2%"
   },
   registerButton:{
    display:"flex",
    justifyContent:"flex-start",
    marginLeft:"2%",
    marginTop:"5%"
   },
   errorMessage:{
    color:"red",
    display:"flex",
    justifyContent:"flex-start",
  },

}))

export default RegisterStyles
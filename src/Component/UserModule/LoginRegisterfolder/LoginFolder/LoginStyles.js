import { makeStyles} from '@material-ui/core'

const LoginStyles = makeStyles((theme) => ({

   paper:{
        width:"40%",
        height:"50%",
        marginLeft:"25%",
        marginTop:"5%",
        padding:"2%"
   },
   emailTextField:{
      width:"80%",
      margin:"2%"
    },
   passwordTextField:{
    width:"80%",
    margin:"2%"
   },
   login:{
    display:"flex",
    justifyContent:"flex-start",
    marginLeft:"10%",
    marginTop:"5%"
   },
   errorMessage:{
      color:"red",
      display:"flex",
      justifyContent:"flex-start",
      marginLeft:"10%"
   },

}))

export default LoginStyles
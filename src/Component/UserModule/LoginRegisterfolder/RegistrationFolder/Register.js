import React ,{ useState } from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import {Radio, RadioGroup, FormControlLabel} from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallIcon from '@material-ui/icons/Call';

import Footer from '../../../DashboardModule/FooterFolder/Footer'
import Navbar from '../../../DashboardModule/NavbarFolder/Navbar'
import RegisterStyles from './RegisterStyles'
import validate from '../Validate'


function Register() {
    const classes = RegisterStyles()
    const [gender, setGender] = useState()
    const handleChange = (e) => {
        setGender(e.target.value)
    }
    const [valid, setValid] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      cPassword:"",
      phoneNumber:"",
      radio:""
    })
    const [errors, setErrors] = useState()
    const changeHandler = (e) => {
      const {name , value} = e.target
      setValid({
          ...valid,
          [name]:value
      })
  }
  const registerHandler = (e) => {
      e.preventDefault()
      setErrors(validate(valid))
  }
    return (
        <div>
            <Navbar/>
           <Grid>
               <Paper className={classes.paper}>
                    <Typography variant="h4">Register to NeoSTORE</Typography>
                    <Typography><TextField variant="outlined" label="First Name" size="small" fullWidth
                    className={classes.firstName} name="firstName" value={valid.firstName} onChange={changeHandler}
                    InputProps={{
                        endAdornment:<TextFieldsIcon/>
                      }}/></Typography>
                      <p>{errors && <small className={classes.errorMessage}>{errors.firstName}</small>}</p>

                    <Typography><TextField variant="outlined" label="Last Name" size="small" fullWidth
                    className={classes.lastName} name="lastName" value={valid.lastName} onChange={changeHandler}
                    InputProps={{
                        endAdornment:<TextFieldsIcon/>
                      }}/></Typography>
                        <p>{errors && <small className={classes.errorMessage}>{errors.lastName}</small>}</p>

                    <Typography><TextField variant="outlined" label="Email" size="small" fullWidth
                    className={classes.emailTextField}  name="email" value={valid.email} onChange={changeHandler}
                    InputProps={{
                        endAdornment:<EmailIcon />
                      }}/></Typography>
                        <p>{errors && <small className={classes.errorMessage}>{errors.email}</small>}</p>

                    <Typography><TextField variant="outlined" label="Password" size="small" fullWidth
                    className={classes.passwordTextField} name="password" value={valid.password} onChange={changeHandler}
                    InputProps={{
                        endAdornment:<VisibilityOffIcon />
                      }}/></Typography>
                        <p>{errors && <small className={classes.errorMessage}>{errors.password}</small>}</p>

                    <Typography><TextField variant="outlined" label="Confirm Password" size="small" fullWidth
                    className={classes.cPasswordTextField} name="cPassword" value={valid.cPassword} onChange={changeHandler}
                    InputProps={{
                        endAdornment:<VisibilityOffIcon />
                      }}/></Typography>
                        <p>{errors && <small className={classes.errorMessage}>{errors.cPassword}</small>}</p>

                    <Typography><TextField variant="outlined" label="Phone Number" size="small" fullWidth
                    className={classes.phoneNumber} name="phoneNumber" value={valid.phoneNumber} onChange={changeHandler}
                    InputProps={{
                        endAdornment:<CallIcon/>
                      }}/></Typography>
                        <p>{errors && <small className={classes.errorMessage}>{errors.phoneNumber}</small>}</p>

                    <RadioGroup aria-label="gender" row={true} value={gender} onChange={handleChange}
                    className={classes.radioButton} name="radio" value={valid.radio} onChange={changeHandler}>
                        <FormControlLabel value="female" control={<Radio/>} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio/>} label="Other" />
                    </RadioGroup>
                    <p>{errors && <small className={classes.errorMessage}>{errors.radio}</small>}</p>


                      <Typography>
                          <Button variant="contained" color="primary" className={classes.registerButton}
                          onClick={registerHandler}>Register</Button>
                      </Typography>
               </Paper>
           </Grid>
         <Footer/>
        </div>
    )
}

export default Register

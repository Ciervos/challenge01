import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './style.scss';
const axios = require('axios');



function Login() {
    let history = useHistory();


    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          password: Yup.string()
            .min(5, 'Must be 5 characters or more')
            .required('Required'),
          email: Yup.string().email('Invalid email address :(').required('Required'),
        }),
        onSubmit: values => {
        
          axios.post('http://challenge-react.alkemy.org/', {
            email: values.email,
            password: values.password
          })
          .then(function (response) {
            localStorage.setItem('token', JSON.stringify(response.data.token))
            history.push("/");
          })
          .catch(function (error) {
            alert("La información ingresada no es correcta");
            
          });
        },
      });
      return (
        <div className="login-cont"> 
        <form className="login-form" onSubmit={formik.handleSubmit}>
   
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
         <div className="login-errors">{formik.errors.email}</div>
       ) : null}

         <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
         <div className="login-errors">{formik.errors.password}</div>
       ) : null}
          <Button variant="danger" type="submit">Enviar</Button>
          
        </form>
        </div>
        
      );
      
}

export default Login;
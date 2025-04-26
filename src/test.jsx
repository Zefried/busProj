import { useEffect } from "react";
import axios from "axios";

const Test = () =>{

    const firstCall = () => {

      
        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                // After CSRF cookie is set, make the second request
                axios.get('/api/test-one')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error in second request:', error);
                });
            })
            .catch(error => {
                console.error('Error in CSRF request:', error);
        });
    

    }


    function checkAuth(){
        axios.get('/sanctum/csrf-cookie')
        .then(response => {
            // After CSRF cookie is set, make the second request
            axios.get('/api/user')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error in second request:', error);
            });
        })
        .catch(error => {
            console.error('Error in CSRF request:', error);
    });
    }

    return(
        <>
           <p>this is a test component</p>
           <button onClick={firstCall}>Call Api</button>

           <button onClick={checkAuth}>Check Auth</button>
        </>
     
    )
}

export default Test;
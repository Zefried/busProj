import axios from "axios";

const TestTwo = () =>{

    const firstCall = () => {

      
        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                // After CSRF cookie is set, make the second request
                axios.get('/api/test-two')
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

    return (
        <>
        <p>This is testTwo component</p>
        <button onClick={firstCall}>call another api</button>
        </>
    )
}




export default TestTwo;
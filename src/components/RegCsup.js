import React, { Button } from 'react'



function RegCsup() {
    return (
        <div className="reg-container">
            

            <h2>Registration For CSUP </h2>

			<form >
				<label>Full Name : </label>
				<input type="text"/>

				<label>Email Address :</label>
				<input type="text"/>

                <label>year :</label>
				1st year <input type="radio" name="year" label="1st year"/>
                2nd year <input type="radio" name="year" label="2nd year"/>
                3rd year <input type="radio" name="year" label="3rd yeear"/>
                4th year <input type="radio" name="year" label="4th year"/>

				<label>Any comment</label>
				<textarea type="text"/>

                
				

				<button>Register Now</button>
			</form>
        </div>
    )
}

export default RegCsup

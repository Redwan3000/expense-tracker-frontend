


export default async function registrationHandler(password: string, confirmPassword: string, firstName: string, lastName: string, email: string, phone: string, dob: string, genderId: number, username: string) {
  
 if (password !== confirmPassword) {
                return "password did not match";
            }

            
            try {
                const res = await fetch("http://localhost:8080/auth/users-register", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        password: password,
                        dob: dob,
                        genderId: Number(genderId),
                        username: username,
                    }),
                });

                if (res.ok){
                return "Registration successful";
                }   
               
    
            } catch (error) {
                console.error("Error during registration:", error);
                return "Registration failed";
            }

}

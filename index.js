const registrationform = document.getElementById("registrationform");

const dataTable = document
                    .getElementById("dataTable")
                    .getElementById("tbody")[0];

                    registrationform.addEventListener("submit" ,function(e)
                    {
                        e.preventDefault();

                        const name =document.getElementById("name").value ;
                        const email =document.getElementById("email").value ;
                        const password =document.getElementById("password").value ;
                        const dob =document.getElementById("dob").value ;
                        const terms =document.getElementById("terms").checked ;

                        const today = new Date();
                        const dobDate = new Date(dob);
                        const age = today.getFullYear() - dobDate.getFullYear();

                        if(age <18 || age> 55)
                        {
                            alert("Age Should be between 18 and 55 years.");
                            return;
                        }

                           
               
                    
                    localStorage.setItem("name",name);
                    localStorage.setItem("email",email);
                    localStorage.setItem("password",password);
                    localStorage.setItem("dob",dob);
                    localStorage.setItem("terms",terms);

                    const row = dataTable.insertRow();
                    const nameCell = row.insertCell();
                    const emailCell = row.insertCell();
                    const passwordCell = row.insertCell();
                    const dobCell = row.insertCell();
                    const termsCell = row.insertCell();

                    nameCell.innerHTML = name ;
                    emailCell.innerHTML = email ;
                    passwordCell.innerHTML = password ;
                    dobCell.innerHTML = dob;
                    termsCell.innerHTML = terms ;

                    registrationform.reset ();

                    alert("Registration Successful");
                  });

                  const savedName = localStorage.getItem("name");
                  const savedEmail = localStorage.getItem("email");
                  const savedPassword = localStorage.getItem("password");
                  const savedDob = localStorage.getItem("dob");
                  const savedTerms = localStorage.getItem("terms");


                  if(savedName&& savedEmail &&savedPassword && savedDob  && savedTerms){

                    const row =dataTable.insertRow();
                    const nameCell = row.insertCell();
                    const emailCell =row.insertCell();
                    const passwordCell =row.insertCell();
                    const dobCell = row.insertCell();
                    const termsCell = row.insertCell();


                    nameCell.innerHTML = savedName;
                    emailCell.insertHTML = savedEmail;
                    passwordCell.innerHTML=savedPassword;
                    dobCell.innerHTML = savedDob;
                    termsCell.innerHTML = savedTerms;

                  }
                  









                    

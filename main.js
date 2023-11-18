const baseUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";
var bearerToken = "dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM="; // Store the token after login
var uuid="test3ad2e641f559498d807f02f7e1d997cb"
function authenticate() {
    let Path = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";
    let user = {
        "login_id" : "test@sunbasedata.com",
        "password" :"Test@123"
        }
    let options = { 
    method: 'POST',
    body: JSON.stringify(user)
    }
    let fetchRes = fetch(Path,options); 
    fetchRes.then(res =>
        res.json()).then(d => { 
            console.log(d) 
            // bearerToken = d.token;
                }
        ).catch(err => console.log(err));

    }

function createCustomer() {
    const customerData = {
        "first_name": "Jane",
        "last_name": "Doe",
        "street": "Elvnu Street",
        "address": "H no 2 ",
        "city": "Delhi",
        "state": "Delhi",
        "email": "sam@gmail.com",
        "phone": "12345678"
       };
       
       fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' +bearerToken
        },
        body: JSON.stringify(customerData)
       })
       .then(response => response.json())
       .then(data => {
        console.log('Success:', data);
       })
       .catch((error) => {
        console.error('Error:', error);
       });
       
}

function getCustomer() {
    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' +bearerToken
    }
   })
   .then(response => response.json())
   .then(data => {
    console.log('Customer List:', data);
   })
   .catch((error) => {
    console.error('Error:', error);
   });
}   

function updateCustomer() {
    const customerUUID = uuid;
const updatedCustomerData = {
 "first_name": "Jane",
 "last_name": "Doe",
 "street": "Elvnu Street",
 "address": "H no 2 ",
 "city": "Delhi",
 "state": "Delhi",
 "email": "sam@gmail.com",
 "phone": "12345678"
};

fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=' + customerUUID, {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   'Authorization': 'Bearer ' +bearerToken
 },
 body: JSON.stringify(updatedCustomerData)
})
.then(response => response.json())
.then(data => {
 console.log('Success:', data);
})
.catch((error) => {
 console.error('Error:', error);
});

}

function deleteCustomer() {
    const customerUUID = 'some-uuid'; // replace with actual uuid

    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=' + customerUUID, {
     method: 'POST',
     headers: {
       'Authorization': 'Bearer ' +bearerToken
     }
    })
    .then(response => response.json())
    .then(data => {
     console.log('Success:', data);
    })
    .catch((error) => {
     console.error('Error:', error);
    });
    
}
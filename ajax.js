// var xhr=new XMLHttpRequest();
// function getData(){
//     var url=document.getElementById("t1");
//     xhr.open("GET",url.value);
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4 && xhr.status==200){
//             var response=xhr.responseText;
//             var target=document.getElementById("mydiv");
//             target.innerHTML="<h1>"+response +"</h1>";
//             window.setTimeout("getData();",300);
//         }
//     }
//     xhr.send(null);
    
// }
// const axios = require('axios');

// const MAIN_POLARION_URL = "https://polarion-lgs.com/polarion/rest/v1";
// const ACCESS_TOKEN = "eyJraWQiOiIzNjJmNThiNC1hYzFmMThlMS0wMzg2NjQzZS0zZTFjYzU5MSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJVbml2TGFiczIiLCJpZCI6IjJiMGY4ZWU2LWFjMWYxOGUxLTI4YTFmYWM5LWY5MzM5ZWNhIiwiZXhwIjoxNzM5OTg5ODAwLCJpYXQiOjE3MzU4ODkyMjd9.N24NK_3UYXOTCQ0rSbPF8x8g0e2mfczTqjlR0oK-9rWtQxKzcBZh313UhAiqNv6hH0y0GeQZHYo3HbGTbLk8YF0zXfOtumMLRC88al7XDSqeL5-gC9nKMvhYYbfRkcuIM6ALKtrbtz0jH8G6RpObvV-Dw5Md10oQzOqG9pgrjnv0TULtlSyV7VMpIZKr26q4RWeDwrNvce1XMAMsC5ZJRH9qyj9TfyzOrAw5phamtuW7V8OI4_XDyHkSAQHqvBhoZPgavAvNNInqS-vmtrahDLKZIt-Tn9ieWwnmwpTXlqiD3ixz4J7a12s-k1NzR8Q44uJrvhy5sGU8TuaDR-zqZw"; // Replace with your access token
// const LOCAL_SERVLET_URL = "http://localhost:8080/polarion/rest/v1/workitems";

// async function getPolarionWorkItem(workitemId) {
//     try {
//         const response = await axios.get(`${MAIN_POLARION_URL}/workitems/${workitemId}`, {
//             headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
//         });
//         return response.data;
//     } catch (error) {
//         if (error.response?.status === 404) {
//             console.error(`Work item "${workitemId}" not found on the server.`);
//         } else {
//             console.error("Error fetching work item:", error.response?.data || error.message);
//         }
//         throw error;
//     }
// }
// async function updateLocalServlet(data) {
//     try {
//         const response = await axios.post(LOCAL_SERVLET_URL, data);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating local servlet:", error.response?.data || error.message);
//         throw error;
//     }
// }

// (async () => {
//     try {
//         const workitem = await getPolarionWorkItem("EL-318");
//         console.log("Fetched Work Item:", workitem);

//         const localResponse = await updateLocalServlet(workitem);
//         console.log("Local Servlet Response:", localResponse);
//     } catch (error) {
//         console.error("Error in main function:", error.message);
//     }
// })();

const MAIN_POLARION_URL = "https://polarion-lgs.com/polarion/rest/v1";
const ACCESS_TOKEN = "eyJraWQiOiIzNjJmNThiNC1hYzFmMThlMS0wMzg2NjQzZS0zZTFjYzU5MSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJVbml2TGFiczIiLCJpZCI6IjJiMGY4ZWU2LWFjMWYxOGUxLTI4YTFmYWM5LWY5MzM5ZWNhIiwiZXhwIjoxNzM5OTg5ODAwLCJpYXQiOjE3MzU4ODkyMjd9.N24NK_3UYXOTCQ0rSbPF8x8g0e2mfczTqjlR0oK-9rWtQxKzcBZh313UhAiqNv6hH0y0GeQZHYo3HbGTbLk8YF0zXfOtumMLRC88al7XDSqeL5-gC9nKMvhYYbfRkcuIM6ALKtrbtz0jH8G6RpObvV-Dw5Md10oQzOqG9pgrjnv0TULtlSyV7VMpIZKr26q4RWeDwrNvce1XMAMsC5ZJRH9qyj9TfyzOrAw5phamtuW7V8OI4_XDyHkSAQHqvBhoZPgavAvNNInqS-vmtrahDLKZIt-Tn9ieWwnmwpTXlqiD3ixz4J7a12s-k1NzR8Q44uJrvhy5sGU8TuaDR-zqZw"; // Replace with your access token
const LOCAL_SERVLET_URL = "http://localhost:8080/polarion/rest/v1/workitems";

// Function to fetch work items from Polarion
async function fetchWorkItems() {
    const url = `${MAIN_POLARION_URL}/workitems`; // Adjust the endpoint as needed
    const headers = {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Work Items:', data);
        return data;
    } catch (error) {
        console.error('Error fetching work items:', error);
    }
}

// Function to fetch work items from the local servlet
async function fetchLocalWorkItems() {
    const headers = {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(LOCAL_SERVLET_URL, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Local Work Items:', data);
        return data;
    } catch (error) {
        console.error('Error fetching local work items:', error);
    }
}

// Example usage
fetchWorkItems();
fetchLocalWorkItems();
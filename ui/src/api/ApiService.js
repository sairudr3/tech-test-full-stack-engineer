// ApiService.js
const baseApi = "http://localhost:8080";
export async function fetchData(input) {
  try {
    const response = await fetch(`${baseApi}/${input}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const headers = {
    'Content-Type': 'application/json', // Specify the content type as JSON
  };


export async function acceptInviteData(lead) {
  const body = JSON.stringify(lead);

  // Define the fetch options
  const options = {
    method: "POST",
    headers,
    body,
  };

  // Send the POST request
  fetch(`${baseApi}/inviteData`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response from the server if needed
      console.log("Server response:", data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });
}
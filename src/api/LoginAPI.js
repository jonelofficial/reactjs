const baseUrl = "http://10.10.13.5:4040/api/login";
// const baseUrl = "../jsonServer/users.json";

export const getUsers = async (data) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

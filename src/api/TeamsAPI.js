const baseUrl = "https://625537e08646add390d2d4bd.mockapi.io/Teams";

// Fetch
export const getTeams = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

// Create
export const createTeam = async (data) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

// Get
export const getTeam = async ({ queryKey }) => {
  console.log(queryKey);
  const [_key, { id }] = queryKey;
  const response = await fetch(`${baseUrl}/${id}`);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

// Update
export const updateTeam = async ({ id, ...data }) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

// Delete
export const removeTeam = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return true;
};

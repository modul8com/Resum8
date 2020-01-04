import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/clients/";

export function getClients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getClientBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(clients => {
        if (clients.length !== 1) throw new Error("Skill not found: " + slug);
        return clients[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveClient(client) {
  return fetch(baseUrl + (client.started || ""), {
    method: client.started ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...client
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSkill(client) {
  return fetch(baseUrl + client, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

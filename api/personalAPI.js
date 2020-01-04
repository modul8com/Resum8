import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/personal/";

export function getPersonal() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePersonal(personal) {
  return fetch(baseUrl + (personal.firstname || ""), {
    method: personal.firstname ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(personal)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePersonal(firstname) {
  return fetch(baseUrl + firstname, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

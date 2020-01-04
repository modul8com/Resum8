import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/skills/";

export function getSkills() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getSkillBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(skills => {
        if (skills.length !== 1) throw new Error("Skill not found: " + slug);
        return skills[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveSkill(skill) {
  return fetch(baseUrl + (skill.skill || ""), {
    method: skill.skill ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...skill
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteSkill(skill) {
  return fetch(baseUrl + skill, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

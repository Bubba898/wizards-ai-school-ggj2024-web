import {backend} from "$lib/backend_adapter/backend/generated";

export const api = new backend({
  BASE: `https://wizards-ai-school-ggj2024.azurewebsites.net`
  //BASE: "http://127.0.0.1:8080"
});

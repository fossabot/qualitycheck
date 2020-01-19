import { BaseItem } from "./model/item";
import { DataStore } from "./model/data-store";
import { ContentView } from "./view/content-view";

function handleError(errorText: string) {
  const errorElement = document.createElement("div");
  errorElement.id = "error";
  errorElement.textContent = errorText;
  document.body.appendChild(errorElement);
}

document.addEventListener("DOMContentLoaded", () => {
  var script = document.createElement("script");
  script.src = "qualitycheck.js";
  
  script.onerror = (error) => {
    handleError(`Failed to load ${script.src} with error 
${JSON.stringify(error)}`);
  }
  
  document.body.appendChild(script);
});

window["qualitycheck"] = (id: string, items: BaseItem[]): void => {
  // called by qualitycheck.js with data
  try {
    const dataStore = new DataStore(id, items);
    new ContentView(dataStore);
  } catch (error) {
    handleError(`Error 
${error}`);
  }
};
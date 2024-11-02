import { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem("appState", appState);
  } catch (err) {
    console.warn(err);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem("appState");
    if (!appState) return undefined;
    return JSON.parse(appState);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

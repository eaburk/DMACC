export const setCookie = (name, value, days) => {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value}; ${expires};path=/`;
}

// Read a cookie by name
export const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    let [key, val] = c.split("=");
    if (key === name) return val;
  }
  return null;
}

// Delete a cookie by name
export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
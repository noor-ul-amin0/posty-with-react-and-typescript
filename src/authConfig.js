export const msalConfig = {
  auth: {
    clientId: "56d7cec9-5390-4206-bf4e-0e1f0661cec2",
    authority:
      "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3001/posts",
    postLogoutRedirectUri: "http://localhost:3001/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com",
};

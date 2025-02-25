import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_API_URL": "https://dessert-ecommerce.onrender.com"};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=110d08e4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=110d08e4"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=110d08e4"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import router from "/src/routes/index.jsx?t=1740441027441";
import { RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=110d08e4";
import { store } from "/src/store.js";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=110d08e4";
import axios from "/node_modules/.vite/deps/axios.js?v=110d08e4";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/cso35/Desktop/六角-專案/sweet-bites/src/main.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/cso35/Desktop/六角-專案/sweet-bites/src/main.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/cso35/Desktop/六角-專案/sweet-bites/src/main.jsx",
    lineNumber: 12,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYU07QUFiTixTQUFTQSxrQkFBa0I7QUFDM0IsU0FBU0Msa0JBQWtCO0FBQzNCLE9BQU9DLFlBQVk7QUFDbkIsU0FBU0Msc0JBQXNCO0FBQy9CLFNBQVNDLGFBQWE7QUFDdEIsU0FBU0MsZ0JBQWdCO0FBQ3pCLE9BQU9DLFdBQVc7QUFFbEJBLE1BQU1DLFNBQVNDLFVBQVVDLFlBQVlDLElBQUlDO0FBRXpDVixXQUFXVyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQztBQUFBQSxFQUMxQyx1QkFBQyxjQUNDLGlDQUFDLFlBQVMsT0FDUixpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCLEtBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQTtBQUNGIiwibmFtZXMiOlsiU3RyaWN0TW9kZSIsImNyZWF0ZVJvb3QiLCJyb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsInN0b3JlIiwiUHJvdmlkZXIiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImltcG9ydCIsImVudiIsIlZJVEVfQVBJX1VSTCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzL2luZGV4LmpzeCc7XHJcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGltcG9ydC5tZXRhLmVudi5WSVRFX0FQSV9VUkw7XHJcblxyXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcclxuICA8U3RyaWN0TW9kZT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvU3RyaWN0TW9kZT4sXHJcbik7XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvY3NvMzUvRGVza3RvcC/lha3op5It5bCI5qGIL3N3ZWV0LWJpdGVzL3NyYy9tYWluLmpzeCJ9
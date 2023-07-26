export const USER_DETAILS = [
  {
    id: 0,
    name: "jana",
    role: "superadmin",
    network: "vodafone",
    password: "krj",
    status: "",
  },
  {
    id: 1,
    name: "gowtham",
    role: "admin",
    network: "airtel",
    password: "krg",
    status: "",
  },
  {
    id: 2,
    name: "rajasekaran",
    role: "user",
    network: "jio",
    password: "pkr",
    status: "",
  },
  {
    id: 3,
    name: "padmavathi",
    role: "user",
    network: "airtel",
    password: "rp",
    status: "",
  },
];

export const ROUTES = {
  welcomePage: "/",
  login: "/login",
  userDetails: "/user-details",
  addUser: "/add-user",
};

export const TABLE = [
  {
    id: 0,
    name: "jana",
    role: "super admin",
    status:
      JSON.parse(localStorage.getItem("currentUser")) === "jana"
        ? "logged in"
        : "logged out",
    network: "vodafone",
    actions: <button>delete</button>,
  },
];

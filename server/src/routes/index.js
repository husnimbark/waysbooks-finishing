const express = require("express");

const router = express.Router();

const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

const {
  getTransactions,
  addTransaction,
  notification,
} = require("../controllers/transaction");

const {
  getPurchases,
  addPurchase,
} = require("../controllers/purchase");

const {
  getCarts,
  addCart,
  updateCart,
  getCart,
  deleteCart,
} = require("../controllers/cart");

const { getProfile } = require("../controllers/profile");
const { register, login, checkAuth } = require("../controllers/auth");

const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");
const { uploadImage } = require("../middlewares/uploadImage");

router.post("/user", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/profile", auth, getProfile);

router.get("/Books", auth, getBooks);
router.get("/Book/:id", auth, getBook);
router.post("/Book", auth, uploadImage("image"), uploadFile("file"), addBook);
router.patch("/Book/:id", auth, uploadImage("image"), uploadFile("file"), updateBook);
router.delete("/Book/:id", auth, deleteBook);

router.get("/transactions", auth, getTransactions);
router.post("/transaction", auth, addTransaction);

router.get("/purchases", auth, getPurchases);
router.post("/purchase", auth, addPurchase);

router.post("/notification", notification);

router.get("/carts", getCarts);
router.post("/cart", addCart);
router.patch("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCart);
router.get("/cart", getCart);

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

module.exports = router;

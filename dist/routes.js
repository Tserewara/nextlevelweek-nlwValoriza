"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
const CreateComplimentController_1 = require("./controllers/CreateComplimentController");
const CreateTagController_1 = require("./controllers/CreateTagController");
const CreateUserController_1 = require("./controllers/CreateUserController");
const ListReceivedComplimentsByUserController_1 = require("./controllers/ListReceivedComplimentsByUserController");
const ListSentComplimentsByUserController_1 = require("./controllers/ListSentComplimentsByUserController");
const ListTagsController_1 = require("./controllers/ListTagsController");
const ListUsersController_1 = require("./controllers/ListUsersController");
const ensureAdmin_1 = require("./middlewares/ensureAdmin");
const ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
const router = express_1.Router();
exports.router = router;
const createUserController = new CreateUserController_1.CreateUserController();
const createTagController = new CreateTagController_1.CreateTagController();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
const createComplimentController = new CreateComplimentController_1.CreateComplimentController();
const listReceivedComplimentsByUserController = new ListReceivedComplimentsByUserController_1.ListReceivedComplimentsByUserController();
const listSentComplimentsByUserController = new ListSentComplimentsByUserController_1.ListSentComplimentsByUserController();
const listTagsController = new ListTagsController_1.ListTagsController();
const listUsersController = new ListUsersController_1.ListUsersController();
router.post("/tags", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated_1.ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/sent", ensureAuthenticated_1.ensureAuthenticated, listSentComplimentsByUserController.handle);
router.get("/users/compliments/received", ensureAuthenticated_1.ensureAuthenticated, listReceivedComplimentsByUserController.handle);
router.get("/tags", ensureAuthenticated_1.ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated_1.ensureAuthenticated, listUsersController.handle);
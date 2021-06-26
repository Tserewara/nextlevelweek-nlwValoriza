import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { HomeController } from './controllers/HomeController';
import { ListReceivedComplimentsByUserController } from './controllers/ListReceivedComplimentsByUserController';
import { ListSentComplimentsByUserController } from './controllers/ListSentComplimentsByUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const homeController = new HomeController();
const createUserController = new CreateUserController(); 
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listReceivedComplimentsByUserController = new ListReceivedComplimentsByUserController();
const listSentComplimentsByUserController = new ListSentComplimentsByUserController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController()

router.get('/', homeController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/sent", ensureAuthenticated, listSentComplimentsByUserController.handle);
router.get("/users/compliments/received", ensureAuthenticated, listReceivedComplimentsByUserController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)
export { router };
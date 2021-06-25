import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListByReceiverController } from './controllers/ListByReceiverController';
import { ListBySenderController } from './controllers/ListBySenderController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUserController';

const router = Router();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listByReceiverController = new ListByReceiverController();
const listBySenderController = new ListBySenderController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)
router.get('/compliments/sent', ensureAuthenticated, listBySenderController.handle)
router.get('/compliments/received', ensureAuthenticated, listByReceiverController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)


export { router }
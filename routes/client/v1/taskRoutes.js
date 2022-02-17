/**
 * taskRoutes.js
 * @description :: CRUD API routes for task
 */

const express = require('express');
const router = express.Router();
const taskController = require('../../../controller/client/v1/taskController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/task/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,taskController.addTask);
router.route('/client/api/v1/task/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,taskController.findAllTask);
router.route('/client/api/v1/task/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,taskController.getTaskCount);
router.route('/client/api/v1/task/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,taskController.getTaskByAggregate);
router.route('/client/api/v1/task/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,taskController.softDeleteManyTask);
router.route('/client/api/v1/task/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,taskController.bulkInsertTask);
router.route('/client/api/v1/task/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,taskController.bulkUpdateTask);
router.route('/client/api/v1/task/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,taskController.deleteManyTask);
router.route('/client/api/v1/task/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,taskController.softDeleteTask);
router.route('/client/api/v1/task/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,taskController.partialUpdateTask);
router.route('/client/api/v1/task/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,taskController.updateTask);    
router.route('/client/api/v1/task/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,taskController.getTask);
router.route('/client/api/v1/task/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,taskController.getTask);
router.route('/client/api/v1/task/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,taskController.deleteTask);

module.exports = router;

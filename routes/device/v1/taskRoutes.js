/**
 * taskRoutes.js
 * @description :: CRUD API routes for task
 */

const express = require('express');
const router = express.Router();
const taskController = require('../../../controller/device/v1/taskController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/task/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,taskController.addTask);
router.route('/device/api/v1/task/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,taskController.findAllTask);
router.route('/device/api/v1/task/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,taskController.getTaskCount);
router.route('/device/api/v1/task/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,taskController.getTaskByAggregate);
router.route('/device/api/v1/task/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,taskController.softDeleteManyTask);
router.route('/device/api/v1/task/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,taskController.bulkInsertTask);
router.route('/device/api/v1/task/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,taskController.bulkUpdateTask);
router.route('/device/api/v1/task/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,taskController.deleteManyTask);
router.route('/device/api/v1/task/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,taskController.softDeleteTask);
router.route('/device/api/v1/task/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,taskController.partialUpdateTask);
router.route('/device/api/v1/task/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,taskController.updateTask);    
router.route('/device/api/v1/task/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,taskController.getTask);
router.route('/device/api/v1/task/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,taskController.getTask);
router.route('/device/api/v1/task/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,taskController.deleteTask);

module.exports = router;

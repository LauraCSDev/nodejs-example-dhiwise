/**
 * userRoleRoutes.js
 * @description :: CRUD API routes for userRole
 */

const express = require('express');
const router = express.Router();
const userRoleController = require('../../../controller/device/v1/userRoleController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/userrole/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,userRoleController.addUserRole);
router.route('/device/api/v1/userrole/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,userRoleController.bulkInsertUserRole);
router.route('/device/api/v1/userrole/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,userRoleController.findAllUserRole);
router.route('/device/api/v1/userrole/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,userRoleController.getUserRoleCount);
router.route('/device/api/v1/userrole/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,userRoleController.bulkUpdateUserRole);
router.route('/device/api/v1/userrole/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,userRoleController.softDeleteManyUserRole);
router.route('/device/api/v1/userrole/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,userRoleController.deleteManyUserRole);
router.route('/device/api/v1/userrole/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,userRoleController.getUserRoleByAggregate);
router.route('/device/api/v1/userrole/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,userRoleController.softDeleteUserRole);
router.route('/device/api/v1/userrole/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,userRoleController.partialUpdateUserRole);
router.route('/device/api/v1/userrole/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,userRoleController.updateUserRole);    
router.route('/device/api/v1/userrole/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,userRoleController.getUserRole);
router.route('/device/api/v1/userrole/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,userRoleController.getUserRole);
router.route('/device/api/v1/userrole/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,userRoleController.deleteUserRole);

module.exports = router;

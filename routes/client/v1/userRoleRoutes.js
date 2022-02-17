/**
 * userRoleRoutes.js
 * @description :: CRUD API routes for userRole
 */

const express = require('express');
const router = express.Router();
const userRoleController = require('../../../controller/client/v1/userRoleController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/userrole/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.addUserRole);
router.route('/client/api/v1/userrole/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.bulkInsertUserRole);
router.route('/client/api/v1/userrole/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.findAllUserRole);
router.route('/client/api/v1/userrole/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.getUserRoleCount);
router.route('/client/api/v1/userrole/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.bulkUpdateUserRole);
router.route('/client/api/v1/userrole/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.softDeleteManyUserRole);
router.route('/client/api/v1/userrole/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.deleteManyUserRole);
router.route('/client/api/v1/userrole/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.getUserRoleByAggregate);
router.route('/client/api/v1/userrole/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.softDeleteUserRole);
router.route('/client/api/v1/userrole/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.partialUpdateUserRole);
router.route('/client/api/v1/userrole/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.updateUserRole);    
router.route('/client/api/v1/userrole/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.getUserRole);
router.route('/client/api/v1/userrole/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.getUserRole);
router.route('/client/api/v1/userrole/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,userRoleController.deleteUserRole);

module.exports = router;

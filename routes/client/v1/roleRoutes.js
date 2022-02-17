/**
 * roleRoutes.js
 * @description :: CRUD API routes for role
 */

const express = require('express');
const router = express.Router();
const roleController = require('../../../controller/client/v1/roleController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/role/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.addRole);
router.route('/client/api/v1/role/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.bulkInsertRole);
router.route('/client/api/v1/role/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.findAllRole);
router.route('/client/api/v1/role/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.getRoleCount);
router.route('/client/api/v1/role/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.bulkUpdateRole);
router.route('/client/api/v1/role/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.softDeleteManyRole);
router.route('/client/api/v1/role/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.deleteManyRole);
router.route('/client/api/v1/role/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.getRoleByAggregate);
router.route('/client/api/v1/role/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.softDeleteRole);
router.route('/client/api/v1/role/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.partialUpdateRole);
router.route('/client/api/v1/role/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.updateRole);    
router.route('/client/api/v1/role/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.getRole);
router.route('/client/api/v1/role/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.getRole);
router.route('/client/api/v1/role/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,roleController.deleteRole);

module.exports = router;

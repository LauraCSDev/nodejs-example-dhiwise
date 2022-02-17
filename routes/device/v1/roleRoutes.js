/**
 * roleRoutes.js
 * @description :: CRUD API routes for role
 */

const express = require('express');
const router = express.Router();
const roleController = require('../../../controller/device/v1/roleController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/role/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,roleController.addRole);
router.route('/device/api/v1/role/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,roleController.bulkInsertRole);
router.route('/device/api/v1/role/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,roleController.findAllRole);
router.route('/device/api/v1/role/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,roleController.getRoleCount);
router.route('/device/api/v1/role/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,roleController.bulkUpdateRole);
router.route('/device/api/v1/role/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,roleController.softDeleteManyRole);
router.route('/device/api/v1/role/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,roleController.deleteManyRole);
router.route('/device/api/v1/role/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,roleController.getRoleByAggregate);
router.route('/device/api/v1/role/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,roleController.softDeleteRole);
router.route('/device/api/v1/role/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,roleController.partialUpdateRole);
router.route('/device/api/v1/role/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,roleController.updateRole);    
router.route('/device/api/v1/role/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,roleController.getRole);
router.route('/device/api/v1/role/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,roleController.getRole);
router.route('/device/api/v1/role/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,roleController.deleteRole);

module.exports = router;

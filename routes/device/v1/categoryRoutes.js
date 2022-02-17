/**
 * categoryRoutes.js
 * @description :: CRUD API routes for category
 */

const express = require('express');
const router = express.Router();
const categoryController = require('../../../controller/device/v1/categoryController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/category/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,categoryController.addCategory);
router.route('/device/api/v1/category/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,categoryController.findAllCategory);
router.route('/device/api/v1/category/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,categoryController.getCategoryCount);
router.route('/device/api/v1/category/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,categoryController.getCategoryByAggregate);
router.route('/device/api/v1/category/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,categoryController.softDeleteManyCategory);
router.route('/device/api/v1/category/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,categoryController.bulkInsertCategory);
router.route('/device/api/v1/category/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,categoryController.bulkUpdateCategory);
router.route('/device/api/v1/category/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,categoryController.deleteManyCategory);
router.route('/device/api/v1/category/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,categoryController.softDeleteCategory);
router.route('/device/api/v1/category/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,categoryController.partialUpdateCategory);
router.route('/device/api/v1/category/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,categoryController.updateCategory);    
router.route('/device/api/v1/category/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,categoryController.getCategory);
router.route('/device/api/v1/category/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,categoryController.getCategory);
router.route('/device/api/v1/category/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,categoryController.deleteCategory);

module.exports = router;

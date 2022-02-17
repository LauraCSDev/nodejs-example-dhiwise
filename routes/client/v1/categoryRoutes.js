/**
 * categoryRoutes.js
 * @description :: CRUD API routes for category
 */

const express = require('express');
const router = express.Router();
const categoryController = require('../../../controller/client/v1/categoryController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/category/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,categoryController.addCategory);
router.route('/client/api/v1/category/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,categoryController.findAllCategory);
router.route('/client/api/v1/category/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,categoryController.getCategoryCount);
router.route('/client/api/v1/category/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,categoryController.getCategoryByAggregate);
router.route('/client/api/v1/category/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,categoryController.softDeleteManyCategory);
router.route('/client/api/v1/category/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,categoryController.bulkInsertCategory);
router.route('/client/api/v1/category/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,categoryController.bulkUpdateCategory);
router.route('/client/api/v1/category/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,categoryController.deleteManyCategory);
router.route('/client/api/v1/category/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,categoryController.softDeleteCategory);
router.route('/client/api/v1/category/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,categoryController.partialUpdateCategory);
router.route('/client/api/v1/category/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,categoryController.updateCategory);    
router.route('/client/api/v1/category/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,categoryController.getCategory);
router.route('/client/api/v1/category/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,categoryController.getCategory);
router.route('/client/api/v1/category/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,categoryController.deleteCategory);

module.exports = router;

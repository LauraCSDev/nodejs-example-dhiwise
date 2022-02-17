/**
 * projectRouteRoutes.js
 * @description :: CRUD API routes for projectRoute
 */

const express = require('express');
const router = express.Router();
const projectRouteController = require('../../../controller/device/v1/projectRouteController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/projectroute/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.addProjectRoute);
router.route('/device/api/v1/projectroute/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.bulkInsertProjectRoute);
router.route('/device/api/v1/projectroute/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.findAllProjectRoute);
router.route('/device/api/v1/projectroute/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.getProjectRouteCount);
router.route('/device/api/v1/projectroute/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.bulkUpdateProjectRoute);
router.route('/device/api/v1/projectroute/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.softDeleteManyProjectRoute);
router.route('/device/api/v1/projectroute/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.deleteManyProjectRoute);
router.route('/device/api/v1/projectroute/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.getProjectRouteByAggregate);
router.route('/device/api/v1/projectroute/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.softDeleteProjectRoute);
router.route('/device/api/v1/projectroute/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.partialUpdateProjectRoute);
router.route('/device/api/v1/projectroute/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.updateProjectRoute);    
router.route('/device/api/v1/projectroute/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.getProjectRoute);
router.route('/device/api/v1/projectroute/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.getProjectRoute);
router.route('/device/api/v1/projectroute/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,projectRouteController.deleteProjectRoute);

module.exports = router;

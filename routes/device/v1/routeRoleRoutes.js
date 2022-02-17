/**
 * routeRoleRoutes.js
 * @description :: CRUD API routes for routeRole
 */

const express = require('express');
const router = express.Router();
const routeRoleController = require('../../../controller/device/v1/routeRoleController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/routerole/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.addRouteRole);
router.route('/device/api/v1/routerole/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.bulkInsertRouteRole);
router.route('/device/api/v1/routerole/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.findAllRouteRole);
router.route('/device/api/v1/routerole/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.getRouteRoleCount);
router.route('/device/api/v1/routerole/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.bulkUpdateRouteRole);
router.route('/device/api/v1/routerole/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.softDeleteManyRouteRole);
router.route('/device/api/v1/routerole/deleteMany').post(auth(...[ 'deleteManyByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.deleteManyRouteRole);
router.route('/device/api/v1/routerole/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.getRouteRoleByAggregate);
router.route('/device/api/v1/routerole/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.softDeleteRouteRole);
router.route('/device/api/v1/routerole/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.partialUpdateRouteRole);
router.route('/device/api/v1/routerole/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.updateRouteRole);    
router.route('/device/api/v1/routerole/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.getRouteRole);
router.route('/device/api/v1/routerole/:id').post(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.getRouteRole);
router.route('/device/api/v1/routerole/delete/:id').delete(auth(...[ 'deleteByUserInDevicePlatform' ]),checkRolePermission,routeRoleController.deleteRouteRole);

module.exports = router;

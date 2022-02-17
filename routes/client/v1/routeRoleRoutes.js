/**
 * routeRoleRoutes.js
 * @description :: CRUD API routes for routeRole
 */

const express = require('express');
const router = express.Router();
const routeRoleController = require('../../../controller/client/v1/routeRoleController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/routerole/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.addRouteRole);
router.route('/client/api/v1/routerole/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.bulkInsertRouteRole);
router.route('/client/api/v1/routerole/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.findAllRouteRole);
router.route('/client/api/v1/routerole/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.getRouteRoleCount);
router.route('/client/api/v1/routerole/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.bulkUpdateRouteRole);
router.route('/client/api/v1/routerole/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.softDeleteManyRouteRole);
router.route('/client/api/v1/routerole/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.deleteManyRouteRole);
router.route('/client/api/v1/routerole/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.getRouteRoleByAggregate);
router.route('/client/api/v1/routerole/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.softDeleteRouteRole);
router.route('/client/api/v1/routerole/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.partialUpdateRouteRole);
router.route('/client/api/v1/routerole/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.updateRouteRole);    
router.route('/client/api/v1/routerole/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.getRouteRole);
router.route('/client/api/v1/routerole/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.getRouteRole);
router.route('/client/api/v1/routerole/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,routeRoleController.deleteRouteRole);

module.exports = router;

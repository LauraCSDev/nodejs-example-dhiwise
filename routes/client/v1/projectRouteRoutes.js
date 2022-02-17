/**
 * projectRouteRoutes.js
 * @description :: CRUD API routes for projectRoute
 */

const express = require('express');
const router = express.Router();
const projectRouteController = require('../../../controller/client/v1/projectRouteController');
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/client/api/v1/projectroute/create').post(auth(...[ 'createByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.addProjectRoute);
router.route('/client/api/v1/projectroute/addBulk').post(auth(...[ 'addBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.bulkInsertProjectRoute);
router.route('/client/api/v1/projectroute/list').post(auth(...[ 'getAllByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.findAllProjectRoute);
router.route('/client/api/v1/projectroute/count').post(auth(...[ 'getCountByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.getProjectRouteCount);
router.route('/client/api/v1/projectroute/updateBulk').put(auth(...[ 'updateBulkByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.bulkUpdateProjectRoute);
router.route('/client/api/v1/projectroute/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.softDeleteManyProjectRoute);
router.route('/client/api/v1/projectroute/deleteMany').post(auth(...[ 'deleteManyByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.deleteManyProjectRoute);
router.route('/client/api/v1/projectroute/aggregate').post(auth(...[ 'aggregateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.getProjectRouteByAggregate);
router.route('/client/api/v1/projectroute/softDelete/:id').put(auth(...[ 'softDeleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.softDeleteProjectRoute);
router.route('/client/api/v1/projectroute/partial-update/:id').put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.partialUpdateProjectRoute);
router.route('/client/api/v1/projectroute/update/:id').put(auth(...[ 'updateByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.updateProjectRoute);    
router.route('/client/api/v1/projectroute/:id').get(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.getProjectRoute);
router.route('/client/api/v1/projectroute/:id').post(auth(...[ 'getByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.getProjectRoute);
router.route('/client/api/v1/projectroute/delete/:id').delete(auth(...[ 'deleteByUserInClientPlatform' ]),checkRolePermission,checkRolePermission,projectRouteController.deleteProjectRoute);

module.exports = router;

/**
 * seeder.js
 * @description :: functions that seeds mock data to run the application
 */
const _ = require('lodash');
const User = require('../model/user');
const authConstant = require('../constants/authConstant');
const Role = require('../model/role');
const ProjectRoute = require('../model/projectRoute');
const RouteRole = require('../model/routeRole');
const UserRole = require('../model/userRole');
const { replaceAll } = require('../utils/common');

/* seeds default users */
async function seedUser () {
  try {
    let user = await User.findOne({
      'username':'Gabrielle96',
      'isActive':true,
      'isDeleted':false
    });
    if (!user || !user.isPasswordMatch('TOuiP7NKhmI1bgK') ) {
      let user = new User({
        'password':'TOuiP7NKhmI1bgK',
        'username':'Gabrielle96',
        'role':authConstant.USER_ROLE.User
      });
      await User.create(user);
    }
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed.');
  }
}
/* seeds roles */
async function seedRole () {
  try {
    const roles = [ 'System_User' ];
    for (let i = 0; i < roles.length; i++) {
      let result = await Role.findOne({
        name: roles[i],
        code: roles[i].toUpperCase() 
      });
      if (!result) {
        await Role.create({
          name: roles[i],
          code: roles[i].toUpperCase(),
          weight: 1
        });
      }
    };
    console.info('Role model seeded 🍺');
  } catch (error){
    console.log('Role seeder failed.');
  }
}

/* seeds routes of project */
async function seedProjectRoutes (routes) {
  try {
    if (routes && routes.length) {
      for (let i = 0; i < routes.length; i++) {
        const routeMethods = routes[i].methods;
        for (let j = 0; j < routeMethods.length; j++) {
          const routeObj = {
            uri: routes[i].path.toLowerCase(),
            method: routeMethods[j],
            route_name: `${replaceAll((routes[i].path).toLowerCase().substring(1), '/', '_')}`
          };
          if (routeObj.route_name){
            let result = await ProjectRoute.findOne(routeObj);
            if (!result) {
              await ProjectRoute.create(routeObj);
            }
          }
        }
      }
      console.info('ProjectRoute model seeded 🍺');
    }
  } catch (error){
    console.log('ProjectRoute seeder failed.');
  }
}

/* seeds role for routes */
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/device/api/v1/task/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/task/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/task/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/task/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/task/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/task/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/task/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/task/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/task/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/task/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/task/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/task/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/task/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/task/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/category/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/category/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/category/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/category/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/task/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/task/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/task/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/task/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/task/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/task/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/task/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/task/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/user/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/category/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/category/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/category/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/category/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/role/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/routerole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/client/api/v1/userrole/:id',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/aggregate',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/client/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/client/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/client/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },

    ];
    if (routeRoles && routeRoles.length) {
      for (let i = 0; i < routeRoles.length; i++) {
        let route = await ProjectRoute.findOne({
          uri: routeRoles[i].route.toLowerCase(),
          method: routeRoles[i].method,
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        let role = await Role.findOne({
          code: (routeRoles[i].role).toUpperCase(),
          isActive: true,
          isDeleted: false 
        }, { id: 1 });
        if (route && route.id && role && role.id) {
          let routeRoleObj = await RouteRole.findOne({
            roleId: role.id,
            routeId: route.id
          });
          if (!routeRoleObj) {
            await RouteRole.create({
              roleId: role.id,
              routeId: route.id
            });
          }
        }
      };
      console.info('RouteRole model seeded 🍺');
    }
  } catch (error){
    console.log('RouteRole seeder failed.');
  }
}

/* seeds roles for users */
async function seedUserRole (){
  try {
    let user = await User.findOne({
      'username':'Gabrielle96',
      'isActive':true,
      'isDeleted':false
    });
    let userRole = await Role.findOne({ code: 'SYSTEM_USER' }, { id: 1 });
    if (user && user.isPasswordMatch('TOuiP7NKhmI1bgK') && userRole){
      let count = await UserRole.countDocuments({
        userId: user.id,
        roleId: userRole.id
      });
      if (count == 0) {
        await UserRole.create({
          userId: user.id,
          roleId: userRole.id 
        });
        console.info('user seeded 🍺');
      }   
    }
  } catch (error){
    console.log('UserRole seeder failed.');
  }
}

async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();

};
module.exports = seedData;
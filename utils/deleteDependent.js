/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let Task = require('../model/task');
let User = require('../model/user');
let Category = require('../model/category');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deleteTask = async (filter) =>{
  try {
    let task = await Task.find(filter, { _id:1 });
    if (task.length){
      task = task.map((obj) => obj._id);
      const taskFilter0263 = { 'parentId': { '$in': task } };
      const task8164 = await deleteTask(taskFilter0263);
      return await Task.deleteMany(filter);
    } else {
      return 'No task found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter4769 = { 'updatedBy': { '$in': user } };
      const user4034 = await deleteUser(userFilter4769);
      const userFilter8280 = { 'addedBy': { '$in': user } };
      const user0577 = await deleteUser(userFilter8280);
      const userTokensFilter7430 = { 'userId': { '$in': user } };
      const userTokens7614 = await deleteUserTokens(userTokensFilter7430);
      const userRoleFilter1682 = { 'userId': { '$in': user } };
      const userRole5628 = await deleteUserRole(userRoleFilter1682);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCategory = async (filter) =>{
  try {
    let category = await Category.find(filter, { _id:1 });
    if (category.length){
      category = category.map((obj) => obj._id);
      const taskFilter0730 = { 'categoryId': { '$in': category } };
      const task9579 = await deleteTask(taskFilter0730);
      const categoryFilter4784 = { 'parentId': { '$in': category } };
      const category0671 = await deleteCategory(categoryFilter4784);
      return await Category.deleteMany(filter);
    } else {
      return 'No category found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    return await UserTokens.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter5728 = { 'roleId': { '$in': role } };
      const routeRole7847 = await deleteRouteRole(routeRoleFilter5728);
      const userRoleFilter2973 = { 'roleId': { '$in': role } };
      const userRole3078 = await deleteUserRole(userRoleFilter2973);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter0382 = { 'routeId': { '$in': projectroute } };
      const routeRole0058 = await deleteRouteRole(routeRoleFilter0382);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countTask = async (filter) =>{
  try {
        
    let task = await Task.find(filter, { _id:1 });
    if (task.length){
      task = task.map((obj) => obj._id);

      const taskFilter = { '$or': [{                    parentId : { '$in' : task } }] };
      const taskCnt =  await dbService.countDocument(Task,taskFilter);

      let response = { task : taskCnt, };
      return response;
    } else {
      return {  task : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
        
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const userFilter = { '$or': [{                    updatedBy : { '$in' : user } },{                    addedBy : { '$in' : user } }] };
      const userCnt =  await dbService.countDocument(User,userFilter);

      const userTokensFilter = { '$or': [{                    userId : { '$in' : user } }] };
      const userTokensCnt =  await dbService.countDocument(UserTokens,userTokensFilter);

      const userRoleFilter = { '$or': [{                    userId : { '$in' : user } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        user : userCnt,
        userTokens : userTokensCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countCategory = async (filter) =>{
  try {
        
    let category = await Category.find(filter, { _id:1 });
    if (category.length){
      category = category.map((obj) => obj._id);

      const taskFilter = { '$or': [{                    categoryId : { '$in' : category } }] };
      const taskCnt =  await dbService.countDocument(Task,taskFilter);

      const categoryFilter = { '$or': [{                    parentId : { '$in' : category } }] };
      const categoryCnt =  await dbService.countDocument(Category,categoryFilter);

      let response = {
        task : taskCnt,
        category : categoryCnt,
      };
      return response;
    } else {
      return {  category : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
        
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
        
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{                    roleId : { '$in' : role } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{                    roleId : { '$in' : role } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
        
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{                    routeId : { '$in' : projectroute } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
        
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
        
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteTask = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let task = await Task.find(filter, { _id:1 });
    if (task.length){
      task = task.map((obj) => obj._id);
      const taskFilter7454 = { 'parentId': { '$in': task } };
      const task9475 = await softDeleteTask(taskFilter7454, updateBody);
      return await Task.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No task found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter7692 = { 'updatedBy': { '$in': user } };
      const user7739 = await softDeleteUser(userFilter7692, updateBody);
      const userFilter5495 = { 'addedBy': { '$in': user } };
      const user3348 = await softDeleteUser(userFilter5495, updateBody);
      const userTokensFilter9727 = { 'userId': { '$in': user } };
      const userTokens0997 = await softDeleteUserTokens(userTokensFilter9727, updateBody);
      const userRoleFilter8389 = { 'userId': { '$in': user } };
      const userRole7433 = await softDeleteUserRole(userRoleFilter8389, updateBody);
      return await User.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCategory = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let category = await Category.find(filter, { _id:1 });
    if (category.length){
      category = category.map((obj) => obj._id);
      const taskFilter4639 = { 'categoryId': { '$in': category } };
      const task9067 = await softDeleteTask(taskFilter4639, updateBody);
      const categoryFilter0913 = { 'parentId': { '$in': category } };
      const category9594 = await softDeleteCategory(categoryFilter0913, updateBody);
      return await Category.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No category found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserTokens.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter5146 = { 'roleId': { '$in': role } };
      const routeRole9144 = await softDeleteRouteRole(routeRoleFilter5146, updateBody);
      const userRoleFilter6245 = { 'roleId': { '$in': role } };
      const userRole1371 = await softDeleteUserRole(userRoleFilter6245, updateBody);
      return await Role.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter9346 = { 'routeId': { '$in': projectroute } };
      const routeRole2556 = await softDeleteRouteRole(routeRoleFilter9346, updateBody);
      return await ProjectRoute.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await RouteRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteTask,
  deleteUser,
  deleteCategory,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countTask,
  countUser,
  countCategory,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteTask,
  softDeleteUser,
  softDeleteCategory,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};

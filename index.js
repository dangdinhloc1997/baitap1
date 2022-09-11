import appController from './controllers/app.controller.js'
import categoryCtrl from './controllers/category.controller.js'
import appRouter from './router/app.router.js'
import detailCtrl from './controllers/detail.controller.js'
// import registryCtrl from './controllers/registry.controller.js'
// import loginCtrl from './controllers/login.controller.js'


var app = angular.module('app', ['ngRoute'])

app.controller('app-ctrl', appController)
app.config(appRouter)
app.controller('categoryCtrl', categoryCtrl)
app.controller('detailCtrl',detailCtrl)
// app.controller('registryCtrl',registryCtrl)
// app.controller('loginCtrl',loginCtrl)
export default {
    home: '/',
    products: '/products',
    product: '/products/:id',
    login: '/login',
    dashboard: '/dashboard',
    cart: '/cart',
    adminPanel: '/admin-panel',
    notFound: '/*',
    userPage: '/user/:id',
    userPagePath: '/user',
    userSearch: '/user-search',
    userConfig: '/user-config',
    register: '/register',
    successPayment: '/success/:purchase_id/:buyer',

    // Admin Create/edit
    createCategory: '/admin-panel/create-category',
    editCategory: '/admin-panel/edit-category/:id',
    createProduct: '/admin-panel/create-product',
    editProduct: '/admin-panel/edit-product/:id',
    createCoupon: '/admin-panel/create-coupon',
    createNews: '/admin-panel/create-news',
    createModUser: '/admin-panel/create-mod-user',
    editAdmin: '/admin-panel/edit-admin',

    // Admin Manage
    manageCategories: '/admin-panel/manage-categories',
    manageProducts: '/admin-panel/manage-products',
    manageCoupons: '/admin-panel/manage-coupons',
    manageNews: '/admin-panel/manage-news',
    manageUsers: '/admin-panel/manage-users',
    manageOrders: '/admin-panel/manage-orders'

}
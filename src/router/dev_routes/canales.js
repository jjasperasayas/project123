
export default{
  routes: [{
    path: '/canales',
    name: 'canales',
    component: resolve => require(['modules/testForDeveloper/Canales.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: resolve => require(['modules/home/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/signup_partner',
    name: 'signupPartner',
    component: resolve => require(['modules/home/SignupPartner.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/verification/:email',
    name: 'verification',
    component: resolve => require(['modules/home/Verification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/login_verification/:username/:code',
    name: 'loginVerification',
    component: resolve => require(['modules/home/LoginByVerification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/login',
    name: 'loginAccount',
    component: resolve => require(['modules/home/LogIn.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/home',
    name: 'landing',
    component: resolve => require(['modules/home/Landing.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/request_reset_password',
    name: 'requestResetPassword',
    component: resolve => require(['modules/home/RequestResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/reset_password/:username/:code',
    name: 'resetPassword',
    component: resolve => require(['modules/home/ResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: resolve => require(['modules/dashboard/Dashboard.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/data_entries',
    name: 'dataEntries',
    component: resolve => require(['modules/entry/DataEntries.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/templates',
    name: 'templates',
    component: resolve => require(['modules/editor/Templates.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/images',
    name: 'images',
    component: resolve => require(['modules/image/Images.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/billings',
    name: 'billings',
    component: resolve => require(['modules/billing/Billings.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/checkout/',
    name: 'checkout',
    component: resolve => require(['modules/checkout/Checkouts.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/thankyou/:orderNumber',
    name: 'thankyou',
    component: resolve => require(['modules/checkout/ThankYou.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/profile/:parameter?',
    name: 'profile',
    component: resolve => require(['modules/account/Update.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/pricings',
    name: 'pricings',
    component: resolve => require(['modules/pricing/Pricings.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/messenger/:username?',
    name: 'messenger',
    component: resolve => require(['modules/messenger/Messenger.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/plan',
    name: 'plan',
    component: resolve => require(['modules/plan/Plan.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/checkout_plan',
    name: 'checkoutPlan',
    component: resolve => require(['modules/plan/Checkout.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/cp_thank_you/:orderNumber',
    name: 'cpThankYou',
    component: resolve => require(['modules/plan/ThankYou.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/printings',
    name: 'printings',
    component: resolve => require(['modules/partner/Partners.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: resolve => require(['modules/order/Orders.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: resolve => require(['modules/coupon/Coupons.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }
  ]
}

const environment = {}

const routes = {
    home: '/',
    auth: '/auth',
 dashboard: '/dashboard',
 dashboardSuperAdmin: '/dashboardSuperAdmin',
 dashboardHmo: '/dashboardHmo',
 dashboardHospital: '/dashboardHospital',
 dashboardCompany: '/dashboardCompany' ,
 hospitals: {
    new: '/hospitals/new',
    hospital: '/hospitals',
    view: '/hospitals/:id',
    upload: '/hospitals/upload',
    edit: '/hospitals/:id/edit',
    hmo: '/hospitals/hmo',
    hmoDebt: '/hospitals/hmo/debt',
    hmoHistory: '/hospitals/hmo/history',
    confirmPayment: '/hospitals/confirmPayment',
    appointment: '/hospitals/appointment',
    configurations: '/hospitals/configurations',
    images: '/hospitals/:id/images',
    designations: {
        designation: '/hospitals/designation',
        edit: '/hospitals/designation/:id/edit',
        new: '/hospitals/designation/new'
    },
    staffs: {
        staff: '/hospitals/staff',
        new: '/hospitals/staff/new',
        edit: '/hospitals/staff/:id/edit',
        view: '/hospitals/staff/:id',
        consultation: '/hospitals/consultation'
    },
    patients: {
        patient: '/hospitals/patients',
        new: '/hospitals/patients/new',
        edit: '/hospitals/patients/:id/edit',
        view: '/hospitals/patients/:id',
        consultations: {
            consultation: '/hospitals/patients/consultation',
            new: '/hospitals/patients/consultation/:patientId',
            history: '/hospitals/patients/consultation/history',
            view: '/hospitals/patients/consultation/details'
        }
    }
},
 hmos: {
    new: '/hmos/new',
    hmo: '/hmos',
    view: '/hmos/:id',
    upload:'/hmos/upload',
    plans: {
        plan: '/hmo/plans',
        new: '/hmo/plans/new',
        edit: '/hmo/plans/:id/edit'
    },
    newHmoPlan: '/newHmoPlan',
    edit: '/hmos/:id/edit',
    billing: '/billing',
    client: '/client',
    hospitals: '/hmo/hospitals',
    transactions: {
        clientHistory: '/hmos/transactions/clientHistory',
        clientDebt: '/hmos/transactions/clientDebt',
        hospitalHistory: '/hmos/transactions/hospitalHistory',
        hospitalDebt: '/hmos/transactions/hospitalDebt'
    },
    configurations: {
        accounts: {
            account: '/hmos/accounts',
            new: '/hmos/accounts/new',
            edit: '/hmos/accounts/:id/edit'
        },
        services: {
            service: '/hmos/services',
            new: '/hmos/services/new',
            edit: '/hmos/services/:id/edit'
        },
        userManagement: {
            user: '/hmos/management',
            new: '/hmos/management/new',
            role: '/hmos/management/role'
        }
    }
},
companies: {
    new: '/companies/new',
    company: '/companies',
    view: '/companies/:id',
    edit: '/companies/:id/edit',
    plans: {
        plan: '/plans',
        new: '/plans/new/',
        view: '/plans/view'
    },
    employees: {
        new: '/companies/employees/new',
        employee: '/companies/employees',
        view: '/companies/employees/:id',
        consultations: {
            view: '/companies/employees/consultations/:id',
            consultation: '/companies/employees/consultations'
        },
        upload: '/companies/employees/upload',
        edit: '/companies/employees/:id/edit',
        replaceCard: '/companies/employees/replaceCard',
        transactions: {
            hmoHistory: '/companies/employees/transactions/hmoHistory',
            hmoDebt: '/hmos/transactions/hmoDebt',
        }
    },
},

profileSettings: '/profileSettings',
configurations: {
    ailments: '/ailments',
    editAilment: '/ailments/:id/edit',
    grade: '/grade',
    userManagement: '/users',
    roleManagement: {
        new: '/config/roles/new',
        role: '/config/roles',
    },
    assignRoles: '/assignRoles',
    settings: '/configuration/settings'
},
settings: {
    profile: '/settings/profile',
    password: '/settings/change-password'
},
 products: '/products',
 orders: '/orders',
 createAilment: '/createAilment',
 createGrade: '/createGrade',
 
}

environment.development = {
 authProps: ['himp/token', 'himp/user'],
 backendUrl: process.env.REACT_APP_BACKEND_URL ?? 'http://165.22.74.195:8001/',
 routes,
 paystack_public_key: 'pk_test_9782679ce2878a10907b68126ee6dd7ad62a0f6a'
}

environment.staging = {
 authProps: ['himp/token', 'himp/user'],
 backendUrl: process.env.REACT_APP_BACKEND_URL ?? 'http://165.22.74.195:8001/',
 routes,
 paystack_public_key: 'pk_test_9782679ce2878a10907b68126ee6dd7ad62a0f6a'
} 
environment.production = {
 authProps: ['himp/token', 'himp/user'],
 backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://165.22.74.195:8001/',
 routes,
 paystack_public_key: 'pk_test_9782679ce2878a10907b68126ee6dd7ad62a0f6a'
}
console.log(process.env.REACT_APP_ENV || 'development')
export default environment[process.env.REACT_APP_ENV || 'development']



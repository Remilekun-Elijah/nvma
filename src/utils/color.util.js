export const getByStatusText = (status, colorizeStatus = true) => {

    let res = '';
    status = typeof status == 'string' ? status.toLowerCase() : status;
    switch (status) {
        case 'suspended':
        case 'disabled':
        case 'placed':
        case 'out for delivery':
        case 'booked':
        case 'confirmed':
            res = {
                // backgroundColor: '#F8EBFF',
                color: '#7200A8'
            }
            break;
        case 'inactive':
        case 'deceased':
        case 'failed':
        case "payment failed":
        case 'canceled':
            res = {
                // backgroundColor: 'rgba(255, 36, 20, 0.1)',
                color: '#FF2414'
            }
            break;
        case 'unverified':
        case 'in transit':
            res = {
                // backgroundColor: 'rgba(255, 245, 218, 1)',
                color: '#ECB528'
            }
            break;
        case 'new request':
        case 'pending':
        case 'dispatched':
            res = {
                // backgroundColor: 'rgba(44, 40, 236, 0.2)',
                color: '#2C28EC'
            }
            break;
        case 'active':
        case 'verified':
        case 'delivered':
        case 'serviced':
        case 'paid':
        case 'completed':
            res = {
                // backgroundColor: '#EBF9E9',
                color: '#2B6112'
            }
            break;
        default: {
            return {}
        }
    }
    if (colorizeStatus) {
        return res;
    }
}
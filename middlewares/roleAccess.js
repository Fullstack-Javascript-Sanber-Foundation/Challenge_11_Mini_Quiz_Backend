const roleAccess = (userRole, endpoint) => {
    if (endpoint === '/user' || endpoint === '/quiz' || endpoint === '/choice' || endpoint === '/question' && userRole === 'superadmin') {
        return true
    } else if (endpoint === '/dashboard' || endpoint === '/choice' && userRole === 'user') {
        return true
    } else if (endpoint === '/profile' && userRole === 'user') {
        return true
    } else {
        return false
    }
}

export default roleAccess
const errorHandler = (err, req, res, next) => {
    let statusCode
    let message

    switch (err.message) {
        case "Missing_Token":
            statusCode = 401
            message = "Missing access token"
            break
        case "Exist_some_error":
            statusCode = 500
            message = "Exist some error"
            break
        case "User_not_Registered":
            statusCode = 404
            message = "User not registered"
            break
        default:
            statusCode = 500
            message = "Internal server error"
            break
    }

    return res.status(statusCode).json({
        success: false,
        message
    })
}

export default errorHandler
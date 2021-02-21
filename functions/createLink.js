
const axios = require('axios')

require('dotenv').config()

const { CREATE_LINK } = require('./utils/linkQueries')

const sendQuery = require('./utils/sendQuery')

const formatResponse = require('./utils/formatResponse')

exports.handler = async (event) => {

    if(event.httpMethod !== 'POST'){
        return formatResponse(405 , 'Method not supported')
    }

    const { name , url , description } = JSON.parse(event.body)

    const variables = {name , url , description , archived : false}

try {
    
    const {createLink : createdLink} = await sendQuery(CREATE_LINK , variables)

    return formatResponse(200 , createdLink)

} catch (error) {
    console.log(error);
    return formatResponse(500 , {err : 'Something went wrong'})
}


}

const axios = require('axios')

require('dotenv').config()

const { UPDATE_LINK } = require('./utils/linkQueries')

const sendQuery = require('./utils/sendQuery')

const formatResponse = require('./utils/formatResponse')

exports.handler = async (event) => {


    if(event.httpMethod !== 'PUT'){
        return formatResponse(405 , 'Method not supported')
    }

    const { name , url , description, _id:id , archived } = JSON.parse(event.body)

    const variables = {name , url , description, id  , archived : false}

try {
    
    const {updateLink : updatedLink} = await sendQuery(UPDATE_LINK , variables)

    return formatResponse(200 , updatedLink)

} catch (error) {
    console.log(error);
    return formatResponse(500 , {err : 'Something went wrong'})
}


}
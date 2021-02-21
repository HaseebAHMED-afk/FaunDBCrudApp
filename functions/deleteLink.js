
const axios = require('axios')

require('dotenv').config()

const { DELETE_LINK } = require('./utils/linkQueries')

const sendQuery = require('./utils/sendQuery')

const formatResponse = require('./utils/formatResponse')

exports.handler = async (event) => {


    if(event.httpMethod !== 'DELETE'){
        return formatResponse(405 , 'Method not supported')
    }


    const { id } = JSON.parse(event.body)

    const variables = {id}

try {
    
    const {deleteLink : deletedLink} = await sendQuery(DELETE_LINK , variables)

    return formatResponse(200 , deletedLink)

} catch (error) {
    console.log(error);
    return formatResponse(500 , {err : 'Something went wrong'})
}


}
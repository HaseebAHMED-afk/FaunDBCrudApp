
const axios = require('axios')

require('dotenv').config()

const { GET_LINKS } = require('./utils/linkQueries')

const sendQuery = require('./utils/sendQuery')

const formatResponse = require('./utils/formatResponse')

exports.handler = async (event) => {

    if(event.httpMethod !== 'GET'){
        return formatResponse(405 , 'Method not supported')
    }

try {
    
    const response = await sendQuery(GET_LINKS)

    const data = response.allLinks.data;

    return formatResponse(200 , data)

} catch (error) {
    console.log(error);
    return formatResponse(500 , {err : 'Something went wrong'})
}


}

const axios = require('axios')

require('dotenv').config()

exports.handler = async (event) => {

const GET_LINKS = `

    query {
        allLinks{
            data{
                _id
                name
                url
                description
            }
        }
    }

`
const {data : {data}} = await axios({
    
})

}
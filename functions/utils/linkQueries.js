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

module.exports = {
    GET_LINKS,
}
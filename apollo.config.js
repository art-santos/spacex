module.exports = {
    client: { 
        includes: ['./src/queries/**/*.ts'], 
        service: {
        name: 'spacex',
        url: 'https://api.spacex.land/graphql/'
    } }
,};
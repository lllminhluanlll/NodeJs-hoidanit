const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! & hml')
}

const getABC = (req, res) => {
    res.send('Hello abc')
}

const getHml = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHml
}
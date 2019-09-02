const CrawlE = require('crawl-e/v0.4.9')



const crawlE = new CrawlE({
    cinemas: [
        {
            name: 'Burg Kino',
            website: 'https://www.burgkino.at/',
            address: 'Opernring 19, 1010 Vienna',
            phone: '(+43 1) 587 84 06'
        }
    ],
    showtimes: {
        url: 'https://www.burgkino.at/showtimes/:page([today,tomorrow,this-week,next-week]):',
        movies: {
            box: '.view-content .views-row article.movies',
            title: {
              selector: 'div:nth-child(1) .field--name-node-title h2',
              attribute: 'ownText()'
            }, 
            showtimes: {
                box: '.views-field-field-startdatetime-1 time',
            }
        }
    }
})


crawlE.crawl()

const CrawlE = require('crawl-e/v0.4.9')

let crawlE = new CrawlE({
        cinemas: [
          {
            name: 'Kino Freistadt',
            address: 'Salzgasse 25, 4240 Freistadt',
            website: 'https://www.kino-freistadt.at/',
            phone: '0662-87 31 00'
          }
        ],

            showtimes: {
              url: 'https://www.kino-freistadt.at/?site=program&date=:date:',
              urlDateFormat: 'DD-MM-YYYY',
              urlDateCount: 2, 
              movies: {
                box: '.dailyProgramMovieBox',
                title: '.dailyProgramContentMovie',
                showtimes: {
                  box: '.dailyProgramTime',
                }
              }
            }
          
      })

    crawlE.crawl()

const CrawlE = require('crawl-e/v0.4.9')

let crawlE = new CrawlE ({
    cinemas: [
              {
                  name: 'Kino Eggenfelden',
                  website: 'http://www.kino-eggenfelden.de/',
                  address: 'Schellenbruckplatz 8 - 84307 Eggenfelden',
                  phone: '08721-2137'
              }
          ],
          showtimes: {
            url: 'http://www.kino-eggenfelden.de/programm.aspx?cid=:page(1,2):',
            table: {
              selector: 'table tbody tr:nth-of-type(3) td table tbody tr td:nth-of-type(2) div table:nth-of-type(2) tbody tr:not([attr_all])',
              
              headerColumn: {
                movieTitle: ':box'
              },
              cells: {
                showtimes: {
                  box: 'a',
                  timeFormat: 'HH:mm'
                }
              }
            }
          }
    
  })

  
//   showtimes: {
//     url: 'http://www.kino-eggenfelden.de/programm.aspx?cid=:page(1,2):',
//     movies: {
//       box: 'table tbody tr:nth-of-type(3) td table tbody tr td:nth-of-type(2) div table:nth-of-type(2) tbody tr:not([attr_all])',
//       table: {
//         headerRow: {
//           date: ':box',
//           dateFormat: 'DD.MM.YYYY'
//         },
//         cells: {
//           showtimes: {
//             box: ':box',
//             timeFormat: 'HH:mm'
//           }
//         }
//       }
//     }
//   }

  crawlE.crawl()

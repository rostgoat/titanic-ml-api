const fs = require('fs')
const fastcsv = require('fast-csv')
const Pool = require('pg').Pool

module.exports.importExcelData = () => {
  const path = './covid_data.csv'
  const stream = fs.createReadStream(path)
  const csvData = []
  const csvStream = fastcsv
    .parse()
    .on('data', function(data) {
      csvData.push(data)
    })
    .on('end', function() {
      // remove the first line: header
      csvData.shift()

      // create a new connection to the database
      const pool = new Pool({
        host: 'localhost',
        user: 'rm',
        database: 'covid19',
        password: 'root',
        port: 5432,
      })

      const query =
        'INSERT INTO patients (patient_id, gender, age, province, infection_case, patient_state, infection_type) VALUES ($1, $2, $3, $4, $5, $6, $7)'

      pool.connect((err, client, done) => {
        if (err) throw err

        try {
          csvData.forEach(row => {
            client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack)
              } else {
                console.log('inserted ' + res.rowCount + ' row:', row)
              }
            })
          })
        } finally {
          done()
        }
      })
    })

  stream.pipe(csvStream)
}

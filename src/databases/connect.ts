import { createConnection } from 'typeorm'

createConnection().then(() => console.log('\u{1F6AC} Successfully connected with database'))

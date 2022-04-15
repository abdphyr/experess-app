import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config';
import { booksRouter } from './routes/books';
import { homeRoter } from './routes/home';

const app = express()
app.use(express.json());
app.use('/api/books', booksRouter)
app.use('/', homeRoter)
// app.use(logger)
// app.use(authentication)

app.use(helmet())
if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    // console.log("Logger ishlayapti ...")
}

// console.log(config.get('name'))
// console.log(config.get('mailserver.host'))
// console.log(config.get('mailserver.password'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('statics'))
app.set('view engine', 'pug')

// console.log(process.env.NODE_ENV)
// console.log(app.get('env'))

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`${port}chi portni eshitishni boshladim`)
})
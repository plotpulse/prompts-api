import cookieParser from 'cookie-parser';
import * as logger from 'morgan'
import express from 'express';

const { Request, Response, NextFunction } = express


const  createError = require('http-errors');

/////////////



const app = express();

/////////////////



app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(logger('dev'))
app.use(cookieParser())


// routers

app.use('/',  function(req, res, next) {
  res.send('hello world');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
import superagent from 'superagent';
import Promise from 'bluebird';

export default {

  get: (url, params) => {
    return new Promise((resolve, reject) => {

      superagent
      .get(url)
      .query(params)
      .set('accept', 'json')
      .end((err, response) => {
        if (err){
          reject(err);
          return;
        }

        // if (response.confirmation != 'success'){
        //   reject(new Error(response.body.message));
        // }

        resolve(response.body);
      });
    });
  },

  post: (url, params) => {
    return new Promise((resolve, reject) => {

      superagent
      .post(url)
      .send(params)
      .set('accept', 'json')
      .end((err, response) => {
        if (err){
          reject(err);
          return;
        }

        // if (response.confirmation != 'success'){
        //   reject(new Error(response.body.message));
        // }

        resolve(response.body);
      });
    });
  },

  put: (url, params) => {
    return new Promise((resolve, reject) => {

      superagent
      .put(url)
      .send(params)
      .set('accept', 'json')
      .end((err, response) => {
        if (err){
          reject(err);
          return;
        }

        resolve(response.body);
      })
    })
  }

}
export class Crew {
  constructor($http) {
    'ngInject';

    this._$http = $http;
  }

  get(id) {
    return this._$http.get('./app/components/crew/crew.json')
      .then(res => {
        if (id) {
          for (let i = 0, len = res.data.length; i < len; i++) {
            if (res.data[i].id.toString() === id) {
              return res.data[i];
            }
          }
        } else {
          return res.data;
        }
      });
  }
}

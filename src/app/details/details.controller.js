export class DetailsController {
  constructor ($stateParams, Crew) {
    'ngInject';

    Crew.get($stateParams.crewId)
      .then(data => { this.crewMember = data; });
  }
}

export class MainController {
  constructor ($timeout) {
    'ngInject';

    this.activate($timeout);
  }

  activate($timeout) {
    $timeout(() => {
    }, 4000);
  }
}

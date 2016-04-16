/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { Henchmen } from '../app/components/henchmen/henchmen.service';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('starfleet', ['ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('Henchmen', Henchmen)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective);

/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { DetailsController } from './details/details.controller';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { Crew } from '../app/components/crew/crew.service';

angular.module('starfleet', ['ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('DetailsController', DetailsController)
  .controller('MainController', MainController)
  .directive('sfNavbar', NavbarDirective)
  .service('Crew', Crew);

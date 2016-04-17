export class MainController {
  constructor (Crew) {
    'ngInject';

  this.filterResults = person => {
    let nameMatch = !this.filterName ||
      person.firstName.toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1 ||
      person.lastName.toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1;
    let rankMatch = !this.filterRank ||
      person.rank.toLowerCase().indexOf(this.filterRank.toLowerCase()) !== -1;
    let postMatch = !this.filterPost ||
      person.post.toLowerCase().indexOf(this.filterPost.toLowerCase()) !== -1;
    let raceMatch = !this.filterRace ||
      person.race.toLowerCase().indexOf(this.filterRace.toLowerCase()) !== -1;
    return nameMatch && rankMatch && postMatch && raceMatch;
  };

    Crew.get()
      .then(data => { this.crew = data; });
  }

  toggleSort(property) {
    if (this.sortTerm === property) {
      if (this.sortReverse) {
        this.sortReverse = false;
        this.sortTerm = undefined;
      } else {
        this.sortReverse = true;
      }
    } else {
      this.sortTerm = property;
      this.sortReverse = false;
    }
  }
}

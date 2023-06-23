import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataServices, Service } from './../../data/service';
import { team, Team} from './../../data/team';
@Component({
  selector: 'app-filo-dark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filo-dark.component.html',
  styleUrls: ['./filo-dark.component.scss']
})
export class FiloDarkComponent {

  listService: Service[] = dataServices.slice();

  team: Team[] = team.slice();

}




























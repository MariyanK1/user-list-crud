import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/users.service';
import { IUser } from 'src/app/constants/data';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$!: Observable<IUser[]>;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  onDelete(id: number): void {
    const dialog = this.dialog.open(DialogComponent);

    dialog.afterClosed().subscribe((confirmed) => {
      if (confirmed) this.userService.deleteUser(id);
    });
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Anime } from '../shared/anime';

@Component({
  selector: 'dio-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.scss']
})

export class EditaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Anime
    ){ }

  ngOnInit(): void {
  }
  onCloseConfirm(){
    this.dialogRef.close('Confirm');

  }
  onCloseCancel(){
    this.dialogRef.close('Cancelado');
  }
}

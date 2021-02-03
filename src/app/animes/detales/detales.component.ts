import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Anime } from '../shared/anime';

@Component({
  selector: 'dio-detales',
  templateUrl: './detales.component.html',
  styleUrls: ['./detales.component.scss']
})

export class DetalesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalesComponent>,
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

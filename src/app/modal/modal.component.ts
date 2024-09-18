import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faXmark, faLink, faDownload, faHeart, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  faXmark = faXmark;
  faLink = faLink;
  faDownload = faDownload;
  faHeart = faHeart;
  faTag = faTag;

  isShow:boolean = false;
  @Input() image! :any;
  @Output() close = new EventEmitter<boolean>();

  closeModal(){
    this.close.emit(true);
  }

  onClickImage(){
    this.isShow =!this.isShow;
  }

}

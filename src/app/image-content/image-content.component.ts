import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../images.service';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.css']
})
export class ImageContentComponent implements OnInit {

  faHeart = faHeart;
  faXmark = faXmark;

  selectedImage! : any;

  @Input() images: any;

  constructor(private imagesService : ImagesService){}

  ngOnInit(): void {
    this.getImages()
  }

  getImages(){
    this.imagesService.getImages().subscribe((data)=>{
      this.images= data.hits;
    })
  }

  onSelectImage(image:any){
    this.selectedImage = image;
  }

  closeModal(){
    this.selectedImage = null;
  }

}

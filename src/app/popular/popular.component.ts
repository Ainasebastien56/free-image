import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { faHeart, faEye, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit{
   order:string = 'popular';
   page: number = 10;

   images:any[] =[];
   selectedImage! : any;

   faHeart =  faHeart;
   faEye = faEye;
   faDownload = faDownload;

  constructor(private imagesService: ImagesService){}


  ngOnInit(): void {

        this.imagesService.getImages(this.order, this.page).subscribe((data)=>{
          this.images = data.hits;
        })
  }

  onSelectImage(image:any){
    this.selectedImage = image;
  }

  closeModal(){
    this.selectedImage = null;
  }

}

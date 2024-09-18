import { Component } from '@angular/core';
import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faPlus = faPlus;
  faChevronDown = faChevronDown;
  more:boolean = false;
  choose:boolean = false;
  selectedCategory:string = 'all';
  orientation:string = 'all';
  color:string ='white';
  searchTerm: string ='';
  images : any[] =[];


  constructor(private imagesService : ImagesService){}

  openMore(){
      this.more = !this.more;
  }

  selectCategory(){
    this.choose = !this.choose;
  }

  onRadioChange(){
    this.choose = !this.choose;
  }

  onSerch(){

    console.log('color :', this.color)
    console.log('orientation :', this.orientation)
    console.log('category :', this.selectedCategory)

    if(this.searchTerm && this.color && this.orientation && this.selectedCategory){
      this.imagesService.getSearchImages(this.searchTerm, this.color, this.selectedCategory, this.orientation).subscribe((data)=>{
        this.images = data.hits;
      })
    }
  }

}

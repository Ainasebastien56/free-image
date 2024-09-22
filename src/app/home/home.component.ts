import { Component } from '@angular/core';
import { faPlus, faChevronDown, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faPlus = faPlus;
  faChevronDown = faChevronDown;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  more:boolean = false;
  choose:boolean = false;
  selectedCategory:string = 'all';
  orientation:string = 'all';
  color:string ='white';
  searchTerm: string ='';
  currentPage: number = 1;
  per_page = 10;
  totalPages:number = 0;
  showBoutton:boolean = false;
  isLoading:boolean= false;
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

    if(this.searchTerm && this.color && this.orientation && this.selectedCategory){
      this.isLoading = true;
      this.imagesService.getSearchImages(this.searchTerm, this.currentPage, this.per_page, this.color, this.selectedCategory, this.orientation).subscribe((data)=>{
        this.images = data.hits;
        this.isLoading = false;
        this.totalPages = Math.ceil(data.totalHits / this.per_page);
        if(this.totalPages > 10){
            this.showBoutton = true;
        }
      })
    }
  }

  nextPage(){
    if(this.currentPage < this.totalPages){
      this.currentPage++
      this.onSerch()
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--
      this.onSerch()
    }
  }

}

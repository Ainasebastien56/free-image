import { Component } from '@angular/core';
import { faPlus, faChevronDown, faAngleDoubleLeft, faAngleDoubleRight, faFilter, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faPlus = faPlus;
  faFilter = faFilter ;
  faChevronDown = faChevronDown;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faSquareXmark  = faSquareXmark ;
  more:boolean = false;
  choose:boolean = false;
  selectedCategory:string = 'all';
  image_type:string = 'all';
  select_type:boolean =false;
  orientation:string = 'all';
  color:string ='white';
  searchTerm: string ='';
  currentPage: number = 1;
  per_page = 30;
  totalPages:number = 0;
  showBoutton:boolean = false;
  isLoading:boolean= false;
  isFilterVisible: boolean = false;
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
    this.onSearch()
  }

  selectTypeImage(){
    this.select_type = !this.select_type;
  }

  scrollTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  onTypeChange(){
    this.select_type = !this.select_type;
    this.scrollTop();
    this.onSearch();
    this.toggleFilter();
  }

  onSearch(){

    if(this.searchTerm && this.color && this.orientation && this.selectedCategory && this.image_type){
      this.isLoading = true;
      this.imagesService.getSearchImages(this.searchTerm, this.currentPage, this.per_page, this.color, this.selectedCategory, this.orientation, this.image_type).subscribe((data)=>{
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
      this.scrollTop();
      this.onSearch()
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--
      this.scrollTop();
      this.onSearch()
    }
  }

  selectColor(){
    this.onSearch();
  }

  selectOrientation(){
    this.onSearch();
  }

  toggleFilter(){
      this.isFilterVisible = !this.isFilterVisible;
  }

  closeFilter(){
    this.isFilterVisible = !this.isFilterVisible;
  }

}

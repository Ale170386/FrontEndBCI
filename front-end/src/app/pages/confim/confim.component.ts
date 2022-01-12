import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PollComponent} from '.././../modals/poll/poll.component';

@Component({
  selector: 'app-confim',
  templateUrl: './confim.component.html',
  styleUrls: ['./confim.component.css']
})
export class ConfimComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.modalService.open(PollComponent);
    }, 3000)
  }

  previous(){
    this.router.navigate( ['/company'] );
  }

  homePage(){
    this.router.navigate( ['/home'] );
  }

  open() {
    const modalRef = this.modalService.open(PollComponent);
  } 

}

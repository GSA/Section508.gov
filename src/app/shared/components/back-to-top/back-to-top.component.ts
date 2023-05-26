import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let topButton = document.getElementById('backtotop');
    if (topButton instanceof HTMLElement) {
      window.onscroll = function () {
        scrollFunction(topButton)
      };
      topButton.onclick = function () {
        document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
      };
    }
  }
}

function scrollFunction(topButton: HTMLElement | null) {
  if (topButton instanceof HTMLElement) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  }
}
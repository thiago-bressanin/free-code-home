import { Component, OnInit } from '@angular/core';
import * as tree from 'three';

@Component({
    selector: 'fcode-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public info: any = null;

    public source = {
        background: 'url("../assets/kickflip.gif") no-repeat center',
        width: '100%'
    };

    public interval: any;

    public progressBar = {
        style: {
            width: '0%'
        },
    }

    event(event: any) {
        this.info = event;
    }

    ngOnInit(): void {
        this.start();
    }

    public fakeArray = (number: number) => {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

    public start() {
        // let current_progress = 0;
        // let step = 0.1; // the smaller this is the slower the progress bar
        // this.interval = setInterval(() => {
        //   current_progress += step;
        //   let progress = Math.round(Math.atan(current_progress) / (Math.PI / 2) * 100 * 1000) / 1000
        //   this.progressBar.style.width = progress + '%';
        //   console.log(JSON.stringify(this.progressBar));
        //   if (progress >= 100) {
        //     clearInterval(this.interval);
        //   } else if (progress >= 60 && progress <= 80) {
        //     step = 0.2
        //   }
        //   else if (progress >= 80 && progress <= 95) {
        //     step = 0.4
        //   }
        //   else if (progress <= 98) {
        //     step = 0.2
        //   }
        //   else {
        //     step = 0.1
        //   }
        // }, 100);
    }

}

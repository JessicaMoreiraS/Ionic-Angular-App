import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public alertButtons = ['OK'];
  constructor() {}

    progressValue: number = 0;

    ngOnInit() {
      // Simule o progresso carregando a cada 1 segundo (1000 ms)
      const interval = setInterval(() => {
        this.progressValue += 0.1; // Aumente o progresso em 10% a cada segundo

        if (this.progressValue >= 1) {
          clearInterval(interval); // Pare o intervalo quando o progresso atingir 100%
        }
      }, 500);
    }

}

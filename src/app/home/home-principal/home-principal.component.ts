import { Component, OnInit } from '@angular/core';
import { DbPostsService } from 'src/app/services/db-posts.service';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.scss']
})
export class HomePrincipalComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  constructor(
    private DbPostsService: DbPostsService
  ) { }
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    var puntaje = 0;
    var LabelsResponses = [
      "Nivel 1",
      "Nivel 2",
      "Nivel 3",
      "Nivel 4"
    ]
    var labelsPoints = [
      25000,
      50000,
      75000,
      100000
    ]
    this.DbPostsService.getUser().subscribe((response) => {
      if (response.user) {
        puntaje = response.user.puntaje
        console.log(response.user)
        console.log(response.user.puntaje)
        if(puntaje < 50000){
          LabelsResponses[0] = "Estás en el nivel 1"
          labelsPoints[0] = puntaje
        } else if(puntaje < 75000){
          LabelsResponses[1] = "Estás en el nivel 2"
          labelsPoints[1] = puntaje
        } else if(puntaje < 100000){
          LabelsResponses[2] = "Estás en el nivel 3"
          labelsPoints[2] = puntaje
        } else if(puntaje >= 100000){
          LabelsResponses[3] = "Estás en el nivel 4"
          labelsPoints[3] = puntaje
        }
      }
      this.basicData = {
        labels: ['Nivel 1', 'nivel 2', 'nivel 3', 'nivel 4'],
        datasets: [
          {
            label: LabelsResponses[0],
            data: [labelsPoints[0]],
            backgroundColor: ['rgb(255, 159, 64)'],
          },
          {
            label: LabelsResponses[1],
            data: [0, labelsPoints[1]],
            backgroundColor: ['rgb(75, 192, 192)']
          },
          {
            label: LabelsResponses[2],
            data: [0, 0, labelsPoints[2]],
            backgroundColor: ['rgb(54, 162, 235)']
          },
          {
            label: LabelsResponses[3],
            data: [0, 0, 0, labelsPoints[3]],
            backgroundColor: ['rgb(153, 102, 255)']
          }
        ]
      };
      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    })
  }
}


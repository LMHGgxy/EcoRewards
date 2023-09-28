import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  items: MenuItem[] = [
    {
      label: 'Usuario',
      icon: 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0',
      tooltipOptions: {
        tooltipLabel: 'Perfil',
        tooltipPosition: 'left',
        showDelay: 10
      },
      routerLink: ["/home/Profile"]
    },
    {
      label: 'Home',
      icon: 'https://static.vecteezy.com/system/resources/previews/001/200/294/non_2x/house-png.png',
      tooltipOptions: {
        tooltipLabel: 'Home',
        tooltipPosition: 'left',
        showDelay: 10
      },
      routerLink: ["/home"]
    },
    {
      label: 'Usuarios',
      icon: 'https://apl.finagro.com.co/infoagro/Resources/Images/usuarios.png',
      tooltipOptions: {
        tooltipLabel: 'Leaderboard',
        tooltipPosition: 'bottom',
        showDelay: 10
      },
      routerLink: ["/home/Leaderboard"]
    },
    {
      label:'Informacion',
      icon:'https://3.bp.blogspot.com/-u0DmxdK3cns/VORKlgKx8sI/AAAAAAAAAH8/tgo3TE9hC2Y/s1600/buscando.png',
      tooltipOptions:{
        tooltipLabel: 'Información',
        tooltipPosition: 'bottom',
        showDelay:10
      },
      routerLink:["/home/informacion"]
    },

  ];

  position: string = 'left';
}


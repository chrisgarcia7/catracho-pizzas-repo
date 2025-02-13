import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, text } from 'ionicons/icons';
import { removeCircle } from 'ionicons/icons';
import { addCircle } from 'ionicons/icons';


@Component({
  selector: 'app-pizzacard',
  standalone: true,
  templateUrl: './pizzacard.component.html',
  styleUrls: ['./pizzacard.component.scss'],
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, CommonModule, IonIcon]
})
export class PizzacardComponent {
  constructor() {
    
    addIcons({ addOutline });
    addIcons({ removeCircle });
    addIcons({ addCircle });
  }
  cantidadpizzas: number=1


  sumarpizzas(): void{
    this.cantidadpizzas=this.cantidadpizzas+1
  }

  restarpizzas(): void{
    if(this.cantidadpizzas==1){
      this.cantidadpizzas=1
    }else{
      this.cantidadpizzas=this.cantidadpizzas-1
    }
  }

  private readonly alertController= inject( AlertController);

  
  async ordenarpizza(): Promise<void>{
    const ordenarpizzaAlert = await this.alertController.create({
      header: 'Ordenar Pizza',
      subHeader: 'Ha agregado correctamente el producto a su carrito',
    });
    await ordenarpizzaAlert.present();
  }

}

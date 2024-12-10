<<<<<<< HEAD
import { Component, ElementRef, Renderer2, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
=======
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
>>>>>>> huber

@Component({
  selector: 'app-faq',
  standalone: true,
<<<<<<< HEAD
  imports: [
    MenuComponent,
    CommonModule,
  ],
=======
  imports: [MenuComponent,],
>>>>>>> huber
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {
  // Usamos ViewChildren para manejar múltiples preguntas
  @ViewChildren('faqQuestion') faqQuestions!: QueryList<ElementRef<HTMLElement>>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Esperamos a que las preguntas estén disponibles en la vista
    this.faqQuestions.forEach((faqQuestion: ElementRef) => {
      const questionElement = faqQuestion.nativeElement;
      const answerElement = questionElement.nextElementSibling; // La respuesta está justo después de la pregunta

      // Aseguramos que la respuesta esté oculta inicialmente
      this.renderer.setStyle(answerElement, 'display', 'none');

      // Añadimos el evento de clic para hacer el toggle de la respuesta
      this.renderer.listen(questionElement, 'click', () => {
        const currentDisplay = window.getComputedStyle(answerElement).display;

        // Hacemos toggle del estilo de display
        if (currentDisplay === 'block') {
          this.renderer.setStyle(answerElement, 'display', 'none');
        } else {
          this.renderer.setStyle(answerElement, 'display', 'block');
        }
      });
    });
  }
}

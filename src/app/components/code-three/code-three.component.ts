import { Component } from '@angular/core';
import {Notify} from "notiflix";

@Component({
  selector: 'app-code-three',
  templateUrl: './code-three.component.html',
  styleUrls: ['./code-three.component.css']
})
export class CodeThreeComponent {
    public codeText: string = '';
    public text: string = 'ни шагу назад';

    public checkText(): void {
        if (this.text.toLowerCase() === this.codeText.toLowerCase().trim()) {
            Notify.success('Поздравляю! Вы успешно расшифровали сообщение!');
        } else {
            Notify.failure('К сожалению, расшифровка некорректна!');
        }
    }
}

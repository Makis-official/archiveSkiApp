import {Component, OnInit} from '@angular/core';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-code-two',
  templateUrl: './code-two.component.html',
  styleUrls: ['./code-two.component.css']
})
export class CodeTwoComponent implements OnInit {
    public codeText: string = '';
    public text: string = 'ни шагу назад';

    public checkText(): void {
        if (this.text.toLowerCase() === this.codeText.toLowerCase().trim()) {
            Notify.success('Поздравляю! Вы успешно расшифровали сообщение!');
        } else {
            Notify.failure('К сожалению, расшифровка некорректна!');
        }
    }

    public ngOnInit() {
        window.scrollTo(0, 0);
    }
}

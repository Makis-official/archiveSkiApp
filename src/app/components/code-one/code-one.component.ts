import {Component, OnInit} from '@angular/core';
import { Notify } from "notiflix";

@Component({
    selector: 'app-code-one',
    templateUrl: './code-one.component.html',
    styleUrls: ['./code-one.component.css']
})
export class CodeOneComponent implements OnInit {
    public codeText: string = '';
    public text: string = 'Тяжело в учении - легко в бою';

    public checkText(): void {
        if (this.text.toLowerCase() === this.codeText.toLowerCase()) {
            Notify.success('Поздравляю! Вы успешно расшифровали сообщение!');
        } else {
            Notify.failure('К сожалению, расшифровка некорректна!');
        }
    }

    public ngOnInit() {
        window.scrollTo(0, 0);
    }
}

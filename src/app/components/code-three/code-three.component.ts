import {Component, OnInit} from '@angular/core';
import {Notify} from "notiflix";

@Component({
  selector: 'app-code-three',
  templateUrl: './code-three.component.html',
  styleUrls: ['./code-three.component.css']
})
export class CodeThreeComponent implements OnInit {
    public codeText: string = '';
    public text: string = 'Надо быть очень смелым человеком, чтобы быть трусом в Красной Армии.';
    public text2: string = 'Надо быть очень смелым человеком, чтобы быть трусом в Красной Армии';

    public checkText(): void {
        if (this.text.toLowerCase() === this.codeText.toLowerCase().trim() || this.text2.toLowerCase() === this.codeText.toLowerCase().trim()) {
            Notify.success('Поздравляю! Вы успешно расшифровали сообщение!');
        } else {
            Notify.failure('К сожалению, расшифровка некорректна!');
        }
    }

    public ngOnInit() {
        window.scrollTo(0, 0);
    }
}

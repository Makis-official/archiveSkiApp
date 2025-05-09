import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-all-codes',
    templateUrl: './all-codes.component.html',
    styleUrls: ['./all-codes.component.css']
})
export class AllCodesComponent implements OnInit {

    public cards = [
        {
            title: 'шифрование',
            description: 'В военное время шифрование играло ключевую роль в обеспечении секретности связи. Использовались как кодовые книги и таблицы, так и шифровальные машины, для защиты стратегической информации от вражеской разведки.',
            btnName: 'Попробовать',
            link: '/code-one',
        },
        {
            title: 'азбука морзе',
            description: 'Азбука Морзе активно использовалась для передачи сообщений на большие расстояния. Этот простой, но эффективный способ кодирования информации позволял оперативно обмениваться данными даже в условиях плохой связи или радиопомех.',
            btnName: 'Попробовать',
            link: '/code-two',
        },
        {
            title: 'Атбаш',
            description: 'Щифр подстановки, где каждая буква алфавита заменяется на её «зеркальную» букву. То есть первая буква алфавита заменяется на последнюю, вторая — на предпоследнюю и так далее.',
            btnName: 'Попробовать',
            link: '/code-three',
        },
    ];

    public ngOnInit() {
        window.scrollTo(0, 0);
    }
}

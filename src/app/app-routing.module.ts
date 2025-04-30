import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AllCodesComponent } from './components/all-codes/all-codes.component';
import { CodeOneComponent } from './components/code-one/code-one.component';
import { CodeTwoComponent } from './components/code-two/code-two.component';
import { CodeThreeComponent } from './components/code-three/code-three.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        title: 'Секретный архив'
    },
    {
        path: 'allCodes',
        component: AllCodesComponent,
        title: 'Задания'
    },
    {
        path: 'code-one',
        component: CodeOneComponent,
        title: 'Шифрование'
    },
    {
        path: 'code-two',
        component: CodeTwoComponent,
        title: 'Азбука Морзе'
    },
    {
        path: 'code-three',
        component: CodeThreeComponent,
        title: 'Стеганография'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

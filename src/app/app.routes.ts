import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { StockSuggestionsComponent } from './stock-suggestions/stock-suggestions.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MemberComponent },
    { path: 'stockSuggestions', component: StockSuggestionsComponent },
    { path: '**', component: LoginComponent }
];
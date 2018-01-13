import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { StockSuggestionsComponent } from './stock-suggestions/stock-suggestions.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MemberComponent },
    { path: 'stockSuggestions', component: StockSuggestionsComponent },
    { path: '**', component: HomeComponent }
];
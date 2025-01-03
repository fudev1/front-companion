import { Routes } from '@angular/router';
import { HomeComponent } from './p-main/pages/home/home.component';
import { HomeNewWorldComponent } from './p-new-world/pages/home-new-world/home-new-world.component';
import { AboutComponent } from './p-main/pages/about/about.component';
import { ContactComponent } from './p-main/pages/contact/contact.component';
import { NewsComponent } from './p-main/pages/news/news.component';
import { LayoutMainComponent } from './p-main/layout-main.component';
import { LayoutNewWorldComponent } from './p-new-world/layout-new-world.component';
import { LayoutThronesLibertyComponent } from './p-thrones-liberty/layout-thrones-liberty.component';
import { CompaniesNewWorldComponent } from './p-new-world/pages/companies-new-world/companies-new-world.component';
import { WarsNewWorldComponent } from './p-new-world/pages/wars-new-world/wars-new-world.component';
import { ServersNewWorldComponent } from './p-new-world/pages/servers-new-world/servers-new-world.component';
import { ForumNewWorldComponent } from './p-new-world/pages/forum-new-world/forum-new-world.component';
import { HomeThronesLibertyComponent } from './p-thrones-liberty/pages/home-thrones-liberty/home-thrones-liberty.component';
import { LoginComponent } from './core/auth/login/login.component';
import { TenantLayoutComponent } from './p-new-world/tenant/layout/tenant-layout.component';
import { OverviewComponent } from './p-new-world/tenant/pages/overview/overview.component';
import { AuthRequiredComponent } from './core/auth/components/auth-required/auth-required.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { CharactersNewWorldComponent } from './p-new-world/pages/characters-new-world/characters-new-world.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutMainComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'news', component: NewsComponent },
        ]
    },
    
    {
        path: 'new-world',
        component: LayoutNewWorldComponent,
        children: [
            { path: '', component: HomeNewWorldComponent },
            { path: 'companies', component: CompaniesNewWorldComponent },
            { path: 'wars', component: WarsNewWorldComponent },
            { path: 'servers', component: ServersNewWorldComponent },
            { path: 'forum', component: ForumNewWorldComponent },
            { 
                path: 'characters', 
                component: CharactersNewWorldComponent,
                canActivate: [authGuard]
            },

        ]
    },

    {
        path: 'new-world/companies/:id',
        component: TenantLayoutComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'members', component: OverviewComponent },
            { path: 'wars', component: OverviewComponent },
            { path: 'roster', component: OverviewComponent }
        ]
    },

    {
        path: 'thrones-liberty',
        component: LayoutThronesLibertyComponent,
        children : [
            { path: '', component: HomeThronesLibertyComponent },
        ]
    },

    {
        path: 'auth-required',
        component: AuthRequiredComponent
    },

    { path: 'login/callback', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/' }
];

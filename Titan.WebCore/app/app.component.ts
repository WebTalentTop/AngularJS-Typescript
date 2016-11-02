import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var Ultima: any;

@Component({
    moduleId: module.id,
    selector: 'titan-web',
    templateUrl: './app.component.html'
})
export class AppComponent {
    layoutCompact: boolean = true;

    layoutMode: string = 'static';

    darkMenu: boolean = false;

    profileMode: string = 'inline';

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        console.log("----- Native Element ---------", this.el.nativeElement);
        Ultima.init(this.el.nativeElement);
    }

    changeTheme(event, theme) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        let layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');

        console.log("------- Theme --------", theme);

        themeLink.href = 'resources/theme/theme-' + theme + '.css';
        layoutLink.href = 'resources/layout/css/layout-' + theme + '.css';
        event.preventDefault();
    }
}
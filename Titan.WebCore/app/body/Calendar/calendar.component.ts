import { titanApiUrl } from '../../shared/services/apiurlconst/titanapiurl';
import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;

@Component({
    selector: 'calendar',
    templateUrl: 'app/body/calendar/calendar.component.html'
})
export class CalendarComponent {
    constructor() { }
    initSchedule() {
        var scheduleConfig = {
            theme: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay,listMonth'
            },
            editable: true
            //events:{}
        };
        scheduleConfig.eventSources = [function (start, end, timezone, callback) {
            $.ajax({
                url: titanApiUrl + 'TestFacility/Schedule',
                type: 'POST',
                data: {
                    startdate: start.utc().format(),
                    enddate: end.utc().format(),

                },
                error: function () {
                    alert('there was an error while fetching events!');
                },
                success: function (result) {
                    var events = [];

                    $.each(result.calendarEvents.$values, function (index, element) {
                        element.start = element.start;
                        element.end = element.end;
                        element.title = element.title;
                        element.url = element.url;
                        events.push(element);
                    });
                    callback(events);
                }
            });
        }, function (start, end, timezone, callback) {
            $.ajax({
                url: titanApiUrl + 'TestFacility/Schedule',
                type: 'POST',
                data: {
                    startdate: start.utc().format(),
                    enddate: end.utc().format(),

                },
                error: function () {
                    alert('there was an error while fetching events!');
                },
                success: function (result) {
                    var events = [];

                    $.each(result.calendarEvents.$values, function (index, element) {
                        element.start = element.start;
                        element.end = element.end;
                        element.title = element.title;
                        element.url = element.url;
                        events.push(element);
                    });
                    callback(events);
                }
            });
        }];
        //scheduleConfig.events= 
        $('#calendar').fullCalendar(scheduleConfig);
    }
    ngOnInit() {
        this.initSchedule();
    }

}

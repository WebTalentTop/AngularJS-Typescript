import { TestFacilityService } from '../../shared/services/testfacility.service';
import { TestRequestService } from '../../shared/services/testrequest.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component,AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import { titanApiUrl } from '../../shared/services/apiurlconst/titanapiurl';


declare var $: JQueryStatic;
declare var fullcalendardef: FullCalendar.Calendar;
@Component({
    selector: 'test-request',
    templateUrl: 'app/body/TestRequest/testrequest.component.html'
})
export class TestRequestComponent implements AfterViewInit {
    
    ngAfterViewInit() {
        $('#calendar').fullCalendar({
            theme: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            defaultDate: '2016-09-12',

           // events:
            //function (start, end, timezone, callback) {
            //    $.ajax({
            //        url: titanApiUrl + 'TestFacility/Schedule',
            //        type: 'POST',
            //        data: {
            //            startdate: '1-1-2016',
            //            enddate: '12-31-2018',

            //        },
            //        error: function () {
            //            alert('there was an error while fetching events!');
            //        },
            //        success: function (result) {
            //            var events = [];

            //            $.each(result.calendarEvents.$values, function (index, element) {
            //                element.start = element.start;
            //                element.end = element.end;
            //                element.title = element.title;
            //                element.url = element.url;
            //                events.push(element);
            //            });
            //            callback(events);
            //        }
            //    })
            //},
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-12-01'
                },
                {
                    title: 'Click for Event',
                    url: titanApiUrl + 'timeEntry/get/{B4E2A8E1-ABA0-43E7-A9F1-6748DAB85FDD}',
                    type:'GET',
                    start: '2016-12-28'
                }
            ],
            // navLinks: true, // can click day/week names to navigate views
            editable: true
            //eventLimit: true
        });

    }
    ngOnInit() {
   
    }

    

}
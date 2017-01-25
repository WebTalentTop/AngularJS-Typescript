"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var titanapiurl_1 = require('../../shared/services/apiurlconst/titanapiurl');
var TestRequestComponent = (function () {
    function TestRequestComponent() {
    }
    TestRequestComponent.prototype.ngAfterViewInit = function () {
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
                    url: titanapiurl_1.titanApiUrl + 'timeEntry/get/{B4E2A8E1-ABA0-43E7-A9F1-6748DAB85FDD}',
                    type: 'GET',
                    start: '2016-12-28'
                }
            ],
            // navLinks: true, // can click day/week names to navigate views
            editable: true
        });
    };
    TestRequestComponent.prototype.ngOnInit = function () {
    };
    TestRequestComponent = __decorate([
        core_1.Component({
            selector: 'test-request',
            templateUrl: 'app/body/TestRequest/testrequest.component.html'
        })
    ], TestRequestComponent);
    return TestRequestComponent;
}());
exports.TestRequestComponent = TestRequestComponent;
